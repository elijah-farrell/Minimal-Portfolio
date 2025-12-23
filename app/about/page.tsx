"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DiagonalStripes } from "@/components/diagonal-stripes"
import { TextGenerateEffectTitle } from "@/components/ui/text-generate-effect-title"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { TextWithPillBadge } from "@/components/ui/text-with-pill-badge"
import BlurText from "@/components/ui/blur-text"
import { Mail, Github, Linkedin, Twitter, FileDown } from "lucide-react"
import { DraggableCardDemo } from "@/components/draggable-cards"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0A0A0A] transition-colors border-none outer-background">
      <div className="border-[#f5f5f5] dark:border-[#1f1f1f] min-h-screen max-w-4xl mx-auto bg-white dark:bg-[#171717] shadow-sm border-r-[19px] border-l-[19px] md:border-r-[31px] md:border-l-[31px] relative" style={{ position: 'relative' }}>
        <DiagonalStripes />

         {/* Hero Section + \"Who I Am\" */}
         <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717] pt-20 pb-4">
          <div className="max-w-2xl">
            <TextGenerateEffectTitle text="About Me" />
            <BlurText
              text="I'm a passionate product designer and frontend engineer with over 5 years of experience creating beautiful, functional experiences that solve real problems for people."
              className="text-xl text-[#737373] dark:text-[#737373] mb-6 leading-relaxed"
              direction="bottom"
              animateBy="letters"
              delay={25}
            />
          </div>
         </section>

         {/* Draggable Cards Section */}
         <section className="max-w-4xl mx-auto px-6 pt-8 pb-20 border-t border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717] section-with-inset-shadow">
           <TextWithPillBadge words="Moments" asHeading={true} staggerDelay={0.15} />
           <DraggableCardDemo />
         </section>

        {/* Timeline of Achievements */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12 sm:pb-16 border-t border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717]">
          <TextWithPillBadge words="Timeline of Achievements" asHeading={true} staggerDelay={0.15} className="mb-8 sm:mb-12" />
          
          <div className="space-y-8 sm:space-y-10">
            {/* 2025 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-20 sm:w-24">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">2025</h3>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Launched DevTools Pro extension
                  </h4>
                  <p className="text-sm text-[#737373] dark:text-[#737373] leading-relaxed">
                    Created a popular VS Code extension that helps developers debug React applications, reaching 15,000+ weekly downloads.
                  </p>
                </div>
              </div>
            </div>

            {/* 2024 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-20 sm:w-24">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">2024</h3>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Built freelance design system
                  </h4>
                  <p className="text-sm text-[#737373] dark:text-[#737373] leading-relaxed">
                    Designed and developed a reusable component library for a fintech startup, reducing their development time by 40%.
                  </p>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Presented at local tech meetup
                  </h4>
                  <p className="text-sm text-[#737373] dark:text-[#737373] leading-relaxed">
                    Shared my experience building performant React applications at the San Francisco Frontend Developers meetup.
                  </p>
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-20 sm:w-24">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">2023</h3>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Merged first PR to Next.js
                  </h4>
                  <p className="text-sm text-[#737373] dark:text-[#737373] leading-relaxed">
                    Contributed a performance optimization fix that improved image loading times in Next.js 13.
                  </p>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Started technical blog
                  </h4>
                  <p className="text-sm text-[#737373] dark:text-[#737373] leading-relaxed">
                    Launched a blog documenting my journey learning advanced React patterns, gaining 2,000+ monthly readers.
                  </p>
                </div>
              </div>
            </div>

            {/* 2022 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-20 sm:w-24">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">2022</h3>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Promoted to Senior Frontend Engineer
                  </h4>
                  <p className="text-sm text-[#737373] dark:text-[#737373] leading-relaxed">
                    Took on technical leadership responsibilities, mentoring junior developers and establishing code review processes.
                  </p>
                </div>
              </div>
            </div>

            {/* 2021 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-20 sm:w-24">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">2021</h3>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Completed CS degree
                  </h4>
                  <p className="text-sm text-[#737373] dark:text-[#737373] leading-relaxed">
                    Graduated with a Bachelor's in Computer Science, focusing on web technologies and user interface design.
                  </p>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Launched personal portfolio site
                  </h4>
                  <p className="text-sm text-[#737373] dark:text-[#737373] leading-relaxed">
                    Built and deployed my first full-stack project using Next.js, which became a case study for my job applications.
                  </p>
                </div>
              </div>
            </div>

            {/* 2020 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-20 sm:w-24">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">2020</h3>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Discovered web development
                  </h4>
                  <p className="text-sm text-[#737373] dark:text-[#737373] leading-relaxed">
                    Started learning JavaScript through freeCodeCamp and built my first interactive website using vanilla JS and CSS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="max-w-4xl mx-auto px-6 pt-8 pb-12 border-t border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717] section-with-inset-shadow">
          <div className="max-w-2xl mx-auto text-center">
            <TextWithPillBadge words="Let's Work Together" asHeading={true} staggerDelay={0.15} className="mb-4" />
            <p className="text-[#737373] dark:text-[#737373] mb-6 leading-relaxed">
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about design and development, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="outline" size="sm" className="border-[#f5f5f5] dark:border-[#1f1f1f] bg-transparent">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
              </Link>
              <Link href="#">
                <Button variant="outline" size="sm" className="border-[#f5f5f5] dark:border-[#1f1f1f] bg-transparent">
                  <FileDown className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 pt-8 pb-8 border-t border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717]">
          <div className="flex items-center justify-between">
            <p className="text-xs text-[#737373] dark:text-[#737373]">
              Built by Elijah Farrell
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#737373] hover:text-[#737373] dark:text-[#737373] dark:hover:text-gray-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#737373] hover:text-[#737373] dark:text-[#737373] dark:hover:text-gray-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#737373] hover:text-[#737373] dark:text-[#737373] dark:hover:text-gray-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
