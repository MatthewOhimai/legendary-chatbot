"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bot, User, Download, FileText } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
  type: "text" | "image" | "file"
  fileUrl?: string
  fileName?: string
}

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === "user"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div className={`flex ${isUser ? "flex-row-reverse" : "flex-row"} items-start space-x-2 max-w-[70%]`}>
        <Avatar className="w-8 h-8">
          {isUser ? (
            <>
              <AvatarImage src="/user-avatar.png" />
              <AvatarFallback className="bg-slate-600 text-white">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </>
          ) : (
            <>
              <AvatarImage src="/ai-avatar.png" />
              <AvatarFallback className="bg-indigo-600 text-white">
                <Bot className="h-4 w-4" />
              </AvatarFallback>
            </>
          )}
        </Avatar>

        <div className={`${isUser ? "mr-2" : "ml-2"}`}>
          <div
            className={`rounded-lg px-4 py-2 ${
              isUser
                ? "bg-indigo-600 text-white"
                : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700"
            }`}
          >
            {message.type === "text" && <p className="text-sm whitespace-pre-wrap">{message.content}</p>}

            {message.type === "file" && (
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{message.fileName}</p>
                  <p className="text-xs opacity-70">File uploaded</p>
                </div>
                <Button size="sm" variant="ghost">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            )}

            {message.type === "image" && (
              <div className="space-y-2">
                <img
                  src={message.fileUrl || "/placeholder.svg"}
                  alt="Uploaded image"
                  className="rounded-lg max-w-full h-auto"
                />
                <p className="text-sm">{message.content}</p>
              </div>
            )}
          </div>

          <p className={`text-xs text-slate-500 mt-1 ${isUser ? "text-right" : "text-left"}`}>
            {formatDistanceToNow(message.timestamp, { addSuffix: true })}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
