"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Search, ChevronDown, LogIn } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  return (
    <>
      <nav className="bg-transparent py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="آموزشگاه هوشمان"
                  width={50}
                  height={50}
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold mr-2 text-primary">آموزشگاه تخصصی فنی و حرفه‌ای هوشمان</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-all text-lg font-medium hover:scale-105 border-b-2 border-transparent hover:border-primary py-1"
              >
                خانه
              </Link>

              <div className="relative group">
                <button className="text-gray-700 hover:text-primary transition-all flex items-center text-lg font-medium hover:scale-105 border-b-2 border-transparent hover:border-primary py-1">
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
                <button className="text-gray-700 hover:text-primary transition-all flex items-center text-lg font-medium hover:scale-105 border-b-2 border-transparent hover:border-primary py-1">
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
                <button className="text-gray-700 hover:text-primary transition-all flex items-center text-lg font-medium hover:scale-105 border-b-2 border-transparent hover:border-primary py-1">
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
                <button className="text-gray-700 hover:text-primary transition-all flex items-center text-lg font-medium hover:scale-105 border-b-2 border-transparent hover:border-primary py-1">
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
                <button className="text-gray-700 hover:text-primary transition-all flex items-center text-lg font-medium hover:scale-105 border-b-2 border-transparent hover:border-primary py-1">
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
            </div>

            {/* Action Buttons */}
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
                onClick={() => toggleSearch()}
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
              <Link
                href="/contact"
                className="p-2 text-white bg-primary hover:bg-primary/90 rounded-md nav-icon-button"
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-3 space-y-2 animate-fade-in bg-white/90 mt-4 rounded-lg p-4 shadow-md">
              <Link
                href="/"
                className="block py-3 text-gray-700 hover:text-primary transition text-lg font-medium border-r-4 border-transparent hover:border-primary hover:pr-2"
                onClick={toggleMenu}
              >
                خانه
              </Link>

              <div className="block py-2">
                <button
                  onClick={() => toggleDropdown("mobile-courses")}
                  className="flex items-center justify-between w-full py-2 text-gray-700 font-bold text-lg"
                >
                  <span>دوره‌ها</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      activeDropdown === "mobile-courses" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div className={`mobile-dropdown-menu ${activeDropdown === "mobile-courses" ? "active" : ""}`}>
                  <Link
                    href="/courses?category=icdl"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    ICDL و آفیس
                  </Link>
                  <Link
                    href="/courses?category=design"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    طراحی گرافیک
                  </Link>
                  <Link
                    href="/courses?category=web"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    طراحی و توسعه وب
                  </Link>
                  <Link
                    href="/courses?category=programming"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    برنامه‌نویسی
                  </Link>
                  <Link
                    href="/courses?category=data-science"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    علوم داده و هوش مصنوعی
                  </Link>
                </div>
              </div>

              <div className="block py-2">
                <button
                  onClick={() => toggleDropdown("mobile-bootcamps")}
                  className="flex items-center justify-between w-full py-2 text-gray-700 font-bold text-lg"
                >
                  <span>بوتکمپ‌ها</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      activeDropdown === "mobile-bootcamps" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div className={`mobile-dropdown-menu ${activeDropdown === "mobile-bootcamps" ? "active" : ""}`}>
                  <Link
                    href="/bootcamps/web-development"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    بوتکمپ توسعه وب
                  </Link>
                  <Link
                    href="/bootcamps/python"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    بوتکمپ پایتون
                  </Link>
                  <Link
                    href="/bootcamps/ui-ux"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    بوتکمپ طراحی UI/UX
                  </Link>
                  <Link
                    href="/bootcamps/data-science"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    بوتکمپ علوم داده
                  </Link>
                </div>
              </div>

              <div className="block py-2">
                <button
                  onClick={() => toggleDropdown("mobile-students")}
                  className="flex items-center justify-between w-full py-2 text-gray-700 font-bold text-lg"
                >
                  <span>هنرجویان</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      activeDropdown === "mobile-students" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div className={`mobile-dropdown-menu ${activeDropdown === "mobile-students" ? "active" : ""}`}>
                  <Link
                    href="/students/success-stories"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    داستان‌های موفقیت
                  </Link>
                  <Link
                    href="/students/projects"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    پروژه‌های هنرجویان
                  </Link>
                  <Link
                    href="/students/testimonials"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    نظرات هنرجویان
                  </Link>
                  <Link
                    href="/students/job-opportunities"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    فرصت‌های شغلی
                  </Link>
                </div>
              </div>

              <div className="block py-2">
                <button
                  onClick={() => toggleDropdown("mobile-collaboration")}
                  className="flex items-center justify-between w-full py-2 text-gray-700 font-bold text-lg"
                >
                  <span>همکاری با هوشمان</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      activeDropdown === "mobile-collaboration" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div className={`mobile-dropdown-menu ${activeDropdown === "mobile-collaboration" ? "active" : ""}`}>
                  <Link
                    href="/collaboration/teaching"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    همکاری در تدریس
                  </Link>
                  <Link
                    href="/collaboration/content"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    تولید محتوا
                  </Link>
                  <Link
                    href="/collaboration/marketing"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    همکاری در بازاریابی
                  </Link>
                  <Link
                    href="/collaboration/business"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    همکاری تجاری
                  </Link>
                  <Link
                    href="/collaboration/internship"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    فرصت‌های کارآموزی
                  </Link>
                </div>
              </div>

              <div className="block py-2">
                <button
                  onClick={() => toggleDropdown("mobile-resources")}
                  className="flex items-center justify-between w-full py-2 text-gray-700 font-bold text-lg"
                >
                  <span>لینک‌های مفید</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      activeDropdown === "mobile-resources" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div className={`mobile-dropdown-menu ${activeDropdown === "mobile-resources" ? "active" : ""}`}>
                  <Link
                    href="/resources/tutorials"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    آموزش‌های رایگان
                  </Link>
                  <Link
                    href="/resources/tools"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    ابزارهای کاربردی
                  </Link>
                  <Link
                    href="/resources/ebooks"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    کتاب‌های الکترونیکی
                  </Link>
                  <Link
                    href="/resources/templates"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    قالب‌ها و نمونه‌کارها
                  </Link>
                  <Link
                    href="/resources/faq"
                    className="block py-2 pr-4 text-gray-600 hover:text-primary transition hover:pr-6"
                    onClick={toggleMenu}
                  >
                    سوالات متداول
                  </Link>
                </div>
              </div>

              <div className="flex items-center py-3">
                <Link
                  href="/auth/login"
                  className="flex items-center px-3 py-2 text-primary hover:text-primary/80 bg-primary/10 rounded-md nav-icon-button font-bold w-full justify-center"
                  onClick={toggleMenu}
                >
                  <LogIn className="h-5 w-5 ml-1" />
                  ورود / ثبت‌نام
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center pt-20 px-4 animate-fade-in">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">جستجو در دوره‌ها</h3>
              <button onClick={toggleSearch} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <Input
                type="search"
                placeholder="عنوان دوره یا کلمه کلیدی را وارد کنید..."
                className="w-full pl-10"
                autoFocus
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">جستجوهای محبوب:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/courses?search=python" onClick={toggleSearch} className="category-pill">
                  پایتون
                </Link>
                <Link href="/courses?search=photoshop" onClick={toggleSearch} className="category-pill">
                  فتوشاپ
                </Link>
                <Link href="/courses?search=web" onClick={toggleSearch} className="category-pill">
                  طراحی وب
                </Link>
                <Link href="/courses?search=excel" onClick={toggleSearch} className="category-pill">
                  اکسل
                </Link>
                <Link href="/courses?search=ai" onClick={toggleSearch} className="category-pill">
                  هوش مصنوعی
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
