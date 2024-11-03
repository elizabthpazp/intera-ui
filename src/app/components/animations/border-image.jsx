"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BorderImage() {
  return (
    <div className="flex" style={{marginBottom:'-5px'}}>
      <motion.div
        className="relative p-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-75"
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative rounded-full overflow-hidden h-28 w-28 border-2 border-purple-400">
          <Image
            src="/img/image.jpg"
            alt="Animated Image"
            width={256}
            height={256}
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  )
}