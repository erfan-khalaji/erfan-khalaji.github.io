import { education } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{education.degree}</h3>
            <div className="flex flex-wrap items-center gap-2 text-gray-600 mb-4">
              <span className="font-semibold text-primary-600">{education.institution}</span>
              <span className="text-gray-400">•</span>
              <span>{education.location}</span>
            </div>
            {education.gpa && (
              <div className="text-lg text-gray-700">
                <span className="font-semibold">GPA:</span> {education.gpa}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

