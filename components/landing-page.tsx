"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { CreatorBio } from "@/components/creator-bio"
import { PricingSection } from "@/components/pricing-section"
import { Bot, Sparkles, Zap, Shield, Globe, MessageSquare, ArrowRight, Star, Users } from "lucide-react"
import Link from "next/link"

export function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-indigo-950 dark:to-purple-950">
      <Navigation />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-bounce" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Legendary-Grade AI Technology
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Legendary-Grade
              <br />
              Chatbot
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Experience the future of AI conversation with our premium chatbot system. Powered by cutting-edge
              technology and designed for excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg">
                  Start Chatting
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Legendary Features</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Discover the powerful capabilities that make our chatbot truly legendary
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "Advanced AI Engine",
                description: "Powered by state-of-the-art language models for intelligent conversations",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Real-time responses with minimal latency for seamless interactions",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade encryption and GDPR/NDPR compliant data protection",
              },
              {
                icon: Globe,
                title: "Multi-Language Support",
                description: "Communicate in English, Yoruba, Hausa, Russian, and more",
              },
              {
                icon: MessageSquare,
                title: "Rich Conversations",
                description: "Support for text, images, files, and interactive elements",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Group chats, private messaging, and team management tools",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-indigo-200 dark:border-indigo-800 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-indigo-600 dark:bg-indigo-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            {[
              { icon: Users, value: "50K+", label: "Active Users" },
              { icon: MessageSquare, value: "1M+", label: "Messages Processed" },
              { icon: Star, value: "4.9/5", label: "User Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-indigo-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Bio Section */}
      <section id="about">
        <CreatorBio />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <PricingSection />
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Experience Legendary AI?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Join thousands of users who have already discovered the power of our AI chatbot
            </p>
            <Link href="/signup">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-6 text-xl">
                Get Started Now
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
