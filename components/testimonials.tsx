"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content:
      "دوره‌های آکادمی بسیار کاربردی و مفید بودند. بعد از گذراندن دوره طراحی وب توانستم به راحتی وارد بازار کار شوم.",
    name: "علی محمدی",
    role: "توسعه‌دهنده وب",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    content:
      "مدرک فنی و حرفه‌ای که از آکادمی دریافت کردم در استخدام من تاثیر زیادی داشت و باعث شد با حقوق بالاتری استخدام شوم.",
    name: "مریم احمدی",
    role: "طراح گرافیک",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    content:
      "کیفیت آموزش‌ها عالی بود. استادها با صبر و حوصله تمام مطالب را توضیح می‌دادند و همیشه پاسخگوی سوالات ما بودند.",
    name: "رضا کریمی",
    role: "متخصص هوش مصنوعی",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    content:
      "دوره پایتون و هوش مصنوعی آکادمی به من کمک کرد تا در یک شرکت دانش‌بنیان استخدام شوم. از کیفیت آموزش‌ها بسیار راضی هستم.",
    name: "سارا حسینی",
    role: "متخصص یادگیری ماشین",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    content:
      "پشتیبانی و راهنمایی‌های اساتید حتی بعد از اتمام دوره ادامه داشت و این موضوع به من در پیدا کردن شغل مناسب کمک زیادی کرد.",
    name: "امیر رضایی",
    role: "برنامه‌نویس موبایل",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1)
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2)
      } else {
        setVisibleTestimonials(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = testimonials.length - visibleTestimonials

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="seo-title">نظرات دانشجویان</h2>
        <p className="seo-description">آنچه دانشجویان ما درباره دوره‌ها و مدارک فنی و حرفه‌ای می‌گویند</p>
      </div>

      <div className="testimonial-carousel">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">تجربه دانشجویان ما</h3>
          <div className="flex space-x-2 space-x-reverse">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${currentIndex * (100 / visibleTestimonials)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-slide p-6 bg-white rounded-lg shadow-sm border border-gray-100"
                style={{ width: `${100 / visibleTestimonials}%`, flexShrink: 0, padding: "0 0.75rem" }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6 h-full flex flex-col">
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="text-foreground mb-6 flex-grow">{testimonial.content}</p>
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonial-navigation mt-6 flex justify-center space-x-2 space-x-reverse">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
