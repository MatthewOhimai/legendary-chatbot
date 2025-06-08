"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Paperclip, Smile, MoreVertical, Bot } from "lucide-react"
import { ChatMessage } from "./chat-message"
import { AIResponseLoader } from "./ai-response-loader"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
  type: "text" | "image" | "file"
  fileUrl?: string
  fileName?: string
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your Legendary-Grade AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(Date.now() - 60000),
      type: "text",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isAIResponding, setIsAIResponding] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isAIResponding])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    }

    setMessages((prev) => [...prev, newMessage])
    setInputValue("")
    setIsAIResponding(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Thank you for your message! I'm processing your request and will provide you with a comprehensive response. This is a demonstration of the AI response system.",
        sender: "ai",
        timestamp: new Date(),
        type: "text",
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsAIResponding(false)
    }, 2000)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const fileMessage: Message = {
      id: Date.now().toString(),
      content: `Uploaded file: ${file.name}`,
      sender: "user",
      timestamp: new Date(),
      type: "file",
      fileName: file.name,
      fileUrl: URL.createObjectURL(file),
    }

    setMessages((prev) => [...prev, fileMessage])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex h-full">
      {/* Chat List Sidebar */}
      <div className="w-80 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Chats</h2>
        </div>
        <div className="p-2 space-y-2">
          {[
            {
              id: 1,
              title: "Legal Query - Contract Review",
              lastMessage: "Thank you for the analysis...",
              time: "2m ago",
              unread: 2,
            },
            {
              id: 2,
              title: "Technical Support",
              lastMessage: "The integration is working...",
              time: "15m ago",
              unread: 0,
            },
            {
              id: 3,
              title: "General Inquiry",
              lastMessage: "Can you help me understand...",
              time: "1h ago",
              unread: 1,
            },
          ].map((chat) => (
            <div
              key={chat.id}
              className="p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-sm truncate">{chat.title}</h3>
                {chat.unread > 0 && <Badge className="bg-indigo-600 text-white text-xs">{chat.unread}</Badge>}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 truncate">{chat.lastMessage}</p>
              <p className="text-xs text-slate-500 mt-1">{chat.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src="/ai-avatar.png" />
                <AvatarFallback className="bg-indigo-600 text-white">
                  <Bot className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Legendary AI Assistant</h3>
                <p className="text-sm text-green-600 dark:text-green-400">Online • Responds instantly</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
          <AnimatePresence>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </AnimatePresence>

          {isAIResponding && <AIResponseLoader />}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="flex items-end space-x-2">
            <div className="flex-1">
              <div className="relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="pr-20 min-h-[44px] resize-none"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                  <Button variant="ghost" size="sm" onClick={() => fileInputRef.current?.click()}>
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Smile className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isAIResponding}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileUpload}
            accept="image/*,.pdf,.doc,.docx,.txt"
          />

          <p className="text-xs text-slate-500 mt-2 text-center">Press Enter to send, Shift + Enter for new line</p>
        </div>
      </div>
    </div>
  )
}
