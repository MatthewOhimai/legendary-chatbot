"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Freemium",
      price: "Free",
      description: "Perfect for getting started with AI conversations",
      icon: Star,
      features: [
        "100 messages per month",
        "Basic AI responses",
        "Standard support",
        "Web access only",
        "Community features",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Premium",
      price: "$19",
      period: "/month",
      description: "Unlock the full potential of legendary AI",
      icon: Crown,
      features: [
        "Unlimited messages",
        "Advanced AI capabilities",
        "Priority support",
        "Mobile & web access",
        "File upload support",
        "Multi-language support",
        "Custom integrations",
        "Analytics dashboard",
      ],
      buttonText: "Upgrade to Premium",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for your organization",
      icon: Zap,
      features: [
        "Everything in Premium",
        "Custom AI training",
        "Dedicated support",
        "On-premise deployment",
        "Advanced security",
        "Custom integrations",
        "SLA guarantees",
        "White-label options",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Choose Your Plan</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Select the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              <Card
                className={`h-full ${
                  plan.popular
                    ? "border-indigo-500 shadow-xl scale-105 bg-white dark:bg-slate-900"
                    : "bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                } transition-all duration-300 hover:shadow-xl`}
              >
                <CardHeader className="text-center pb-8">
                  <plan.icon
                    className={`w-12 h-12 mx-auto mb-4 ${plan.popular ? "text-indigo-600" : "text-slate-600 dark:text-slate-400"}`}
                  />
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                    {plan.period && <span className="text-slate-600 dark:text-slate-400">{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${plan.popular ? "bg-indigo-600 hover:bg-indigo-700" : ""}`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4">Secure payments powered by</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">Stripe</div>
            <div className="text-2xl font-bold">Paystack</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
