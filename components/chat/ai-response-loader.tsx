"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bot } from "lucide-react"

export function AIResponseLoader() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start mb-4">
      <div className="flex items-start space-x-2 max-w-[70%]">
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-indigo-600 text-white">
            <Bot className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>

        <div className="ml-2">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <motion.div
                  className="w-2 h-2 bg-indigo-600 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                />
                <motion.div
                  className="w-2 h-2 bg-indigo-600 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                />
                <motion.div
                  className="w-2 h-2 bg-indigo-600 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                />
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-400">AI is thinking...</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
