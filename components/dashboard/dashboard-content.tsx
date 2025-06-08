"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MessageSquare, Users, TrendingUp, Clock, ArrowRight, Sparkles, BarChart3 } from "lucide-react"

export function DashboardContent() {
  const stats = [
    {
      name: "Total Messages",
      value: "2,847",
      change: "+12%",
      changeType: "positive",
      icon: MessageSquare,
    },
    {
      name: "Active Chats",
      value: "23",
      change: "+5%",
      changeType: "positive",
      icon: Users,
    },
    {
      name: "Response Time",
      value: "0.8s",
      change: "-15%",
      changeType: "positive",
      icon: Clock,
    },
    {
      name: "Satisfaction",
      value: "98.2%",
      change: "+2%",
      changeType: "positive",
      icon: TrendingUp,
    },
  ]

  const recentChats = [
    {
      id: 1,
      title: "Legal Query - Contract Review",
      lastMessage: "Thank you for the detailed analysis...",
      time: "2 minutes ago",
      status: "active",
    },
    {
      id: 2,
      title: "Technical Support",
      lastMessage: "The integration is working perfectly now.",
      time: "15 minutes ago",
      status: "resolved",
    },
    {
      id: 3,
      title: "General Inquiry",
      lastMessage: "Can you help me understand the pricing...",
      time: "1 hour ago",
      status: "pending",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome back, Ohimai!</h1>
            <p className="text-indigo-100">
              Your AI assistant has processed 47 messages today. Keep up the great work!
            </p>
          </div>
          <Sparkles className="h-12 w-12 text-indigo-200" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={`${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
                  {stat.change}
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Chats</CardTitle>
            <CardDescription>Your latest conversations and their status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentChats.map((chat) => (
              <div key={chat.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{chat.title}</h4>
                  <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                  <p className="text-xs text-muted-foreground mt-1">{chat.time}</p>
                </div>
                <Badge
                  variant={chat.status === "active" ? "default" : chat.status === "resolved" ? "secondary" : "outline"}
                >
                  {chat.status}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Chats
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Usage Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Overview</CardTitle>
            <CardDescription>Your current plan usage and limits</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Messages Used</span>
                <span className="text-sm text-muted-foreground">2,847 / ∞</span>
              </div>
              <Progress value={100} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">Unlimited messages on Premium plan</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Storage Used</span>
                <span className="text-sm text-muted-foreground">2.4 GB / 100 GB</span>
              </div>
              <Progress value={2.4} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">File uploads and chat history</p>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Premium Plan</p>
                  <p className="text-sm text-muted-foreground">Renews on March 15, 2024</p>
                </div>
                <Button size="sm" variant="outline">
                  Manage
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button className="h-20 flex-col space-y-2">
              <MessageSquare className="h-6 w-6" />
              <span>Start New Chat</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span>View Analytics</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span>Invite Team</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
