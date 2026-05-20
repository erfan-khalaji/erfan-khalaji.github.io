'use client'

import { useEffect, useRef } from 'react'

type Neuron = {
  layer: number
  x: number
  y: number
  baseX: number
  baseY: number
  driftPhase: number
  activation: number // 0..1, decays over time
}

type Edge = {
  from: number
  to: number
  weight: number // 0..1, edge brightness baseline
}

type Pulse = {
  edge: number
  t: number // 0..1 progress along edge
  speed: number
  intensity: number
}

const LAYER_SIZES = [5, 8, 10, 8, 5] as const

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const stateRef = useRef<{
    neurons: Neuron[]
    edges: Edge[]
    pulses: Pulse[]
    layerOffsets: number[]
    width: number
    height: number
    dpr: number
    mouse: { x: number; y: number; active: boolean }
    lastSpawn: number
    reduced: boolean
  } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    // Deterministic seeded RNG for stable layout
    let seed = 91237
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296
      return seed / 4294967296
    }

    const buildNetwork = (w: number, h: number) => {
      const neurons: Neuron[] = []
      const layerOffsets: number[] = []
      const layerCount = LAYER_SIZES.length
      const padX = w * 0.08
      const usableW = w - padX * 2
      const padY = h * 0.18
      const usableH = h - padY * 2

      LAYER_SIZES.forEach((count, layerIdx) => {
        layerOffsets.push(neurons.length)
        const lx = padX + (usableW * layerIdx) / (layerCount - 1)
        const slots = count - 1
        for (let i = 0; i < count; i++) {
          const slot = slots > 0 ? i / slots : 0.5
          const baseY = padY + slot * usableH + (rand() - 0.5) * 26
          const baseX = lx + (rand() - 0.5) * 18
          neurons.push({
            layer: layerIdx,
            x: baseX,
            y: baseY,
            baseX,
            baseY,
            driftPhase: rand() * Math.PI * 2,
            activation: 0,
          })
        }
      })

      const edges: Edge[] = []
      for (let l = 0; l < LAYER_SIZES.length - 1; l++) {
        const startA = layerOffsets[l]
        const endA = startA + LAYER_SIZES[l]
        const startB = layerOffsets[l + 1]
        const endB = startB + LAYER_SIZES[l + 1]
        for (let a = startA; a < endA; a++) {
          for (let b = startB; b < endB; b++) {
            // Skip ~35% of edges for visual breathing room
            if (rand() < 0.35) continue
            edges.push({ from: a, to: b, weight: 0.25 + rand() * 0.75 })
          }
        }
      }

      return { neurons, edges, layerOffsets }
    }

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = Math.max(rect?.width ?? window.innerWidth, 320)
      const h = Math.max(rect?.height ?? window.innerHeight, 320)
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const { neurons, edges, layerOffsets } = buildNetwork(w, h)
      stateRef.current = {
        neurons,
        edges,
        pulses: [],
        layerOffsets,
        width: w,
        height: h,
        dpr,
        mouse: { x: w / 2, y: h / 2, active: false },
        lastSpawn: 0,
        reduced: prefersReducedMotion,
      }
    }

    resize()

    const onMouseMove = (e: MouseEvent) => {
      const s = stateRef.current
      if (!s) return
      const rect = canvas.getBoundingClientRect()
      s.mouse.x = e.clientX - rect.left
      s.mouse.y = e.clientY - rect.top
      s.mouse.active = true
    }
    const onMouseLeave = () => {
      const s = stateRef.current
      if (s) s.mouse.active = false
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', resize)

    // Spawn initial wave so first paint isn't dead
    const spawnFromInputLayer = () => {
      const s = stateRef.current
      if (!s) return
      const inputCount = LAYER_SIZES[0]
      const idx = Math.floor(rand() * inputCount)
      const neuronIdx = s.layerOffsets[0] + idx
      // Spawn a pulse on each edge leaving this neuron
      for (let i = 0; i < s.edges.length; i++) {
        const e = s.edges[i]
        if (e.from !== neuronIdx) continue
        s.pulses.push({
          edge: i,
          t: 0,
          speed: 0.55 + rand() * 0.35,
          intensity: 0.6 + rand() * 0.4,
        })
      }
      // Activate the source neuron
      s.neurons[neuronIdx].activation = 1
    }

    // Pulse spawning helper for chaining through layers
    const propagate = (neuronIdx: number) => {
      const s = stateRef.current
      if (!s) return
      const layer = s.neurons[neuronIdx].layer
      if (layer >= LAYER_SIZES.length - 1) return
      // From this neuron, spawn pulses along outgoing edges (subset)
      for (let i = 0; i < s.edges.length; i++) {
        const e = s.edges[i]
        if (e.from !== neuronIdx) continue
        // Only fire a fraction of outgoing edges to keep it lively but not noisy
        if (rand() > 0.55) continue
        s.pulses.push({
          edge: i,
          t: 0,
          speed: 0.45 + rand() * 0.5,
          intensity: 0.55 + rand() * 0.4,
        })
      }
    }

    spawnFromInputLayer()

    let last = performance.now()

    const tick = (now: number) => {
      const s = stateRef.current
      if (!s) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now

      // Spawn new pulses periodically from the input layer
      if (!s.reduced && now - s.lastSpawn > 750) {
        s.lastSpawn = now
        spawnFromInputLayer()
      }

      const { width: w, height: h, neurons, edges, pulses, mouse } = s

      // Update neurons: gentle drift + mouse repulsion + activation decay
      for (let i = 0; i < neurons.length; i++) {
        const n = neurons[i]
        const t = now / 1000
        const driftX = Math.sin(t * 0.6 + n.driftPhase) * 4
        const driftY = Math.cos(t * 0.5 + n.driftPhase * 1.3) * 4
        let targetX = n.baseX + driftX
        let targetY = n.baseY + driftY

        if (mouse.active) {
          const dx = targetX - mouse.x
          const dy = targetY - mouse.y
          const dist2 = dx * dx + dy * dy
          const maxDist = 140
          if (dist2 < maxDist * maxDist) {
            const dist = Math.sqrt(dist2) || 0.001
            const force = (1 - dist / maxDist) * 22
            targetX += (dx / dist) * force
            targetY += (dy / dist) * force
          }
        }
        // ease toward target
        n.x += (targetX - n.x) * 0.18
        n.y += (targetY - n.y) * 0.18
        n.activation *= s.reduced ? 0.985 : 0.96
      }

      // Update pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.t += p.speed * dt
        if (p.t >= 1) {
          // arrived at target neuron — activate, propagate
          const e = edges[p.edge]
          const target = neurons[e.to]
          target.activation = Math.min(1, target.activation + p.intensity * 0.85)
          propagate(e.to)
          pulses.splice(i, 1)
        }
      }

      // Clear
      ctx.clearRect(0, 0, w, h)

      // Edges (base + dynamic glow on active edges)
      ctx.lineCap = 'round'
      for (let i = 0; i < edges.length; i++) {
        const e = edges[i]
        const a = neurons[e.from]
        const b = neurons[e.to]
        const baseAlpha = 0.06 + e.weight * 0.06
        ctx.strokeStyle = `rgba(139, 213, 255, ${baseAlpha})`
        ctx.lineWidth = 0.6
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }

      // Pulses (signals traveling along edges) with comet tails
      for (let i = 0; i < pulses.length; i++) {
        const p = pulses[i]
        const e = edges[p.edge]
        const a = neurons[e.from]
        const b = neurons[e.to]
        const dx = b.x - a.x
        const dy = b.y - a.y
        const px = a.x + dx * p.t
        const py = a.y + dy * p.t

        // Tail
        const tailSteps = 14
        for (let s2 = 0; s2 < tailSteps; s2++) {
          const tt = Math.max(0, p.t - s2 * 0.018)
          const tx = a.x + dx * tt
          const ty = a.y + dy * tt
          const alpha = (1 - s2 / tailSteps) * 0.5 * p.intensity
          const r = 2.6 * (1 - s2 / tailSteps) + 0.3
          const grad = ctx.createRadialGradient(tx, ty, 0, tx, ty, r * 3)
          grad.addColorStop(0, `rgba(187, 229, 255, ${alpha})`)
          grad.addColorStop(0.5, `rgba(83, 188, 255, ${alpha * 0.7})`)
          grad.addColorStop(1, 'rgba(42, 158, 255, 0)')
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(tx, ty, r * 3, 0, Math.PI * 2)
          ctx.fill()
        }

        // Head
        ctx.fillStyle = `rgba(238, 249, 255, ${0.95 * p.intensity})`
        ctx.beginPath()
        ctx.arc(px, py, 2.2, 0, Math.PI * 2)
        ctx.fill()
      }

      // Neurons
      for (let i = 0; i < neurons.length; i++) {
        const n = neurons[i]
        const act = n.activation
        const haloR = 14 + act * 18
        const haloAlpha = 0.08 + act * 0.45
        const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, haloR)
        halo.addColorStop(0, `rgba(83, 188, 255, ${haloAlpha})`)
        halo.addColorStop(1, 'rgba(42, 158, 255, 0)')
        ctx.fillStyle = halo
        ctx.beginPath()
        ctx.arc(n.x, n.y, haloR, 0, Math.PI * 2)
        ctx.fill()

        const coreR = 2 + act * 1.4
        ctx.fillStyle = act > 0.05 ? 'rgba(238, 249, 255, 0.95)' : 'rgba(187, 229, 255, 0.85)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, coreR, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-900" />
    </div>
  )
}
