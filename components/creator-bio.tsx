"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Globe, Heart } from "lucide-react"
import Image from "next/image"

// Custom X (formerly Twitter) icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  )
}

interface SocialLink {
  platform: string
  url: string
  icon: React.ReactNode
}

export function CreatorBio() {
  // You can customize these links with your own URLs
  const socialLinks: SocialLink[] = [
    {
      platform: "GitHub",
      url: "https://github.com/MatthewOhimai",
      icon: <Github className="w-4 h-4" />,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/your-profile", // Replace with your LinkedIn URL
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      platform: "X",
      url: "https://x.com/OhimaiMatthew",
      icon: <XIcon className="w-4 h-4" />,
    },
    {
      platform: "Portfolio",
      url: "https://your-portfolio.com", // Replace with your portfolio URL
      icon: <Globe className="w-4 h-4" />,
    },
  ]

  // Profile image URL - replace with your own image URL
  const profileImageUrl = "https://imgur.com/Hw3bLqy" // Replace with your image URL
  // If you don't have an image, you can use a placeholder
  // const profileImageUrl = "/placeholder.svg"; // Uncomment if you want to use a placeholder

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Meet the Creator</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">The visionary behind Legendary-Grade Chatbot</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-indigo-200 dark:border-indigo-800 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Profile Image */}
                <div className="relative h-64 md:h-full bg-gradient-to-br from-indigo-500 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-40 h-40 overflow-hidden rounded-full border-4 border-white/30">
                      <Image
                        src={profileImageUrl || "/placeholder.svg"}
                        alt="Ohimai Matthew"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Bio Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Ohimai Matthew</h3>
                    <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
                      AI Engineer & Innovator
                    </Badge>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Ohimai Matthew is a passionate AI engineer and innovator dedicated to creating intelligent solutions
                    that bridge the gap between technology and human communication. With expertise in machine learning,
                    natural language processing, and user experience design, he has crafted the Legendary-Grade Chatbot
                    to revolutionize how we interact with AI systems.
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Mission & Impact</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      "My mission is to democratize AI technology and make it accessible to everyone, regardless of
                      their technical background. I believe that AI should enhance human capabilities, not replace them,
                      and should be designed with empathy, ethics, and inclusivity at its core."
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <Button
                        key={link.platform}
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.icon}
                          {link.platform}
                        </a>
                      </Button>
                    ))}
                  </div>

                  {/* Achievement Stats */}
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">5+</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">50K+</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Users Impacted</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">10+</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">AI Projects</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Card className="bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Heart className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <blockquote className="text-xl italic text-slate-700 dark:text-slate-300 mb-4">
                "Technology should serve humanity, not the other way around. Every line of code I write is guided by the
                principle of creating meaningful, positive impact in people's lives."
              </blockquote>
              <cite className="text-indigo-600 dark:text-indigo-400 font-semibold">
                — Ohimai Matthew, Creator of Legendary-Grade Chatbot
              </cite>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
