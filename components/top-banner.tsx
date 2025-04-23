"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [countdown, setCountdown] = useState({ hours: 13, minutes: 10, seconds: 52 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-gray-800 text-white py-2 px-4 flex items-center justify-center relative">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center space-x-2 space-x-reverse">
          <span className="countdown-item">{countdown.hours.toString().padStart(2, "0")}</span>
          <span className="countdown-item">{countdown.minutes.toString().padStart(2, "0")}</span>
          <span className="countdown-item">{countdown.seconds.toString().padStart(2, "0")}</span>
        </div>
        <span className="mx-2">
          تخفیف <span className="text-secondary font-bold">۳۰٪</span> دوره‌های آموزشگاه هوشمان + معرفی به کار
        </span>
        <Button className="bg-secondary hover:bg-secondary/90 text-white text-xs px-3 py-1 h-auto mr-2">
          ثبت‌نام و اطلاعات بیشتر
        </Button>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute left-4 text-white hover:text-gray-300"
        aria-label="Close banner"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  )
}
