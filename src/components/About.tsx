import Image from 'next/image'
import { professionalSummary, experienceBreakdown, personalInterests, education } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Column - Content */}
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm an Applied AI Scientist with {experienceBreakdown.total} years of experience designing, optimizing, and deploying 
              production-grade machine learning systems, including Vision-Language Models (VLMs), 
              Large Language Models (LLMs), and Reinforcement Learning from Human Feedback (RLHF). 
              I specialize in building trustworthy AI solutions that convert complex multimodal data 
              into actionable insights.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              My expertise spans the full data science lifecycle, from exploratory data analysis and
              feature engineering to model deployment and monitoring. I'm passionate about translating
              complex analytical findings into clear, actionable insights for both technical and
              non-technical stakeholders.
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

        {/* AI Philosophy Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Role of AI</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I believe AI represents a form of evolution we must embrace to seek meaning in the universe. 
            Through AI, we have the opportunity to heal our planet, protect vulnerable groups including 
            different animal species, women, children, and nature itself, and create solutions that address 
            the most pressing challenges facing our world. This belief drives my work in developing AI systems 
            that not only solve technical problems but contribute to a more sustainable and equitable future.
          </p>
        </div>

        {/* Personal Interests & Background Section */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Free Time</h4>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In my free time, I enjoy pursuing a variety of interests that keep me balanced and inspired:
            </p>
            <div className="flex flex-wrap gap-3">
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

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Background</h4>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">{education.degree}</p>
              <p className="text-gray-600">{education.institution}</p>
              <p className="text-gray-600">{education.location}</p>
              {education.gpa && (
                <p className="text-gray-600">GPA: {education.gpa}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

