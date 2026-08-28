"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

/**
 * @param {Object} props
 * @param {boolean} [props.darkMode=false] 
 * @param {string|null} [props.image=null]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {number} [props.size=112] - Tamaño en px (w-28 = 112)
 * @param {string} [props.alt="Animated Image"]
 */

const FALLBACK_IMAGE = "https://placehold.co/256x256/png?text=UI";
const LOCAL_FALLBACK = "/img/image.jpg";

export default function BorderImage({
  image = null, 
  darkMode = false,
  className = "",
  style,
  size = 112,
  alt = "Animated Image"
}) {
  const [imgSrc, setImgSrc] = React.useState(image || LOCAL_FALLBACK);
  const [fallbackUsed, setFallbackUsed] = React.useState(false);

  React.useEffect(() => {
    setImgSrc(image || LOCAL_FALLBACK);
    setFallbackUsed(false);
  }, [image]);

  const handleError = () => {
    if (!fallbackUsed) {
      setFallbackUsed(true);
      // Si falla el local (/img/image.jpg no existe en proyecto consumidor), usa CDN confiable
      setImgSrc(FALLBACK_IMAGE);
    } else {
      // Si incluso el CDN falla (offline), usa data URI inline para que siempre se vea algo
      setImgSrc("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%239ca3af'%3EUI%3C/text%3E%3C/svg%3E");
    }
  };

  return (
    <div className={cn("flex", className)} style={style}>
      <motion.div
        className={cn("relative p-1 rounded-full bg-gradient-to-r", !darkMode ? 'from-gray-800 via-gray-500 to-zinc-600' : 'from-gray-300 via-gray-600 to-zinc-500')}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className={cn("absolute inset-0 rounded-full blur-md bg-gradient-to-r opacity-75", !darkMode ? 'from-gray-800 via-gray-500 to-zinc-600' : 'from-gray-300 via-gray-600 to-zinc-500')}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div 
          className={cn("relative rounded-full overflow-hidden border-2 bg-gray-100", !darkMode ? 'border-gray-600' : 'border-gray-400')}
          style={{ width: size, height: size }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            style={{marginTop:'0px', width: '100%', height: '100%'}}
            src={imgSrc}
            alt={alt}
            className="object-cover w-full h-full block"
            loading="lazy"
            onError={handleError}
          />
        </div>
      </motion.div>
    </div>
  )
}
