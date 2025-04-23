"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"
import Image from "next/image"
import { Clock, Users, Search, Filter, SlidersHorizontal } from "lucide-react"

const categories = [
  { id: "all", name: "همه دوره‌ها" },
  { id: "icdl", name: "ICDL و آفیس" },
  { id: "design", name: "طراحی گرافیک" },
  { id: "web", name: "طراحی و توسعه وب" },
  { id: "programming", name: "برنامه‌نویسی" },
  { id: "data-science", name: "علوم داده و هوش مصنوعی" },
]

const courses = [
  {
    id: 1,
    title: "ICDL مهارت‌های هفتگانه",
    description: "آموزش کامل مهارت‌های هفتگانه ICDL شامل ویندوز، ورد، اکسل، پاورپوینت و...",
    image: "/placeholder.svg?height=200&width=400",
    level: "مبتدی",
    duration: "۳ ماه",
    students: "۱۲۰",
    certificate: true,
    category: "icdl",
    price: "۲,۵۰۰,۰۰۰",
    slug: "icdl-skills",
  },
  {
    id: 2,
    title: "اکسل پیشرفته",
    description: "آموزش پیشرفته اکسل شامل فرمول‌نویسی، ماکرو، داشبورد و تحلیل داده",
    image: "/placeholder.svg?height=200&width=400",
    level: "پیشرفته",
    duration: "۲ ماه",
    students: "۸۵",
    certificate: true,
    category: "icdl",
    price: "۲,۸۰۰,۰۰۰",
    slug: "advanced-excel",
  },
  {
    id: 3,
    title: "فتوشاپ مقدماتی تا پیشرفته",
    description: "آموزش حرفه‌ای فتوشاپ از صفر تا صد برای طراحی گرافیک و ویرایش تصاویر",
    image: "/placeholder.svg?height=200&width=400",
    level: "متوسط",
    duration: "۲ ماه",
    students: "۹۸",
    certificate: true,
    category: "design",
    price: "۳,۲۰۰,۰۰۰",
    slug: "photoshop-complete",
  },
  {
    id: 4,
    title: "ایلاستریتور حرفه‌ای",
    description: "آموزش نرم‌افزار ایلاستریتور برای طراحی لوگو، آیکون و تصاویر برداری",
    image: "/placeholder.svg?height=200&width=400",
    level: "متوسط",
    duration: "۲ ماه",
    students: "۷۵",
    certificate: true,
    category: "design",
    price: "۳,۵۰۰,۰۰۰",
    slug: "illustrator-professional",
  },
  {
    id: 5,
    title: "طراحی وب با HTML و CSS",
    description: "آموزش اصول طراحی وب با HTML و CSS برای ساخت صفحات وب استاتیک",
    image: "/placeholder.svg?height=200&width=400",
    level: "مبتدی",
    duration: "۱.۵ ماه",
    students: "۱۱۰",
    certificate: true,
    category: "web",
    price: "۲,۲۰۰,۰۰۰",
    slug: "html-css-web-design",
  },
  {
    id: 6,
    title: "توسعه وب با وردپرس",
    description: "آموزش طراحی سایت با وردپرس به صورت کامل از مبتدی تا پیشرفته",
    image: "/placeholder.svg?height=200&width=400",
    level: "متوسط",
    duration: "۳ ماه",
    students: "۱۵۶",
    certificate: true,
    category: "web",
    price: "۴,۵۰۰,۰۰۰",
    slug: "wordpress-development",
  },
  {
    id: 7,
    title: "برنامه‌نویسی پایتون",
    description: "آموزش زبان برنامه‌نویسی پایتون از مبتدی تا پیشرفته",
    image: "/placeholder.svg?height=200&width=400",
    level: "مبتدی تا پیشرفته",
    duration: "۴ ماه",
    students: "۱۸۰",
    certificate: true,
    category: "programming",
    price: "۵,۸۰۰,۰۰۰",
    slug: "python-programming",
  },
  {
    id: 8,
    title: "جاوا اسکریپت و فریم‌ورک React",
    description: "آموزش جاوا اسکریپت و فریم‌ورک React برای توسعه وب",
    image: "/placeholder.svg?height=200&width=400",
    level: "متوسط تا پیشرفته",
    duration: "۴ ماه",
    students: "۱۳۵",
    certificate: true,
    category: "programming",
    price: "۶,۵۰۰,۰۰۰",
    slug: "javascript-react",
  },
  {
    id: 9,
    title: "یادگیری ماشین با پایتون",
    description: "آموزش یادگیری ماشین با پایتون و کتابخانه‌های Scikit-learn و TensorFlow",
    image: "/placeholder.svg?height=200&width=400",
    level: "پیشرفته",
    duration: "۳ ماه",
    students: "۹۰",
    certificate: true,
    category: "data-science",
    price: "۷,۲۰۰,۰۰۰",
    slug: "machine-learning-python",
  },
  {
    id: 10,
    title: "هوش مصنوعی و یادگیری عمیق",
    description: "آموزش هوش مصنوعی و یادگیری عمیق با پایتون و کتابخانه‌های TensorFlow و PyTorch",
    image: "/placeholder.svg?height=200&width=400",
    level: "پیشرفته",
    duration: "۴ ماه",
    students: "۸۵",
    certificate: true,
    category: "data-science",
    price: "۸,۵۰۰,۰۰۰",
    slug: "ai-deep-learning",
  },
]

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [showFilters, setShowFilters] = useState(false)
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])

  const toggleLevel = (level: string) => {
    if (selectedLevels.includes(level)) {
      setSelectedLevels(selectedLevels.filter((l) => l !== level))
    } else {
      setSelectedLevels([...selectedLevels, level])
    }
  }

  const filteredCourses = courses.filter((course) => {
    // Filter by category
    if (activeCategory !== "all" && course.category !== activeCategory) {
      return false
    }

    // Filter by search query
    if (searchQuery && !course.title.includes(searchQuery) && !course.description.includes(searchQuery)) {
      return false
    }

    // Filter by price range
    const coursePrice = Number.parseInt(course.price.replace(/,/g, ""))
    if (coursePrice < priceRange[0] || coursePrice > priceRange[1]) {
      return false
    }

    // Filter by level
    if (selectedLevels.length > 0 && !selectedLevels.includes(course.level)) {
      return false
    }

    return true
  })

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="breadcrumbs">
        <Link href="/" className="breadcrumb-item">
          خانه
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span>دوره‌های آموزشی</span>
      </div>

      <div className="text-center mb-12">
        <h1 className="seo-title">دوره‌های آموزشی</h1>
        <p className="seo-description">دوره‌های تخصصی با مدرک رسمی سازمان فنی و حرفه‌ای برای ورود به بازار کار</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg border p-4 sticky top-24">
            <div className="flex justify-between items-center mb-4 lg:hidden">
              <h2 className="text-lg font-bold">فیلترها</h2>
              <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)}>
                <SlidersHorizontal className="h-5 w-5 ml-1" />
                {showFilters ? "بستن فیلترها" : "نمایش فیلترها"}
              </Button>
            </div>

            <div className={`space-y-6 ${showFilters || "hidden lg:block"}`}>
              <div>
                <h3 className="font-bold mb-3">جستجو</h3>
                <div className="relative">
                  <Input
                    placeholder="جستجو در دوره‌ها..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-3">دسته‌بندی‌ها</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className={`category-pill cursor-pointer ${activeCategory === category.id ? "active" : ""}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-3">سطح دوره</h3>
                <div className="space-y-2">
                  {["مبتدی", "متوسط", "پیشرفته", "مبتدی تا پیشرفته", "متوسط تا پیشرفته"].map((level) => (
                    <div key={level} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`level-${level}`}
                        checked={selectedLevels.includes(level)}
                        onChange={() => toggleLevel(level)}
                        className="ml-2"
                      />
                      <label htmlFor={`level-${level}`}>{level}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-3">محدوده قیمت</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 10000000]}
                    max={10000000}
                    step={500000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2 text-sm">
                    <span>{priceRange[0].toLocaleString()} تومان</span>
                    <span>{priceRange[1].toLocaleString()} تومان</span>
                  </div>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={() => {
                  setActiveCategory("all")
                  setSearchQuery("")
                  setPriceRange([0, 10000000])
                  setSelectedLevels([])
                }}
              >
                پاک کردن فیلترها
              </Button>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <div className="text-muted-foreground">
              نمایش {filteredCourses.length} دوره از {courses.length} دوره
            </div>
            <div className="flex items-center">
              <Filter className="h-5 w-5 ml-2 text-muted-foreground" />
              <select className="bg-transparent border-none focus:outline-none text-muted-foreground">
                <option>مرتب‌سازی بر اساس جدیدترین</option>
                <option>مرتب‌سازی بر اساس محبوب‌ترین</option>
                <option>مرتب‌سازی بر اساس قیمت (کم به زیاد)</option>
                <option>مرتب‌سازی بر اساس قیمت (زیاد به کم)</option>
              </select>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48 w-full">
                    <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{course.title}</CardTitle>
                      <Badge>{course.level}</Badge>
                    </div>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 ml-1" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 ml-1" />
                          <span>{course.students} دانشجو</span>
                        </div>
                      </div>
                      {course.certificate && (
                        <Badge variant="outline" className="border-green-500 text-green-600 w-fit">
                          دارای مدرک رسمی
                        </Badge>
                      )}
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-lg font-bold">{course.price} تومان</span>
                        <Link href={`/courses/${course.slug}`}>
                          <Button size="sm">مشاهده دوره</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-500">هیچ دوره‌ای با فیلترهای انتخاب شده یافت نشد.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setActiveCategory("all")
                  setSearchQuery("")
                  setPriceRange([0, 10000000])
                  setSelectedLevels([])
                }}
              >
                پاک کردن فیلترها
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
