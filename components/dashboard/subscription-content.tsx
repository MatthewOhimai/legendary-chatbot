"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Check, Crown, Star, Zap, CreditCard, Download, AlertCircle, Gift, TrendingUp } from "lucide-react"

export function SubscriptionContent() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const currentPlan = {
    name: "Premium",
    price: "$19",
    period: "/month",
    nextBilling: "March 15, 2024",
    status: "active",
  }

  const usage = {
    messages: { used: 2847, limit: "unlimited" },
    storage: { used: 2.4, limit: 100 },
    apiCalls: { used: 15420, limit: 50000 },
  }

  const plans = [
    {
      name: "Freemium",
      price: { monthly: "Free", yearly: "Free" },
      description: "Perfect for getting started",
      icon: Star,
      features: [
        "100 messages per month",
        "Basic AI responses",
        "Standard support",
        "Web access only",
        "Community features",
      ],
      limitations: ["Limited message history", "No file uploads", "Basic analytics"],
      buttonText: "Current Plan",
      buttonVariant: "outline" as const,
      popular: false,
      current: false,
    },
    {
      name: "Premium",
      price: { monthly: "$19", yearly: "$190" },
      description: "Unlock the full potential",
      icon: Crown,
      features: [
        "Unlimited messages",
        "Advanced AI capabilities",
        "Priority support",
        "Mobile & web access",
        "File upload support",
        "Multi-language support",
        "Custom integrations",
        "Advanced analytics",
        "Export conversations",
      ],
      limitations: [],
      buttonText: "Current Plan",
      buttonVariant: "default" as const,
      popular: true,
      current: true,
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      description: "For large organizations",
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
        "Team management",
        "Advanced compliance",
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false,
      current: false,
    },
  ]

  const paymentMethods = [
    {
      id: 1,
      type: "card",
      last4: "4242",
      brand: "Visa",
      expiryMonth: 12,
      expiryYear: 2025,
      isDefault: true,
    },
    {
      id: 2,
      type: "card",
      last4: "0000",
      brand: "Mastercard",
      expiryMonth: 8,
      expiryYear: 2026,
      isDefault: false,
    },
  ]

  const billingHistory = [
    {
      id: 1,
      date: "Feb 15, 2024",
      amount: "$19.00",
      status: "paid",
      invoice: "INV-001",
    },
    {
      id: 2,
      date: "Jan 15, 2024",
      amount: "$19.00",
      status: "paid",
      invoice: "INV-002",
    },
    {
      id: 3,
      date: "Dec 15, 2023",
      amount: "$19.00",
      status: "paid",
      invoice: "INV-003",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Subscription & Billing</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Manage your subscription, billing, and payment methods
        </p>
      </div>

      {/* Current Plan Overview */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <Crown className="h-5 w-5 text-indigo-600" />
                <span>Current Plan: {currentPlan.name}</span>
                <Badge className="bg-indigo-600 text-white">Active</Badge>
              </CardTitle>
              <CardDescription>
                {currentPlan.price}
                {currentPlan.period} • Next billing: {currentPlan.nextBilling}
              </CardDescription>
            </div>
            <Button variant="outline">Manage Plan</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Messages</span>
                <span className="text-sm text-muted-foreground">
                  {usage.messages.used.toLocaleString()} / {usage.messages.limit}
                </span>
              </div>
              <Progress value={100} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">Unlimited messages</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Storage</span>
                <span className="text-sm text-muted-foreground">
                  {usage.storage.used} GB / {usage.storage.limit} GB
                </span>
              </div>
              <Progress value={(usage.storage.used / usage.storage.limit) * 100} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">File uploads and chat history</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">API Calls</span>
                <span className="text-sm text-muted-foreground">
                  {usage.apiCalls.used.toLocaleString()} / {usage.apiCalls.limit.toLocaleString()}
                </span>
              </div>
              <Progress value={(usage.apiCalls.used / usage.apiCalls.limit) * 100} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">Monthly API usage</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="plans" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="plans">Plans & Pricing</TabsTrigger>
          <TabsTrigger value="billing">Billing History</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="plans" className="space-y-6">
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${billingCycle === "monthly" ? "font-medium" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative"
            >
              <div
                className={`w-4 h-4 bg-indigo-600 rounded-full transition-transform ${
                  billingCycle === "yearly" ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </Button>
            <span className={`text-sm ${billingCycle === "yearly" ? "font-medium" : "text-muted-foreground"}`}>
              Yearly
            </span>
            {billingCycle === "yearly" && (
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                <Gift className="w-3 h-3 mr-1" />
                Save 17%
              </Badge>
            )}
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.current
                    ? "border-indigo-500 shadow-lg ring-2 ring-indigo-200 dark:ring-indigo-800"
                    : plan.popular
                      ? "border-indigo-300 dark:border-indigo-700"
                      : ""
                }`}
              >
                {plan.popular && !plan.current && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white">
                    Most Popular
                  </Badge>
                )}
                {plan.current && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                    Current Plan
                  </Badge>
                )}

                <CardHeader className="text-center">
                  <plan.icon className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">
                      {typeof plan.price[billingCycle] === "string" && plan.price[billingCycle].includes("$")
                        ? plan.price[billingCycle]
                        : plan.price[billingCycle]}
                    </span>
                    {plan.price[billingCycle] !== "Free" && plan.price[billingCycle] !== "Custom" && (
                      <span className="text-muted-foreground">/{billingCycle === "monthly" ? "month" : "year"}</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t">
                      <p className="text-xs text-muted-foreground mb-2">Limitations:</p>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-center text-xs text-muted-foreground">
                            <AlertCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    className={`w-full ${plan.current ? "bg-green-600 hover:bg-green-700" : ""}`}
                    variant={plan.buttonVariant}
                    disabled={plan.current}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upgrade Benefits */}
          <Alert>
            <TrendingUp className="h-4 w-4" />
            <AlertDescription>
              <strong>Upgrade Benefits:</strong> Get priority support, advanced analytics, unlimited messages, and
              access to new features as they're released. Cancel anytime.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View and download your past invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {billingHistory.map((bill) => (
                  <div key={bill.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <p className="font-medium">{bill.amount}</p>
                        <p className="text-sm text-muted-foreground">{bill.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant={bill.status === "paid" ? "default" : "destructive"}>
                        {bill.status === "paid" ? "Paid" : "Failed"}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods and billing information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {method.brand} ending in {method.last4}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Expires {method.expiryMonth}/{method.expiryYear}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {method.isDefault && <Badge variant="secondary">Default</Badge>}
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full">
                <CreditCard className="w-4 h-4 mr-2" />
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing Address</CardTitle>
              <CardDescription>Update your billing information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Ohimai Matthew</p>
                    <p className="text-sm text-muted-foreground">123 Tech Street</p>
                    <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline">Edit Address</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
