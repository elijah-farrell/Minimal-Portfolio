"use client"

import { Button } from "@/components/ui/button"
import { DiagonalStripes } from "@/components/diagonal-stripes"
import { TextGenerateEffectTitle } from "@/components/ui/text-generate-effect-title"
import BlurText from "@/components/ui/blur-text"
import { ArrowLeft, Calendar, Clock, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0A0A0A] transition-colors border-none">
      <div className="border-[#f5f5f5] dark:border-[#1f1f1f] min-h-screen max-w-4xl mx-auto bg-white dark:bg-[#171717] shadow-sm border-r-[19px] border-l-[19px] md:border-r-[31px] md:border-l-[31px] relative" style={{ position: 'relative' }}>
        <DiagonalStripes />

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717] pt-20 pb-8">
          <div className="max-w-2xl">
            <TextGenerateEffectTitle text="Transitioning from Frontend to Full-Stack" />
            <BlurText
              text="My journey from focusing solely on frontend development to becoming a full-stack engineer. Tips and resources that helped along the way."
              className="text-xl text-[#737373] dark:text-[#737373] mb-6 leading-relaxed"
              direction="bottom"
              animateBy="letters"
              delay={25}
            />
          </div>
          
          {/* Full width border line */}
          <div className="border-b border-[#f5f5f5] dark:border-[#1f1f1f] mb-6 -mx-6"></div>
        </section>

        {/* Hero Image */}
        <section className="max-w-4xl mx-auto px-6 mb-8 -mt-6">
          <div className="max-w-3xl mx-auto px-4 relative">
            <img 
              src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Frontend to fullstack development" 
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
            {/* Date and time overlay */}
            <div className="absolute bottom-3 right-7 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg items-center gap-1 whitespace-nowrap hidden min-[321px]:flex">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Aug 15, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 pb-12">
          <div className="max-w-2xl mx-auto px-8">
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              The transition from frontend to full-stack development wasn't just about learning new technologies—it was about changing my entire mindset. As a frontend developer, I was focused on user experience and visual design. Becoming full-stack meant thinking about data flow, system architecture, and the entire user journey.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Start with Node.js</h2>
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              Node.js was my gateway to backend development. Since I already knew JavaScript, it felt like a natural progression. I started with Express.js for building APIs and gradually moved to more complex frameworks like Next.js for full-stack applications.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Database Fundamentals</h2>
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              Understanding databases was the biggest learning curve. I started with MongoDB because of its JSON-like structure, which felt familiar coming from JavaScript. Later, I learned SQL and PostgreSQL, which gave me a deeper understanding of data relationships and optimization.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">The Full-Stack Mindset</h2>
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              The biggest shift was learning to think about the entire application architecture. Frontend developers often focus on the user interface, but full-stack developers need to consider performance, security, scalability, and maintainability across the entire stack.
            </p>

            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              The journey from frontend to full-stack is challenging but incredibly rewarding. It opens up new opportunities and gives you a deeper understanding of how web applications work. Start small, build projects, and don't be afraid to make mistakes—that's how you learn.
            </p>
          </div>
        </article>

        {/* Back to Blog */}
        <section className="max-w-4xl mx-auto px-6 py-8 border-t border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717]">
          <div className="max-w-2xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#737373] dark:text-[#737373] hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717]">
          <div className="flex items-center justify-between">
            <p className="text-xs text-[#737373] dark:text-[#737373]">
              Built by Elijah Farrell
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
