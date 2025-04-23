import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Clock, Award, Users, Star, ArrowRight } from "lucide-react"

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
    featured: true,
    rating: 4.8,
  },
  {
    id: 2,
    title: "فتوشاپ پیشرفته",
    description: "آموزش حرفه‌ای فتوشاپ از صفر تا صد برای طراحی گرافیک و ویرایش تصاویر",
    image: "/placeholder.svg?height=200&width=400",
    level: "متوسط",
    duration: "۲ ماه",
    students: "۹۸",
    certificate: true,
    category: "design",
    price: "۳,۲۰۰,۰۰۰",
    slug: "advanced-photoshop",
    featured: false,
    rating: 4.6,
  },
  {
    id: 3,
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
    featured: true,
    rating: 4.9,
  },
  {
    id: 4,
    title: "پایتون و هوش مصنوعی",
    description: "آموزش پایتون از مبتدی تا پیشرفته همراه با یادگیری ماشین و هوش مصنوعی",
    image: "/placeholder.svg?height=200&width=400",
    level: "پیشرفته",
    duration: "۶ ماه",
    students: "۸۵",
    certificate: true,
    category: "data-science",
    price: "۸,۵۰۰,۰۰۰",
    slug: "python-ai",
    featured: false,
    rating: 4.7,
  },
]

export default function FeaturedCourses() {
  return (
    <section className="featured-courses-section py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full transform translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-secondary/20 rounded-full"></div>
            <h2 className="seo-title relative z-10">دوره‌های ویژه</h2>
            <p className="seo-description relative z-10">
              دوره‌های تخصصی با مدرک رسمی سازمان فنی و حرفه‌ای برای ورود به بازار کار
            </p>
            <div className="h-1 w-20 bg-secondary mt-4 rounded-full"></div>
          </div>
          <Link href="/courses" className="mt-6 md:mt-0 group flex items-center">
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 group-hover:pr-6"
            >
              مشاهده همه دوره‌ها
              <ArrowRight className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="course-card-modern group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-0 shadow-lg"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                <div className="absolute top-4 right-4 z-10">
                  <Badge
                    className={`${course.featured ? "bg-secondary text-white" : "bg-white text-primary"} hover:bg-white shadow-md`}
                  >
                    {course.level}
                  </Badge>
                </div>
                {course.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-secondary text-white shadow-md">پیشنهاد ویژه</Badge>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex items-center">
                  <div className="flex items-center bg-white/90 px-2 py-1 rounded-md">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold mr-1">{course.rating}</span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-2 relative">
                <div className="absolute -top-10 right-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                  {course.category === "icdl" && (
                    <Image src="/placeholder.svg?height=24&width=24" alt="ICDL" width={24} height={24} />
                  )}
                  {course.category === "design" && (
                    <Image src="/placeholder.svg?height=24&width=24" alt="Design" width={24} height={24} />
                  )}
                  {course.category === "web" && (
                    <Image src="/placeholder.svg?height=24&width=24" alt="Web" width={24} height={24} />
                  )}
                  {course.category === "data-science" && (
                    <Image src="/placeholder.svg?height=24&width=24" alt="Data Science" width={24} height={24} />
                  )}
                </div>
                <CardTitle className="text-lg line-clamp-1">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2 h-12">{course.description}</CardDescription>
              </CardHeader>

              <CardContent className="pb-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 ml-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 ml-1" />
                    <span>{course.students} دانشجو</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-2 flex justify-between items-center">
                {course.certificate && (
                  <div className="flex items-center text-xs text-green-600">
                    <Award className="h-4 w-4 ml-1" />
                    <span>مدرک رسمی</span>
                  </div>
                )}
                <div className="text-secondary font-bold">{course.price} تومان</div>
              </CardFooter>

              <div className="px-4 pb-4">
                <Link href={`/courses/${course.slug}`}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 group-hover:bg-secondary">
                    مشاهده دوره
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
