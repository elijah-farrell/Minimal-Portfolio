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
            <TextGenerateEffectTitle text="The Future of Web Development" />
            <BlurText
              text="Exploring emerging technologies and trends that will shape the next decade of web development. From AI integration to WebAssembly and beyond."
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
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Future of web development technology" 
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
            {/* Date and time overlay */}
            <div className="absolute bottom-3 right-7 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg items-center gap-1 whitespace-nowrap hidden min-[321px]:flex">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Jul 22, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>15 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 pb-12">
          <div className="max-w-2xl mx-auto px-8">
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              The web development landscape is evolving at an unprecedented pace. As we look toward the next decade, several technologies and trends are emerging that will fundamentally change how we build and interact with web applications.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">AI-Powered Development</h2>
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              Artificial intelligence is already transforming how we write code. From GitHub Copilot to ChatGPT, AI assistants are becoming integral parts of the development process. In the future, we'll see AI handling more complex tasks like architecture decisions, performance optimization, and even debugging.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">WebAssembly Revolution</h2>
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              WebAssembly is bringing near-native performance to the web. We're seeing frameworks like Blazor and technologies like WASM modules that allow us to run high-performance code directly in browsers. This opens up possibilities for complex applications that were previously impossible on the web.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Edge Computing and Serverless</h2>
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              The shift toward edge computing and serverless architectures is accelerating. Functions-as-a-Service platforms are becoming more sophisticated, and edge computing is bringing computation closer to users, reducing latency and improving performance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">The Metaverse and Spatial Web</h2>
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              As virtual and augmented reality technologies mature, we're seeing the emergence of the spatial web. WebXR is enabling immersive experiences directly in browsers, and we're moving toward a more three-dimensional, interactive web.
            </p>

            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              The future of web development is exciting and uncertain. The key is to stay curious, keep learning, and be ready to adapt as new technologies emerge. The developers who thrive will be those who can quickly learn and integrate new tools while maintaining a focus on user experience and performance.
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
