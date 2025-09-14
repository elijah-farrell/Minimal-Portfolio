"use client"

import { Button } from "@/components/ui/button"
import { DiagonalStripes } from "@/components/diagonal-stripes"
import { TextGenerateEffectTitle } from "@/components/ui/text-generate-effect-title"
import BlurText from "@/components/ui/blur-text"
import { ArrowRight, Calendar, Clock, Github, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Design Systems",
      description: "How I approach creating design systems that grow with your product and team. Lessons learned from building systems at Google and Microsoft.",
      date: "Sep 3, 2025",
      readTime: "8 min read",
      slug: "building-scalable-design-systems",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      alt: "Scalable design systems"
    },
    {
      id: 2,
      title: "React Performance Optimization Techniques",
      description: "Deep dive into React optimization strategies I've used in production. From memoization to code splitting and everything in between.",
      date: "Aug 28, 2025",
      readTime: "12 min read",
      slug: "react-performance-optimization-techniques",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      alt: "React performance optimization"
    },
    {
      id: 3,
      title: "Transitioning from Frontend to Full-Stack",
      description: "My journey from focusing solely on frontend development to becoming a full-stack engineer. Tips and resources that helped along the way.",
      date: "Aug 15, 2025",
      readTime: "6 min read",
      slug: "transitioning-from-frontend-to-fullstack",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      alt: "Frontend to fullstack development"
    },
    {
      id: 4,
      title: "My Development Workflow Setup",
      description: "A detailed look at the tools, extensions, and configurations that make up my daily development workflow in 2023.",
      date: "Aug 5, 2025",
      readTime: "10 min read",
      slug: "my-development-workflow-setup",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      alt: "Development workflow setup"
    },
    {
      id: 5,
      title: "The Future of Web Development",
      description: "Exploring emerging technologies and trends that will shape the next decade of web development. From AI integration to WebAssembly and beyond.",
      date: "Jul 22, 2025",
      readTime: "15 min read",
      slug: "future-of-web-development",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      alt: "Future of web development technology"
    },
    {
      id: 6,
      title: "Building Accessible User Interfaces",
      description: "A comprehensive guide to creating inclusive designs that work for everyone. Best practices, tools, and real-world examples from my experience.",
      date: "Jul 8, 2025",
      readTime: "11 min read",
      slug: "building-accessible-user-interfaces",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      alt: "Accessible user interface design"
    }
  ]

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0A0A0A] transition-colors border-none outer-background">
      <div className="border-gray-200 dark:border-[#2a2a2a] min-h-screen max-w-4xl mx-auto bg-white dark:bg-[#171717] shadow-sm border-r-[19px] border-l-[19px] md:border-r-[31px] md:border-l-[31px] relative" style={{ position: 'relative' }}>
        <DiagonalStripes />

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717] pt-20 pb-12">
          <div className="max-w-2xl">
            <TextGenerateEffectTitle text="Blog" />
            <BlurText
              text="Thoughts on design, development, and the intersection of technology and creativity."
              className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
              direction="bottom"
              animateBy="letters"
              delay={25}
            />
          </div>
          
          {/* Full width border line */}
          <div className="border-b border-gray-100 dark:border-[#2a2a2a] mb-6 -mx-6"></div>
        </section>

        {/* Blog Posts Section */}
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <article 
                  className="group cursor-pointer border-b border-gray-100 dark:border-[#2a2a2a] pb-8 last:border-b-0 hover:bg-gray-50/50 dark:hover:bg-[#1a1a1a]/50 transition-all duration-300 rounded-lg p-6 -m-6"
                >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Visual Element */}
                  <div className="hidden md:block w-24 h-24 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={post.image} 
                      alt={post.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get notified when I publish new articles about design, development, and technology. You can unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-200 dark:border-[#2a2a2a] rounded-lg bg-white dark:bg-[#171717] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500"
              />
              <Button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </Button>
            </div>
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
