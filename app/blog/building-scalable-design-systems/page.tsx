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
            <TextGenerateEffectTitle text="Building Scalable Design Systems" />
            <BlurText
              text="How I approach creating design systems that grow with your product and team. Lessons learned from building systems at Google and Microsoft."
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
              src="https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Scalable design systems" 
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
            {/* Date and time overlay */}
            <div className="absolute bottom-3 right-7 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg items-center gap-1 whitespace-nowrap hidden min-[321px]:flex">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Sep 3, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 pb-12">
          <div className="max-w-2xl mx-auto px-8">
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              Design systems are more than just a collection of components and guidelines. They're living, breathing ecosystems that evolve with your product and team. After building design systems at both Google and Microsoft, I've learned that scalability isn't just about technical implementation—it's about creating systems that people actually want to use.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Start with Principles, Not Components</h2>
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              The biggest mistake I see teams make is jumping straight into building components without establishing clear design principles. At Google, we spent months defining our design language before writing a single line of code. This foundation became our north star, guiding every decision from color choices to interaction patterns.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Documentation is Your Secret Weapon</h2>
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              A design system without documentation is like a library without a catalog. At Microsoft, we learned that comprehensive documentation wasn't just helpful—it was essential for adoption. We included usage guidelines, accessibility considerations, and real-world examples for every component.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Build for Change</h2>
            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              The only constant in design systems is change. Products evolve, teams grow, and requirements shift. Building flexibility into your system from day one will save you countless hours of refactoring later. Version your components, maintain backward compatibility, and always have a migration path.
            </p>

            <p className="text-[#737373] dark:text-[#737373] leading-relaxed mb-6">
              Creating scalable design systems is an ongoing journey, not a destination. The key is to start small, iterate often, and always keep your users—both designers and developers—at the center of your decisions.
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
