"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Search, LogIn } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function HeroDark() {
  return (
    <div className="dark-hero min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4 space-x-reverse">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="آموزشگاه تخصصی هوشمان"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-10 space-x-reverse">
          <Link href="/" className="nav-link text-lg font-medium hover:scale-105 transition-transform">
            خانه
          </Link>

          <div className="relative group">
            <button className="nav-link text-lg font-medium group-hover:text-primary group-hover:scale-105 transition-all flex items-center">
              دوره‌ها
              <span className="dropdown-arrow-minimal">
                <ChevronDown className="h-4 w-4 mr-1 group-hover:text-primary" />
              </span>
            </button>
            <div className="hover-dropdown-menu">
              <Link href="/courses?category=icdl" className="dropdown-item">
                ICDL و آفیس
              </Link>
              <Link href="/courses?category=design" className="dropdown-item">
                طراحی گرافیک
              </Link>
              <Link href="/courses?category=web" className="dropdown-item">
                طراحی و توسعه وب
              </Link>
              <Link href="/courses?category=programming" className="dropdown-item">
                برنامه‌نویسی
              </Link>
              <Link href="/courses?category=data-science" className="dropdown-item">
                علوم داده و هوش مصنوعی
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="nav-link text-lg font-medium group-hover:text-primary group-hover:scale-105 transition-all flex items-center">
              بوتکمپ‌ها
              <span className="dropdown-arrow-minimal">
                <ChevronDown className="h-4 w-4 mr-1 group-hover:text-primary" />
              </span>
            </button>
            <div className="hover-dropdown-menu">
              <Link href="/bootcamps/web-development" className="dropdown-item">
                بوتکمپ توسعه وب
              </Link>
              <Link href="/bootcamps/python" className="dropdown-item">
                بوتکمپ پایتون
              </Link>
              <Link href="/bootcamps/ui-ux" className="dropdown-item">
                بوتکمپ طراحی UI/UX
              </Link>
              <Link href="/bootcamps/data-science" className="dropdown-item">
                بوتکمپ علوم داده
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="nav-link text-lg font-medium group-hover:text-primary group-hover:scale-105 transition-all flex items-center">
              هنرجویان
              <span className="dropdown-arrow-minimal">
                <ChevronDown className="h-4 w-4 mr-1 group-hover:text-primary" />
              </span>
            </button>
            <div className="hover-dropdown-menu">
              <Link href="/students/success-stories" className="dropdown-item">
                داستان‌های موفقیت
              </Link>
              <Link href="/students/projects" className="dropdown-item">
                پروژه‌های هنرجویان
              </Link>
              <Link href="/students/testimonials" className="dropdown-item">
                نظرات هنرجویان
              </Link>
              <Link href="/students/job-opportunities" className="dropdown-item">
                فرصت‌های شغلی
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="nav-link text-lg font-medium group-hover:text-primary group-hover:scale-105 transition-all flex items-center">
              همکاری با هوشمان
              <span className="dropdown-arrow-minimal">
                <ChevronDown className="h-4 w-4 mr-1 group-hover:text-primary" />
              </span>
            </button>
            <div className="hover-dropdown-menu">
              <Link href="/collaboration/teaching" className="dropdown-item">
                همکاری در تدریس
              </Link>
              <Link href="/collaboration/content" className="dropdown-item">
                تولید محتوا
              </Link>
              <Link href="/collaboration/marketing" className="dropdown-item">
                همکاری در بازاریابی
              </Link>
              <Link href="/collaboration/business" className="dropdown-item">
                همکاری تجاری
              </Link>
              <Link href="/collaboration/internship" className="dropdown-item">
                فرصت‌های کارآموزی
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="nav-link text-lg font-medium group-hover:text-primary group-hover:scale-105 transition-all flex items-center">
              لینک‌های مفید
              <span className="dropdown-arrow-minimal">
                <ChevronDown className="h-4 w-4 mr-1 group-hover:text-primary" />
              </span>
            </button>
            <div className="hover-dropdown-menu">
              <Link href="/resources/tutorials" className="dropdown-item">
                آموزش‌های رایگان
              </Link>
              <Link href="/resources/tools" className="dropdown-item">
                ابزارهای کاربردی
              </Link>
              <Link href="/resources/ebooks" className="dropdown-item">
                کتاب‌های الکترونیکی
              </Link>
              <Link href="/resources/templates" className="dropdown-item">
                قالب‌ها و نمونه‌کارها
              </Link>
              <Link href="/resources/faq" className="dropdown-item">
                سوالات متداول
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex items-center space-x-2 space-x-reverse">
          <Link
            href="/auth/login"
            className="flex items-center px-3 py-2 text-primary hover:text-primary/80 bg-primary/10 rounded-md nav-icon-button font-bold"
          >
            <LogIn className="h-5 w-5 ml-1" />
            ورود / ثبت‌نام
          </Link>
          <Link
            href="/cart"
            className="p-2 text-primary hover:text-primary/80 bg-primary/10 rounded-md nav-icon-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </Link>
          <button
            onClick={() => {}}
            className="p-2 text-primary hover:text-primary/80 bg-primary/10 rounded-md nav-icon-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <Link href="/contact" className="p-2 text-white bg-primary hover:bg-primary/90 rounded-md nav-icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </Link>
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-lg md:text-xl text-gray-600 mb-4">آموزش، معرفی و استخدام</p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight">
            آموزشگاه تخصصی هوشمان
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            با هوشمان، تخصص را بیاموزید، به درآمد برسید و آینده‌ای روشن بسازید! دوره‌های آموزشی حرفه‌ای و کاربردی ما در
            مشهد، کلید موفقیت شماست.
          </p>

          <div className="max-w-2xl w-full mx-auto relative">
            <div className="search-glow absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
            <div className="relative">
              <Input
                type="search"
                placeholder="چی میخوای یاد بگیری؟"
                className="py-7 px-6 text-lg rounded-full border-2 border-primary/30 focus:border-primary shadow-lg bg-white/90 backdrop-blur-sm"
              />
              <Button className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full bg-primary hover:bg-primary/90 text-white h-12 w-12 flex items-center justify-center">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Students Count */}
              <div className="stats-card">
                <div className="stats-icon-wrapper bg-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stats-icon text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="stats-content">
                  <h3 className="stats-number">۵,۰۰۰+</h3>
                  <p className="stats-label">تعداد هنرجویان</p>
                </div>
              </div>

              {/* Courses Count */}
              <div className="stats-card">
                <div className="stats-icon-wrapper bg-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stats-icon text-primary"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    <circle cx="10" cy="8" r="2"></circle>
                    <path d="M7 13h6"></path>
                    <path d="M7 17h4"></path>
                  </svg>
                </div>
                <div className="stats-content">
                  <h3 className="stats-number">۱۲۰+</h3>
                  <p className="stats-label">دوره های برگزار شده</p>
                </div>
              </div>

              {/* Fields Count */}
              <div className="stats-card">
                <div className="stats-icon-wrapper bg-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stats-icon text-primary"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <div className="stats-content">
                  <h3 className="stats-number">۲۵+</h3>
                  <p className="stats-label">رشته های آموزشی</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
