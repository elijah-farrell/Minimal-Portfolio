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
            <TextGenerateEffectTitle text="React Performance Optimization Techniques" />
            <BlurText
              text="Deep dive into React optimization strategies I've used in production. From memoization to code splitting and everything in between."
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
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="React performance optimization" 
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
            {/* Date and time overlay */}
            <div className="absolute bottom-3 right-7 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg items-center gap-1 whitespace-nowrap hidden min-[321px]:flex">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Aug 28, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 pb-12">
          <div className="max-w-2xl mx-auto px-8">
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              React performance optimization is both an art and a science. After years of optimizing React applications in production, I've learned that the most effective optimizations often come from understanding how React's reconciliation process works and identifying the right bottlenecks.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Memoization: When and How</h2>
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              React.memo, useMemo, and useCallback are powerful tools, but they're not silver bullets. The key is understanding when your components actually need memoization. I've seen teams over-memoize everything, which can actually hurt performance due to the overhead of comparison functions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Code Splitting Strategies</h2>
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              Lazy loading components and routes can dramatically improve initial load times. But the real magic happens when you combine code splitting with intelligent prefetching strategies. I've implemented dynamic imports that predict user behavior and preload likely-to-be-needed components.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Bundle Analysis and Optimization</h2>
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              Understanding your bundle is crucial. Tools like webpack-bundle-analyzer have been game-changers in identifying unnecessary dependencies and optimizing imports. Sometimes the biggest wins come from simply removing unused code or switching to lighter alternatives.
            </p>

            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              Performance optimization is an iterative process. Start with the biggest impact changes—usually bundle size and initial render time—then move to more granular optimizations. Always measure before and after to ensure your changes are actually helping.
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
