"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { DiagonalStripes } from "@/components/diagonal-stripes"
import { TextGenerateEffectTitle } from "@/components/ui/text-generate-effect-title"
import BlurText from "@/components/ui/blur-text"
import { Mail, Send, Github, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add your form submission logic here
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0A0A0A] transition-colors border-none outer-background">
      <div className="border-[#f5f5f5] dark:border-[#1f1f1f] min-h-screen max-w-4xl mx-auto bg-white dark:bg-[#171717] shadow-sm border-r-[19px] border-l-[19px] md:border-r-[31px] md:border-l-[31px] relative" style={{ position: 'relative' }}>
        <DiagonalStripes />

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717] pt-20 pb-12">
          <div className="max-w-2xl">
            <TextGenerateEffectTitle text="Contact Me" />
            <BlurText
              text="I'm open to freelancing offers. Reach out to me to inquire more about my work."
              className="text-xl text-[#737373] dark:text-[#737373] mb-6 leading-relaxed"
              direction="bottom"
              animateBy="letters"
              delay={25}
            />
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-4xl mx-auto px-6 pt-8 pb-12 border-t border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717] section-with-inset-shadow">
          <div className="max-w-2xl mx-auto">
            <Card className="border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717] shadow-sm relative z-10">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-[#737373] dark:text-[#737373]">
                      Full name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe Smith"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717] text-gray-900 dark:text-white placeholder:text-[#737373] dark:placeholder:text-[#737373] focus:border-gray-400 dark:focus:border-gray-500"
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-[#737373] dark:text-[#737373]">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717] text-gray-900 dark:text-white placeholder:text-[#737373] dark:placeholder:text-[#737373] focus:border-gray-400 dark:focus:border-gray-500"
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-[#737373] dark:text-[#737373]">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="What's on your mind?"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717] text-gray-900 dark:text-white placeholder:text-[#737373] dark:placeholder:text-[#737373] focus:border-gray-400 dark:focus:border-gray-500 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 cursor-pointer relative z-10"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Alternative Contact Methods */}
            <div className="mt-12 text-center">
              <p className="text-sm text-[#737373] dark:text-[#737373] mb-4">
                Prefer to reach out directly?{" "}
                <Link 
                  href="mailto:farrellelijah@outlook.com"
                  className="text-gray-900 dark:text-white hover:underline transition-colors cursor-pointer"
                >
                  farrellelijah@outlook.com
                </Link>
              </p>
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
