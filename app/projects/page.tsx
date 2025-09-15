"use client"

import { DiagonalStripes } from "@/components/diagonal-stripes"
import { TextGenerateEffectTitle } from "@/components/ui/text-generate-effect-title"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import BlurText from "@/components/ui/blur-text"
import { Card as HeroCard, CardHeader } from "@heroui/react"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(9).fill(false))
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
      <div className="border-gray-200 dark:border-[#2a2a2a] min-h-screen max-w-4xl mx-auto bg-white dark:bg-[#171717] shadow-sm border-r-[19px] border-l-[19px] md:border-r-[31px] md:border-l-[31px] relative" style={{ position: 'relative' }}>
        <DiagonalStripes />

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717] pt-20 pb-12">
          <div className="max-w-2xl mb-8">
            <TextGenerateEffectTitle text="Projects" />
            <BlurText
              text="I'm a passionate software engineer dedicated to crafting elegant solutions for complex problems. With expertise in full-stack development, I enjoy building user-centric applications that make a difference."
              className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
              direction="bottom"
              animateBy="letters"
              delay={25}
            />
          </div>
          
          {/* Full width border line */}
          <div className="border-b border-gray-100 dark:border-[#2a2a2a] mb-6 -mx-6"></div>

          {/* Spacer to center projects between border lines */}
          <div className="mb-6"></div>

          <TextGenerateEffect words="Stuff I Made" asHeading={true} staggerDelay={0.15} />
          {/* Project Cards - 3 Columns on Desktop, 1 on Mobile */}
          <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-3">
            {/* Project 1 */}
            <a href="#" className="block">
              <div 
                ref={(el) => { cardRefs.current[0] = el }}
                className={`transition-all duration-500 ease-out ${
                  visibleCards[0] 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Web Design</p>
                <h4 className="text-white font-semibold text-xl">Modern Dashboard</h4>
                <p className="text-white/70 text-sm">Modern dashboard design</p>
              </CardHeader>
              <Image
                alt="Modern dashboard design"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
              </HeroCard>
              </div>
            </a>
            
            {/* Project 2 */}
            <a href="#" className="block">
              <div 
                ref={(el) => { cardRefs.current[1] = el }}
                className={`transition-all duration-800 ease-out ${
                  visibleCards[1] 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Mobile App</p>
                <h4 className="text-white font-semibold text-xl">iOS Interface</h4>
                <p className="text-white/70 text-sm">Mobile app interface</p>
              </CardHeader>
              <Image
                alt="Mobile app interface"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
              </HeroCard>
              </div>
            </a>
            
            {/* Project 3 */}
            <a href="#" className="block">
              <div 
                ref={(el) => { cardRefs.current[2] = el }}
                className={`transition-all duration-800 ease-out ${
                  visibleCards[2] 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Web Design</p>
                <h4 className="text-white font-semibold text-xl">Portfolio Site</h4>
                <p className="text-white/70 text-sm">Creative portfolio website</p>
              </CardHeader>
              <Image
                alt="Portfolio website"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="/portfolio.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
              </HeroCard>
              </div>
            </a>

            {/* Project 4 */}
            <a href="#" className="block">
              <div 
                ref={(el) => { cardRefs.current[3] = el }}
                className={`transition-all duration-800 ease-out ${
                  visibleCards[3] 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">E-commerce</p>
                <h4 className="text-white font-semibold text-xl">Online Store</h4>
                <p className="text-white/70 text-sm">E-commerce platform design</p>
              </CardHeader>
              <Image
                alt="E-commerce platform"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
              </HeroCard>
              </div>
            </a>

            {/* Project 5 */}
            <a href="#" className="block">
              <div 
                ref={(el) => { cardRefs.current[4] = el }}
                className={`transition-all duration-800 ease-out ${
                  visibleCards[4] 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">SaaS</p>
                <h4 className="text-white font-semibold text-xl">Analytics Tool</h4>
                <p className="text-white/70 text-sm">Data visualization dashboard</p>
              </CardHeader>
              <Image
                alt="Analytics dashboard"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
              </HeroCard>
              </div>
            </a>

            {/* Project 6 */}
            <a href="#" className="block">
              <div 
                ref={(el) => { cardRefs.current[5] = el }}
                className={`transition-all duration-800 ease-out ${
                  visibleCards[5] 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Mobile App</p>
                <h4 className="text-white font-semibold text-xl">Fitness Tracker</h4>
                <p className="text-white/70 text-sm">Health and wellness app</p>
              </CardHeader>
              <Image
                alt="Fitness tracking app"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
              </HeroCard>
              </div>
            </a>

            {/* Project 7 */}
            <a href="#" className="block">
              <div 
                ref={(el) => { cardRefs.current[6] = el }}
                className={`transition-all duration-800 ease-out ${
                  visibleCards[6] 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider drop-shadow-lg">Web App</p>
                <h4 className="text-white font-semibold text-xl drop-shadow-lg">Clean Design</h4>
                <p className="text-white/70 text-sm drop-shadow-md">Clean web application</p>
              </CardHeader>
              <Image
                alt="Clean web application"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-5" />
              </HeroCard>
              </div>
            </a>

            {/* Project 8 */}
            <a href="#" className="block">
              <div 
                ref={(el) => { cardRefs.current[7] = el }}
                className={`transition-all duration-800 ease-out ${
                  visibleCards[7] 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Web App</p>
                <h4 className="text-white font-semibold text-xl">Task Manager</h4>
                <p className="text-white/70 text-sm">Productivity application</p>
              </CardHeader>
              <Image
                alt="Task management app"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
              </HeroCard>
              </div>
            </a>

            {/* Project 9 */}
            <a href="#" className="block">
              <div 
                ref={(el) => { cardRefs.current[8] = el }}
                className={`transition-all duration-800 ease-out ${
                  visibleCards[8] 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Mobile App</p>
                <h4 className="text-white font-semibold text-xl">Social Media</h4>
                <p className="text-white/70 text-sm">Social networking platform</p>
              </CardHeader>
              <Image
                alt="Social media app"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
              </HeroCard>
              </div>
            </a>
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
