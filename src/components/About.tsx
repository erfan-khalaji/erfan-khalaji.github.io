import Image from 'next/image'
import { professionalSummary, experienceBreakdown, personalInterests } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Column - Content */}
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              My expertise spans the full data science lifecycle, from exploratory data analysis and feature engineering to 
              model deployment and monitoring. With strong proficiency in Python and cloud platforms (AWS, GCP), I'm passionate 
              about translating complex analytical findings into clear, actionable insights for both technical and 
              non-technical stakeholders.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I believe AI represents a form of evolution we must embrace to seek meaning in the universe. 
              Through AI, we have the opportunity to heal our planet, protect vulnerable groups including 
              different animal species, women, children, and nature itself, and create solutions that address 
              the most pressing challenges facing our world. This belief drives my work in developing AI systems 
              that not only solve technical problems but contribute to a more sustainable and equitable future.
            </p>

            {/* Experience Breakdown */}
            <div className="bg-primary-50 rounded-lg p-6 mb-8 border border-primary-100">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-700 mb-1">
                    {experienceBreakdown.total}
                  </div>
                  <div className="text-sm text-gray-700 font-medium">Years Total Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-700 mb-1">
                    {experienceBreakdown.industry}
                  </div>
                  <div className="text-sm text-gray-700 font-medium">Years in Industry</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-700 mb-1">
                    {experienceBreakdown.academia}
                  </div>
                  <div className="text-sm text-gray-700 font-medium">Years in Academia</div>
                </div>
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

