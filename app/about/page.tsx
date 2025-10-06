"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DiagonalStripes } from "@/components/diagonal-stripes"
import { TextGenerateEffectTitle } from "@/components/ui/text-generate-effect-title"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import BlurText from "@/components/ui/blur-text"
import { Mail, Github, Linkedin, Twitter, Download, MapPin, Calendar, Code, Palette, Users } from "lucide-react"
import Image from "next/image"
import { DraggableCardDemo } from "@/components/draggable-cards"
import LogoLoop from "@/components/ui/logo-loop"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiAmazon, SiFigma, SiAdobephotoshop, SiAdobexd, SiGit, SiDocker, SiPostgresql, SiMongodb, SiFirebase, SiVercel, SiNetlify } from "react-icons/si"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0A0A0A] transition-colors border-none outer-background">
      <div className="border-gray-200 dark:border-[#2a2a2a] min-h-screen max-w-4xl mx-auto bg-white dark:bg-[#171717] shadow-sm border-r-[19px] border-l-[19px] md:border-r-[31px] md:border-l-[31px] relative" style={{ position: 'relative' }}>
        <DiagonalStripes />

         {/* Hero Section */}
         <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717] pt-20 pb-4">
          <div className="max-w-2xl mb-8">
            <TextGenerateEffectTitle text="About Me" />
            <BlurText
              text="I'm a passionate product designer and frontend engineer with over 5 years of experience creating beautiful, functional experiences that solve real problems for people."
              className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
              direction="bottom"
              animateBy="letters"
              delay={25}
            />
          </div>
          
          {/* Full width border line */}
          <div className="border-b border-gray-100 dark:border-[#2a2a2a] mb-8 -mx-6"></div>

          <TextGenerateEffect words="Who I Am" asHeading={true} staggerDelay={0.15} />

          {/* Basic Info with Profile Picture */}
          <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 items-start mb-6">
            {/* Profile Picture and Content */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 xl:gap-8 w-full xl:w-auto">
              {/* Image and Description */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 xl:gap-8 items-start sm:items-center xl:items-center">
                {/* Profile Picture */}
                <div className="flex-shrink-0 mx-auto sm:mx-0 xl:mx-0">
                  <div className="w-32 h-40 md:w-36 md:h-44 xl:w-40 xl:h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="/pfp.jpg"
                      alt="Profile picture"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3 sm:space-y-4 min-w-0 text-center sm:text-left xl:text-left">
                  {/* Location and Availability - responsive layout */}
                  <div className="flex flex-col sm:flex-row xl:flex-row items-center sm:items-start xl:items-start gap-2 sm:gap-4 xl:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Available for freelance</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    I specialize in creating user-centered designs and building scalable web applications. 
                    My approach combines technical expertise with creative problem-solving to deliver 
                    products that users love and businesses need.
                  </p>
                  {/* Buttons - responsive visibility */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" size="sm" className="border-gray-200 dark:border-[#2a2a2a] bg-transparent whitespace-nowrap text-xs sm:text-sm">
                      <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Download Resume
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-200 dark:border-[#2a2a2a] bg-transparent whitespace-nowrap text-xs sm:text-sm">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Get in touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>

          </div>
         </section>

         {/* Draggable Cards Section */}
         <section className="max-w-4xl mx-auto px-6 pt-8 pb-20 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
           <TextGenerateEffect words="Moments" asHeading={true} staggerDelay={0.15} />
           <DraggableCardDemo />
         </section>

         {/* Education Section */}
        <section className="max-w-4xl mx-auto px-6 pb-12 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <TextGenerateEffect words="Education" asHeading={true} staggerDelay={0.15} className="mt-8" />
          
          <div className="space-y-8">
            {/* Bachelor's Degree */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold text-black dark:text-white mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-sm text-black dark:text-gray-300 mb-1">
                  University of California, Berkeley
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Graduated Magna Cum Laude • 2018 - 2022
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Focused on software engineering, algorithms, and human-computer interaction. 
                  Completed senior capstone project developing a web-based collaboration platform.
                </p>
              </div>
              <div className="hidden md:flex flex-shrink-0 w-24 text-right">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mt-8">
                  <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3" alt="UC Berkeley Campus" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Associate's Degree */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold text-black dark:text-white mb-2">Associate of Science in Computer Science</h3>
                <p className="text-sm text-black dark:text-gray-300 mb-1">
                  San Francisco City College
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Dean's List • 2016 - 2018
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Foundation in programming fundamentals, mathematics, and computer systems. 
                  Served as president of the Computer Science Club.
                </p>
              </div>
              <div className="hidden md:flex flex-shrink-0 w-24 text-right">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mt-8">
                  <img src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" alt="San Francisco City College Campus" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12 sm:pb-16 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <TextGenerateEffect words="Professional Journey" asHeading={true} staggerDelay={0.15} className="mb-8 sm:mb-12" />
          
          <div className="space-y-8 sm:space-y-12">
            {/* Google */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Google</h3>
                </div>
                <p className="text-xs sm:text-sm text-black dark:text-white mb-2">
                  Senior Frontend Engineer • March 2024 - Present
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  Leading frontend development for Google Cloud Platform's web console, focusing on performance optimization and user experience improvements.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20">
                    Performance Optimization
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
                  Software Engineer • June 2022 - March 2024
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  Developed and maintained Azure web applications, contributing to engineering tools and platform scalability.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20">
                    C#
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20">
                    Azure
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20">
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
                  Frontend Developer • January 2021 - June 2022
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  Implemented user-facing features for Airbnb's booking platform, focusing on responsive design and accessibility.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 hover:shadow-md hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent dark:hover:bg-[#3a3a3a] dark:hover:text-gray-200 dark:hover:border-gray-600 dark:hover:shadow-gray-400/20">
                    CSS
                  </Badge>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
                <img src="/airbnb-1.svg" alt="Airbnb" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-4xl mx-auto px-6 pt-8 pb-12 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <TextGenerateEffect words="Skills & Expertise" asHeading={true} staggerDelay={0.15} />
          
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Design */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Palette className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Design</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Figma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Adobe Suite</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Prototyping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Design Systems</span>
                  </div>
                </div>
              </div>

              {/* Development */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Code className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Development</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">React</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Next.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Node.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Python</span>
                  </div>
                </div>
              </div>

              {/* Collaboration */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Collaboration</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Agile/Scrum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Cross-functional Teams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Mentoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Technical Leadership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Product Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands I've Worked With */}
        <section className="max-w-4xl mx-auto px-6 pt-8 pb-12 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <TextGenerateEffect words="Brands I've Worked With" asHeading={true} staggerDelay={0.15} />
          
          <div>
            <LogoLoop
              logos={[
                { node: <SiReact className="text-blue-500" />, title: "React", href: "https://react.dev" },
                { node: <SiNextdotjs className="text-black dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
                { node: <SiTypescript className="text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
                { node: <SiTailwindcss className="text-cyan-500" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
                { node: <SiNodedotjs className="text-green-600" />, title: "Node.js", href: "https://nodejs.org" },
                { node: <SiPython className="text-yellow-500" />, title: "Python", href: "https://python.org" },
                { node: <SiFigma className="text-purple-500" />, title: "Figma", href: "https://figma.com" },
                { node: <SiAdobephotoshop className="text-blue-400" />, title: "Photoshop", href: "https://adobe.com/products/photoshop" },
                { node: <SiAdobexd className="text-pink-500" />, title: "Adobe XD", href: "https://adobe.com/products/xd" },
                { node: <SiGit className="text-orange-600" />, title: "Git", href: "https://git-scm.com" },
                { node: <SiDocker className="text-blue-400" />, title: "Docker", href: "https://docker.com" },
                { node: <SiPostgresql className="text-blue-700" />, title: "PostgreSQL", href: "https://postgresql.org" },
                { node: <SiMongodb className="text-green-600" />, title: "MongoDB", href: "https://mongodb.com" },
                { node: <SiFirebase className="text-yellow-500" />, title: "Firebase", href: "https://firebase.google.com" },
                { node: <SiVercel className="text-black dark:text-white" />, title: "Vercel", href: "https://vercel.com" },
                { node: <SiNetlify className="text-green-500" />, title: "Netlify", href: "https://netlify.com" },
              ]}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              ariaLabel="Technologies and tools I work with"
            />
          </div>
        </section>

        {/* Personal Interests */}
        <section className="max-w-4xl mx-auto px-6 pt-8 pb-12 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <TextGenerateEffect words="Beyond Work" asHeading={true} staggerDelay={0.15} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Open Source</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  I actively contribute to open source projects and maintain several libraries focused on improving developer experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Learning & Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Always exploring new technologies and methodologies. Currently diving deep into AI/ML integration in web applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="max-w-4xl mx-auto px-6 pt-8 pb-12 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <div className="max-w-2xl mx-auto text-center">
            <TextGenerateEffect words="Let's Work Together" asHeading={true} staggerDelay={0.15} className="mb-4" />
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about design and development, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="sm" className="border-gray-200 dark:border-[#2a2a2a] bg-transparent">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 pt-8 pb-8 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
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
