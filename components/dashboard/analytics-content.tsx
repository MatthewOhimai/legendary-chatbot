"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Users, Clock, TrendingUp, TrendingDown, Calendar, Globe, Zap, Target } from "lucide-react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export function AnalyticsContent() {
  const messageData = [
    { name: "Mon", messages: 120, responses: 118 },
    { name: "Tue", messages: 150, responses: 145 },
    { name: "Wed", messages: 180, responses: 175 },
    { name: "Thu", messages: 200, responses: 195 },
    { name: "Fri", messages: 170, responses: 168 },
    { name: "Sat", messages: 90, responses: 88 },
    { name: "Sun", messages: 80, responses: 79 },
  ]

  const responseTimeData = [
    { name: "00:00", time: 0.8 },
    { name: "04:00", time: 0.6 },
    { name: "08:00", time: 1.2 },
    { name: "12:00", time: 1.5 },
    { name: "16:00", time: 1.8 },
    { name: "20:00", time: 1.1 },
  ]

  const languageData = [
    { name: "English", value: 65, color: "#6366f1" },
    { name: "Yoruba", value: 20, color: "#8b5cf6" },
    { name: "Hausa", value: 10, color: "#06b6d4" },
    { name: "Russian", value: 5, color: "#10b981" },
  ]

  const topicsData = [
    { topic: "Legal Queries", count: 450, percentage: 35 },
    { topic: "Technical Support", count: 320, percentage: 25 },
    { topic: "General Questions", count: 260, percentage: 20 },
    { topic: "Product Information", count: 180, percentage: 14 },
    { topic: "Billing & Payments", count: 80, percentage: 6 },
  ]

  const stats = [
    {
      name: "Total Messages",
      value: "12,847",
      change: "+12.5%",
      changeType: "positive",
      icon: MessageSquare,
      description: "Messages processed this month",
    },
    {
      name: "Active Users",
      value: "2,340",
      change: "+8.2%",
      changeType: "positive",
      icon: Users,
      description: "Unique users this month",
    },
    {
      name: "Avg Response Time",
      value: "0.8s",
      change: "-15.3%",
      changeType: "positive",
      icon: Clock,
      description: "Average AI response time",
    },
    {
      name: "Satisfaction Rate",
      value: "98.2%",
      change: "+2.1%",
      changeType: "positive",
      icon: Target,
      description: "User satisfaction score",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Analytics Dashboard</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Comprehensive insights into your AI chatbot performance and user interactions
        </p>
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
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <span className={`${stat.changeType === "positive" ? "text-green-600" : "text-red-600"} mr-1`}>
                  {stat.changeType === "positive" ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                </span>
                <span className={`${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
                  {stat.change}
                </span>
                <span className="ml-1">from last month</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <Tabs defaultValue="messages" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="languages">Languages</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
        </TabsList>

        <TabsContent value="messages" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Message Volume</CardTitle>
                <CardDescription>Daily message count over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={messageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="messages" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Messages vs Responses</CardTitle>
                <CardDescription>Comparison of incoming messages and AI responses</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={messageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="messages" fill="#6366f1" />
                    <Bar dataKey="responses" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Response Time Trends</CardTitle>
                <CardDescription>Average response time throughout the day</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={responseTimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="time" stroke="#06b6d4" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Success Rate</span>
                    <span className="text-sm text-muted-foreground">98.2%</span>
                  </div>
                  <Progress value={98.2} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">User Satisfaction</span>
                    <span className="text-sm text-muted-foreground">96.8%</span>
                  </div>
                  <Progress value={96.8} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Response Accuracy</span>
                    <span className="text-sm text-muted-foreground">94.5%</span>
                  </div>
                  <Progress value={94.5} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Uptime</span>
                    <span className="text-sm text-muted-foreground">99.9%</span>
                  </div>
                  <Progress value={99.9} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="languages" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Language Distribution</CardTitle>
                <CardDescription>Breakdown of conversations by language</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={languageData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {languageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Language Usage</CardTitle>
                <CardDescription>Detailed breakdown by language</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {languageData.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                      <span className="font-medium">{lang.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">{lang.value}%</span>
                      <Badge variant="secondary">{Math.round((lang.value / 100) * 12847)} msgs</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="topics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Popular Topics</CardTitle>
              <CardDescription>Most discussed topics in conversations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topicsData.map((topic, index) => (
                  <div key={topic.topic} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{topic.topic}</h4>
                        <p className="text-sm text-muted-foreground">{topic.count} conversations</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-24">
                        <Progress value={topic.percentage} className="h-2" />
                      </div>
                      <span className="text-sm font-medium w-12 text-right">{topic.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Additional Insights */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Global Reach</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Nigeria</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">United States</span>
                <span className="text-sm font-medium">25%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Russia</span>
                <span className="text-sm font-medium">15%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Others</span>
                <span className="text-sm font-medium">15%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Peak Hours</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">9:00 AM - 11:00 AM</span>
                <Badge>High</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">2:00 PM - 4:00 PM</span>
                <Badge>High</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">7:00 PM - 9:00 PM</span>
                <Badge variant="secondary">Medium</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">11:00 PM - 6:00 AM</span>
                <Badge variant="outline">Low</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Weekly Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Monday</span>
                <span className="text-sm font-medium">+12%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Tuesday</span>
                <span className="text-sm font-medium">+8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Wednesday</span>
                <span className="text-sm font-medium">+15%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Weekend</span>
                <span className="text-sm font-medium">-25%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
