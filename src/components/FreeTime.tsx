import { personalInterests } from '@/lib/data'

export default function FreeTime() {
  return (
    <section id="free-time" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Free Time</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-center">
              In my free time, I enjoy pursuing a variety of interests that keep me balanced and inspired:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {personalInterests.hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

