export function PersianLionFlag() {
  return (
    <svg
      width="60"
      height="40"
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block shadow-lg rounded"
    >
      {/* Green stripe */}
      <rect width="60" height="13.33" fill="#239F40" />
      {/* White stripe */}
      <rect y="13.33" width="60" height="13.34" fill="#FFFFFF" />
      {/* Red stripe */}
      <rect y="26.67" width="60" height="13.33" fill="#DA0000" />
      
      {/* Lion and Sun emblem - centered on white stripe */}
      <g transform="translate(30, 20)">
        {/* Sun disk - golden circle */}
        <circle cx="0" cy="0" r="7" fill="#FFD700" stroke="#000" strokeWidth="0.3" />
        <circle cx="0" cy="0" r="5.5" fill="#FFD700" />
        
        {/* Sun rays - 8 rays extending outward */}
        <g stroke="#FFD700" strokeWidth="1.2" strokeLinecap="round">
          <line x1="0" y1="-9" x2="0" y2="-12" />
          <line x1="6.36" y1="-6.36" x2="8.49" y2="-8.49" />
          <line x1="9" y1="0" x2="12" y2="0" />
          <line x1="6.36" y1="6.36" x2="8.49" y2="8.49" />
          <line x1="0" y1="9" x2="0" y2="12" />
          <line x1="-6.36" y1="6.36" x2="-8.49" y2="8.49" />
          <line x1="-9" y1="0" x2="-12" y2="0" />
          <line x1="-6.36" y1="-6.36" x2="-8.49" y2="-8.49" />
        </g>
        
        {/* Lion - standing with sword */}
        <g transform="translate(0, 1)">
          {/* Lion's mane - full circular mane */}
          <circle cx="0" cy="-2" r="3.5" fill="#000" />
          <circle cx="0" cy="-2" r="3" fill="#8B4513" />
          
          {/* Lion head */}
          <ellipse cx="0" cy="-2" rx="2.2" ry="1.8" fill="#D4A574" />
          <ellipse cx="-0.5" cy="-2.2" rx="0.4" ry="0.5" fill="#000" />
          <ellipse cx="0.5" cy="-2.2" rx="0.4" ry="0.5" fill="#000" />
          <ellipse cx="0" cy="-1.5" rx="0.6" ry="0.4" fill="#000" />
          
          {/* Lion body - standing position */}
          <ellipse cx="0" cy="1.5" rx="2.5" ry="3.5" fill="#D4A574" />
          <ellipse cx="0" cy="1.5" rx="2" ry="3" fill="#8B4513" />
          
          {/* Lion front legs */}
          <rect x="-1.2" y="4" width="0.9" height="3" rx="0.3" fill="#8B4513" />
          <rect x="0.3" y="4" width="0.9" height="3" rx="0.3" fill="#8B4513" />
          
          {/* Lion back legs */}
          <rect x="-2" y="3.5" width="0.9" height="3.5" rx="0.3" fill="#8B4513" />
          <rect x="1.1" y="3.5" width="0.9" height="3.5" rx="0.3" fill="#8B4513" />
          
          {/* Lion tail - curved upward */}
          <path d="M 2 1.5 Q 3.5 0.5 4.5 1.5 Q 5 2.5 4.5 3.5" stroke="#8B4513" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <circle cx="4.5" cy="3.5" r="0.5" fill="#8B4513" />
          
          {/* Sword in lion's right paw - golden sword with curved blade */}
          <g transform="translate(-1.2, 4)">
            <line x1="0" y1="0" x2="0" y2="-4" stroke="#FFD700" strokeWidth="0.6" strokeLinecap="round" />
            <path d="M 0 -4 L -0.8 -5 L 0 -6 L 0.8 -5 Z" fill="#FFD700" />
            <rect x="-0.3" y="0" width="0.6" height="1" fill="#8B4513" />
          </g>
        </g>
      </g>
    </svg>
  )
}

export function CanadaFlag() {
  return (
    <svg
      width="60"
      height="40"
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block shadow-lg rounded"
    >
      {/* Red side panels */}
      <rect width="15" height="40" fill="#FF0000" />
      <rect x="45" width="15" height="40" fill="#FF0000" />
      {/* White center */}
      <rect x="15" width="30" height="40" fill="#FFFFFF" />
      
      {/* Maple leaf - detailed 11-point leaf centered */}
      <g transform="translate(30, 20)">
        <path
          d="M 0 -8 
             L -2 -6 L -3 -7 L -4 -5 L -5 -6 L -6 -4 L -6 -3 L -5 -2 L -4 -3 L -3 -2 L -2 -3 L -1 -2
             L 0 -3 L 1 -2 L 2 -3 L 3 -2 L 4 -3 L 5 -2 L 6 -3 L 6 -4 L 5 -6 L 4 -5 L 3 -7 L 2 -6 Z"
          fill="#FF0000"
          stroke="#FF0000"
          strokeWidth="0.2"
        />
        {/* Leaf stem */}
        <rect x="-0.3" y="6" width="0.6" height="2" fill="#FF0000" />
        {/* Leaf veins */}
        <line x1="0" y1="-8" x2="0" y2="6" stroke="#FF0000" strokeWidth="0.3" opacity="0.6" />
        <line x1="-3" y1="-5" x2="-1.5" y2="2" stroke="#FF0000" strokeWidth="0.2" opacity="0.5" />
        <line x1="3" y1="-5" x2="1.5" y2="2" stroke="#FF0000" strokeWidth="0.2" opacity="0.5" />
      </g>
    </svg>
  )
}

