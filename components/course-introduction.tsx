"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, CheckCircle, Clock, Users, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "دوره جامع دیجیتال مارکتینگ",
    description: "آموزش کامل و کاربردی دیجیتال مارکتینگ از صفر تا صد همراه با پروژه‌های عملی و معرفی به بازار کار",
    image: "/digital-marketing-concepts.png",
    features: [
      "۱۸ دوره تخصصی در یک پکیج",
      "بیش از ۱۲۰ ساعت آموزش کاربردی",
      "پشتیبانی و رفع اشکال آنلاین",
      "معرفی به بازار کار تضمینی",
    ],
    duration: "۶ ماه",
    students: "۸۵۰+",
    certificate: true,
    price: "۶,۹۰۰,۰۰۰ تومان",
    slug: "digital-marketing",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 2,
    title: "دوره جامع طراحی وب",
    description: "آموزش طراحی وب از مبتدی تا پیشرفته با HTML، CSS، JavaScript و فریمورک‌های مدرن همراه با پروژه‌های عملی",
    image: "/coding-on-laptop.png",
    features: [
      "آموزش HTML، CSS و JavaScript",
      "طراحی ریسپانسیو و موبایل فرندلی",
      "آشنایی با فریمورک‌های React و Next.js",
      "ساخت پروژه‌های واقعی و کاربردی",
    ],
    duration: "۴ ماه",
    students: "۷۲۰+",
    certificate: true,
    price: "۵,۵۰۰,۰۰۰ تومان",
    slug: "web-design",
    color: "from-purple-500 to-purple-700",
  },
  {
    id: 3,
    title: "دوره جامع سئو و بهینه‌سازی",
    description: "آموزش تخصصی سئو و بهینه‌سازی موتورهای جستجو برای افزایش رتبه سایت و جذب ترافیک هدفمند",
    image: "/digital-marketing-education.png",
    features: [
      "آموزش سئو داخلی و خارجی",
      "تکنیک‌های پیشرفته لینک‌سازی",
      "تحلیل رقبا و کلمات کلیدی",
      "بهینه‌سازی سایت برای موبایل",
    ],
    duration: "۳ ماه",
    students: "۶۵۰+",
    certificate: true,
    price: "۴,۹۰۰,۰۰۰ تومان",
    slug: "seo-optimization",
    color: "from-green-500 to-green-700",
  },
]

export default function CourseIntroduction() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextCourse = () => {
    setActiveIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1))
  }

  const prevCourse = () => {
    setActiveIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1))
  }

  const activeCourse = courses[activeIndex]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/3 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            دوره‌های تخصصی آموزشگاه هوشمان
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            دوره‌های جامع و کاربردی با مدرک رسمی فنی و حرفه‌ای و معرفی به بازار کار تضمینی
          </motion.p>
          <div className="h-1 w-20 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Course Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={`image-${activeIndex}`}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${activeCourse.color} opacity-90 z-10`}></div>
            <Image
              src={activeCourse.image || "/placeholder.svg"}
              alt={activeCourse.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{activeCourse.title}</h3>
              <p className="text-white/90 mb-4 max-w-lg">{activeCourse.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{activeCourse.duration}</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-sm">{activeCourse.students} دانشجو</span>
                </div>
                {activeCourse.certificate && (
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Award className="h-4 w-4 mr-1" />
                    <span className="text-sm">مدرک رسمی</span>
                  </div>
                )}
              </div>
              <Link href={`/courses/${activeCourse.slug}`}>
                <Button className="bg-white text-primary hover:bg-white/90 transition-all">مشاهده جزئیات دوره</Button>
              </Link>
            </div>
          </motion.div>

          {/* Course Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={`details-${activeIndex}`}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <motion.div variants={itemVariants} className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">ویژگی‌های دوره</h3>
              <div className="text-2xl font-bold text-primary">{activeCourse.price}</div>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-4 mb-8">
              {activeCourse.features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 ml-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-between items-center">
              <div className="flex space-x-2 space-x-reverse">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevCourse}
                  className="rounded-full border-gray-300 hover:bg-primary/10 hover:text-primary"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextCourse}
                  className="rounded-full border-gray-300 hover:bg-primary/10 hover:text-primary"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center">
                {courses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full mx-1 transition-all ${
                      index === activeIndex ? "bg-primary scale-125" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <Link href="/courses">
                <Button className="bg-primary hover:bg-primary/90">مشاهده همه دوره‌ها</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
