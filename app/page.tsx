"use client"

import { useState, useEffect } from "react"
import HeroDark from "@/components/hero-dark"
import CourseCategories from "@/components/course-categories"
import FeaturedCourses from "@/components/featured-courses"
import CertificationInfo from "@/components/certification-info"
import StatsSection from "@/components/stats-section"
import CallToAction from "@/components/call-to-action"
import Testimonials from "@/components/testimonials"
import BlogSection from "@/components/blog-section"
import InstructorsSection from "@/components/instructors-section"
import SplashScreen from "@/components/splash-screen"
import CourseIntroduction from "@/components/course-introduction"
import { motion } from "framer-motion"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasVisited = sessionStorage.getItem("hasVisited")
    if (hasVisited) {
      setLoading(false)
    } else {
      // Set the flag for future page loads in this session
      sessionStorage.setItem("hasVisited", "true")
    }
  }, [])

  return (
    <>
      {loading ? (
        <SplashScreen finishLoading={() => setLoading(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <HeroDark />
          <CourseIntroduction />
          <StatsSection />
          <CourseCategories />
          <FeaturedCourses />
          <CertificationInfo />
          <InstructorsSection />
          <Testimonials />
          <BlogSection />
          <CallToAction />
        </motion.div>
      )}
    </>
  )
}
