"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => finishLoading(), 4000)
    return () => clearTimeout(timer)
  }, [finishLoading])

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= 100) {
          clearInterval(interval)
          return 100
        }
        return prevCounter + 4
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/90 to-primary overflow-hidden">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Background patterns */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-20"></div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-secondary/10"
              initial={{ scale: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1.5, x: "-50%", y: "-50%" }}
              transition={{ duration: 3, ease: "easeOut" }}
            />

            <motion.div
              className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-white/5"
              initial={{ scale: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1.2, x: "-50%", y: "-50%" }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
            />

            <motion.div
              className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-secondary/5"
              initial={{ scale: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, x: "-50%", y: "-50%" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
            />
          </div>

          {/* Logo and content */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="آموزشگاه تخصصی هوشمان"
                  width={80}
                  height={80}
                  className="h-20 w-auto"
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
            >
              به آموزشگاه تخصصی هوشمان خوش آمدید
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-white/80 mb-8 text-center max-w-md px-4"
            >
              مرکز آموزش تخصصی فناوری اطلاعات با مدرک رسمی فنی و حرفه‌ای
            </motion.p>

            {/* Loading bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "80%", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="w-4/5 max-w-md h-2 bg-white/20 rounded-full overflow-hidden mb-4"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${counter}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-white rounded-full"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-sm text-white/60"
            >
              در حال بارگذاری... {counter}%
            </motion.p>
          </div>

          {/* Animated elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-8 h-8 rounded-full bg-white/10"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0,
                }}
                animate={{
                  y: [
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight,
                  ],
                  x: [
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                  ],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 4,
                  times: [0, 0.5, 1],
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.3,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}
