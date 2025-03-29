"use client"

import { motion } from "framer-motion"
import Image from "next/image"

/**
 * @param {Object} props
 * @param {boolean} [props.darkMode=false] 
 * @param {string|null} [props.image=null]
 */

export default function BorderImage({image = null, darkMode = false}) {
  return (
    <div className="flex">
      <motion.div
        className={`${!darkMode ? 'from-gray-800 via-gray-500 to-zinc-600' : 'from-gray-300 via-gray-600 to-zinc-500'} relative p-1 rounded-full bg-gradient-to-r`}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className={`${!darkMode ? 'from-gray-800 via-gray-500 to-zinc-600' : 'from-gray-300 via-gray-600 to-zinc-500'} absolute inset-0 rounded-full blur-md bg-gradient-to-r opacity-75`}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className={`${!darkMode ? 'border-gray-600' : 'border-gray-400'} relative rounded-full overflow-hidden h-28 w-28 border-2`}>
          <Image style={{marginTop:'0px'}}
            src={image ?? ""}
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