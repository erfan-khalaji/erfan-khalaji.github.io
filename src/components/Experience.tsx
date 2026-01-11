import { jobs } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="relative flex items-start md:items-center"
              >
                {/* Timeline marker */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white transform md:-translate-x-1/2 z-10 shadow-lg"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'
                  } pl-12 md:pl-0`}
                >
                  <div
                    className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-gray-600">
                        <span className="font-semibold text-primary-600">{job.company}</span>
                        <span className="text-gray-400">•</span>
                        <span>{job.location}</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{job.period}</div>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      {job.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-primary-600 mr-2 mt-1.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

