"use client"

import { Button } from "@/components/ui/button"
import { DiagonalStripes } from "@/components/diagonal-stripes"
import { ArrowLeft, Calendar, Clock, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0A0A0A] transition-colors border-none">
      <div className="border-gray-200 dark:border-[#2a2a2a] min-h-screen max-w-5xl mx-auto bg-white dark:bg-[#171717] shadow-sm border-r-[15px] border-l-[15px] md:border-r-[30px] md:border-l-[30px] relative" style={{ position: 'relative' }}>
        <DiagonalStripes />

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717] pt-20 pb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-lg">Building Accessible User Interfaces</h1>
            <p className="text-xl text-gray-500 dark:text-gray-300 mb-6 leading-relaxed">
              A comprehensive guide to creating inclusive designs that work for everyone. Best practices, tools, and real-world examples from my experience.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Jul 8, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>11 min read</span>
              </div>
            </div>
          </div>
          
        </section>

        {/* Hero Image */}
        <section className="max-w-4xl mx-auto px-6 mb-12">
          <img 
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Accessible user interface design" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </section>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-6 pb-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Accessibility isn't just a checkbox on a requirements list—it's a fundamental aspect of good design. Creating accessible user interfaces means ensuring that everyone, regardless of their abilities or the devices they use, can effectively interact with your application.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Semantic HTML Foundation</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The foundation of accessibility starts with semantic HTML. Using proper heading hierarchy, form labels, and ARIA attributes provides screen readers with the context they need to navigate your interface effectively. It's not just about screen readers—semantic HTML also improves SEO and overall code maintainability.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Color and Contrast</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Color contrast ratios are crucial for users with visual impairments. The WCAG guidelines specify minimum contrast ratios, but I always aim for higher standards. Remember that accessibility isn't just about meeting minimum requirements—it's about creating the best possible experience for all users.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Keyboard Navigation</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Every interactive element should be accessible via keyboard navigation. This includes proper tab order, focus indicators, and keyboard shortcuts. Many users rely on keyboard navigation, and it's also essential for users who use assistive technologies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Testing and Validation</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Automated accessibility testing tools are helpful, but they can't catch everything. Manual testing with screen readers, keyboard-only navigation, and user testing with people who have disabilities are essential parts of the accessibility process.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Building accessible interfaces is an ongoing process that requires attention to detail and empathy for your users. Start with the basics—semantic HTML, proper contrast, and keyboard navigation—then build from there. The goal is to create interfaces that work for everyone, not just the majority.
            </p>
          </div>
        </article>

        {/* Back to Blog */}
        <section className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <div className="max-w-2xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
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
