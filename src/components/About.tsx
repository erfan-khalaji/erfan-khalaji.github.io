import Image from 'next/image'
import { professionalSummary, stats } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a Senior Data Scientist with 6+ years of experience leading advanced descriptive,
              diagnostic, and predictive analytics to support strategic and operational decision-making.
              I specialize in building production-grade machine learning systems that process millions
              of records and support real-time inference at scale.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My expertise spans the full data science lifecycle—from exploratory data analysis and
              feature engineering to model deployment and monitoring. I'm passionate about translating
              complex analytical findings into clear, actionable insights for both technical and
              non-technical stakeholders.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stats.yearsExperience}
                </div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stats.recordsProcessed}
                </div>
                <div className="text-sm text-gray-600 font-medium">Records Processed Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stats.dailyInferences}
                </div>
                <div className="text-sm text-gray-600 font-medium">Daily Inferences</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-photo.jpg"
                alt="Erfan Khalaji working"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

