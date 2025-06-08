"use client"

import { motion } from "framer-motion"

export function TypingIndicator() {
  return (
    <div className="flex items-center space-x-1 text-slate-500 text-sm">
      <span>Someone is typing</span>
      <div className="flex space-x-1">
        <motion.div
          className="w-1 h-1 bg-slate-400 rounded-full"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
        />
        <motion.div
          className="w-1 h-1 bg-slate-400 rounded-full"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
        />
        <motion.div
          className="w-1 h-1 bg-slate-400 rounded-full"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
        />
      </div>
    </div>
  )
}
