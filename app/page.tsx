"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DiagonalStripes } from "@/components/diagonal-stripes"
import { TestimonialsDemo } from "@/components/testimonials"
import { BlogSection } from "@/components/blog-section"
import { TextGenerateEffectTitle } from "@/components/ui/text-generate-effect-title"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import BlurText from "@/components/ui/blur-text"
import { LayoutTextFlip } from "@/components/ui/layout-text-flip"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Card as HeroCard, CardHeader} from "@heroui/react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Portfolio() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(3).fill(false))
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add staggered delay based on card index
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 100) // 100ms delay between each card
              observer.unobserve(ref)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0A0A0A] transition-colors border-none outer-background">
      <div className="border-[#f5f5f5] dark:border-[#1f1f1f] min-h-screen max-w-4xl mx-auto bg-white dark:bg-[#171717] shadow-sm border-r-[19px] border-l-[19px] md:border-r-[31px] md:border-l-[31px] relative" style={{ position: 'relative' }}>
        <DiagonalStripes />

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717] pt-20">
          <div className="max-w-2xl mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
              <TextGenerateEffectTitle 
                text="John Smith" 
                className="text-4xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-lg"
              />
              <div className="w-full sm:w-auto">
                <LayoutTextFlip
                  text=""
                  words={["Software Developer", "Full Stack Engineer", "Frontend Specialist", "React Developer", "TypeScript Expert", "UI/UX Designer"]}
                  duration={2500}
                />
              </div>
            </div>
            <BlurText
              text="I'm a product designer and frontend engineer focused on creating beautiful, functional experiences that solve real problems for people."
              className="text-xl text-[#737373] dark:text-[#737373] mb-6 leading-relaxed"
              direction="bottom"
              animateBy="letters"
              delay={25}
            />
          </div>
        </section>

        {/* Project Cards Section */}
        <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717] pt-8 border-t border-[#f5f5f5] dark:border-[#1f1f1f] section-with-inset-shadow">
          <TextGenerateEffect words="Stuff I Made" asHeading={true} staggerDelay={0.15} />
          {/* Project Cards - 3 Columns on Desktop, 1 on Mobile */}
          <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-3 items-center mb-10">
            <div 
              ref={(el) => { cardRefs.current[0] = el }}
              className={`transition-all duration-500 ease-out section-fade-borders section-fade-diagonal-left section-fade-diagonal-right ${
                visibleCards[0] 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
                <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                  <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Web Design</p>
                  <h4 className="text-white font-semibold text-xl">Modern Dashboard</h4>
                </CardHeader>
                <Image
                  alt="Modern dashboard design"
                  fill
                  className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
                
                {/* Description card - always visible on mobile, hover on desktop */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 transform translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                  <p className="text-white text-sm leading-relaxed">A comprehensive admin dashboard with real-time analytics and intuitive data visualization</p>
                </div>
              </HeroCard>
            </div>
            
            <div 
              ref={(el) => { cardRefs.current[1] = el }}
              className={`transition-all duration-500 ease-out section-fade-borders section-fade-diagonal-left section-fade-diagonal-right ${
                visibleCards[1] 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
                <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                  <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Mobile App</p>
                  <h4 className="text-white font-semibold text-xl">iOS Interface</h4>
                </CardHeader>
                <Image
                  alt="Mobile app interface"
                  fill
                  className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
                
                {/* Description card - always visible on mobile, hover on desktop */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 transform translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                  <p className="text-white text-sm leading-relaxed">A sleek iOS interface design focused on user experience and accessibility</p>
                </div>
              </HeroCard>
            </div>
            
            <div 
              ref={(el) => { cardRefs.current[2] = el }}
              className={`transition-all duration-500 ease-out section-fade-borders section-fade-diagonal-left section-fade-diagonal-right ${
                visibleCards[2] 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
                <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                  <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Web Design</p>
                  <h4 className="text-white font-semibold text-xl">Portfolio Site</h4>
                </CardHeader>
                <Image
                  alt="Portfolio website"
                  fill
                  className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/portfolio.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
                
                {/* Description card - always visible on mobile, hover on desktop */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 transform translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                  <p className="text-white text-sm leading-relaxed">A minimalist portfolio showcasing creative work with smooth animations</p>
                </div>
              </HeroCard>
            </div>
          </div>

        </section>

        {/* Experience Section */}
        <section className="max-w-4xl mx-auto px-6 pt-8 border-t border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717]">
          <TextGenerateEffect words="Experience" asHeading={true} staggerDelay={0.15} />
          <div className="space-y-8 sm:space-y-12 mb-10">
            {/* Google */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Google</h3>
                </div>
                <p className="text-xs sm:text-sm text-black dark:text-white mb-2">
                  Senior Frontend Engineer • March 2024 - Present
                </p>
                <p className="text-xs sm:text-sm text-[#737373] dark:text-[#737373] mb-3 leading-relaxed">
                  Working on Google Cloud Platform's web console, building engineering web tools, optimizing performance
                  and user experience.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    Node.js
                  </Badge>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
                <img src="/google-g-2015.svg" alt="Google" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>

            {/* Microsoft */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Microsoft</h3>
                </div>
                <p className="text-xs sm:text-sm text-black dark:text-white mb-2">
                  Software Engineer • June 2022 - February 2024
                </p>
                <p className="text-xs sm:text-sm text-[#737373] dark:text-[#737373] mb-3 leading-relaxed">
                  Developed and maintained Azure web applications, engineering web tools, optimizing performance and
                  user experience.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    C#
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    Azure
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    React
                  </Badge>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>

            {/* Airbnb */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Airbnb</h3>
                </div>
                <p className="text-xs sm:text-sm text-black dark:text-white mb-2">
                  Frontend Developer • January 2021 - May 2022
                </p>
                <p className="text-xs sm:text-sm text-[#737373] dark:text-[#737373] mb-3 leading-relaxed">
                  Implemented user-facing web development of Airbnb's booking platform.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    JavaScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    CSS
                  </Badge>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
                <img src="/airbnb-1.svg" alt="Airbnb" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>

            {/* Shopify */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Shopify</h3>
                </div>
                <p className="text-xs sm:text-sm text-black dark:text-white mb-2">
                  Frontend Web Developer • March 2020 - December 2020
                </p>
                <p className="text-xs sm:text-sm text-[#737373] dark:text-[#737373] mb-3 leading-relaxed">
                  Developed and maintained Shopify themes for enterprise clients with advanced technical requirements.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    Liquid
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    JavaScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    Shopify
                  </Badge>
                </div>
              </div>
               <div className="hidden md:flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
                 <img src="/shopify.svg" alt="Shopify" className="w-12 h-12 sm:w-16 sm:h-16" />
               </div>
            </div>

            {/* Adobe */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Adobe</h3>
                </div>
                <p className="text-xs sm:text-sm text-black dark:text-white mb-2">
                  Frontend Product Consultant • September 2019 - November 2020
                </p>
                <p className="text-xs sm:text-sm text-[#737373] dark:text-[#737373] mb-3 leading-relaxed">
                  Consulted on the design and development of Adobe's Creative Cloud web applications.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    JavaScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border透明 dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    CSS
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border透明 dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20"
                  >
                    HTML
                  </Badge>
                </div>
              </div>
               <div className="hidden md:flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
                 <img src="/adobe-pure.svg" alt="Adobe" className="w-12 h-12 sm:w-16 sm:h-16" />
               </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <BlogSection />

        {/* Testimonials Section */}
        <section className="pt-8 border-t border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717]">
          <div className="max-w-4xl mx-auto px-6 mb-4">
            <TextGenerateEffect words="People love my work" asHeading={true} staggerDelay={0.15} className="mb-0" />
          </div>
          <div className="w-full">
            <TestimonialsDemo />
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717]">
          <div className="max-w-xl mx-auto mb-10">
                <p className="text-sm text-[#737373] dark:text-[#737373] mb-4 text-center leading-relaxed">
              Feel free to reach out to me at farrellelijah@outlook.com
            </p>
            <div className="flex gap-2 items-center border border-[#f5f5f5] dark:border-[#1f1f1f] rounded-lg p-1 bg-white dark:bg-[#171717]">
              <Input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border-none bg-transparent text-sm text-gray-900 dark:text-white placeholder:text-[#737373] dark:placeholder:text-[#737373] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Link href="#">
                <Button variant="outline" size="sm" className="border-none bg-transparent hover:bg-gray-100 dark:hover:bg-[#2a2a2a] shrink-0">
                  <Mail className="w-4 h-4 mr-0" />
                  Send Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717]">
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
