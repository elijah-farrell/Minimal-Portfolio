"use client"

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
      <div className="border-gray-200 dark:border-[#2a2a2a] min-h-screen max-w-4xl mx-auto bg-white dark:bg-[#171717] shadow-sm border-r-[19px] border-l-[19px] md:border-r-[31px] md:border-l-[31px] relative" style={{ position: 'relative' }}>
        <DiagonalStripes />

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717] pt-20 pb-12">
          <div className="max-w-2xl">
            <TextGenerateEffectTitle text="Contact Me" />
            <BlurText
              text="I'm open to freelancing offers. Reach out to me to inquire more about my work."
              className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
              direction="bottom"
              animateBy="letters"
              delay={25}
            />
          </div>
          
          {/* Full width border line */}
          <div className="border-b border-gray-100 dark:border-[#2a2a2a] mb-6 -mx-6"></div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe Smith"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-400 dark:focus:border-gray-500"
                      required
                      autocomplete="name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-400 dark:focus:border-gray-500"
                      required
                      autocomplete="email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="What's on your mind?"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-400 dark:focus:border-gray-500 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Alternative Contact Methods */}
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Prefer to reach out directly?
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-200 dark:border-[#2a2a2a] bg-transparent"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
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
