import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Paintbrush, Globe, Code, Database, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "icdl",
    name: "ICDL و آفیس",
    icon: <Monitor className="h-10 w-10 text-primary" />,
    description: "مهارت‌های هفتگانه ICDL، آفیس پیشرفته، اکسل حرفه‌ای و مهارت‌های اداری",
    courses: 12,
    highlight: true,
    bgColor: "bg-blue-50",
    iconBgColor: "bg-blue-100",
  },
  {
    id: "design",
    name: "طراحی گرافیک",
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    description: "فتوشاپ، ایلاستریتور، ایندیزاین، کورل‌دراو و طراحی UI/UX",
    courses: 15,
    highlight: false,
    bgColor: "bg-purple-50",
    iconBgColor: "bg-purple-100",
  },
  {
    id: "web",
    name: "طراحی و توسعه وب",
    icon: <Globe className="h-10 w-10 text-primary" />,
    description: "HTML، CSS، JavaScript، وردپرس، React، Next.js و توسعه Full-Stack",
    courses: 18,
    highlight: true,
    bgColor: "bg-green-50",
    iconBgColor: "bg-green-100",
  },
  {
    id: "programming",
    name: "برنامه‌نویسی",
    icon: <Code className="h-10 w-10 text-primary" />,
    description: "پایتون، جاوا، C#، PHP، موبایل و برنامه‌نویسی پایگاه داده",
    courses: 20,
    highlight: false,
    bgColor: "bg-red-50",
    iconBgColor: "bg-red-100",
  },
  {
    id: "data-science",
    name: "علوم داده و هوش مصنوعی",
    icon: <Database className="h-10 w-10 text-primary" />,
    description: "پایتون پیشرفته، تحلیل داده، یادگیری ماشین و هوش مصنوعی",
    courses: 14,
    highlight: true,
    bgColor: "bg-amber-50",
    iconBgColor: "bg-amber-100",
  },
]

export default function CourseCategories() {
  return (
    <section className="container mx-auto px-4 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="text-center mb-16 relative">
        <div className="inline-block relative">
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-secondary/20 rounded-full"></div>
          <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary/20 rounded-full"></div>
          <h2 className="seo-title relative z-10">دسته‌بندی دوره‌ها</h2>
        </div>
        <p className="seo-description relative z-10">
          دوره‌های تخصصی با مدرک رسمی سازمان فنی و حرفه‌ای در حوزه‌های مختلف فناوری اطلاعات
        </p>
        <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link href={`/courses?category=${category.id}`} key={category.id} className="block group">
            <Card
              className={`h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden border-0 shadow-lg relative ${category.bgColor}`}
            >
              <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-gradient-to-tl from-primary/10 to-secondary/10 transform translate-x-1/2 translate-y-1/2"></div>

              <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                <div
                  className={`w-20 h-20 rounded-full ${category.highlight ? "bg-secondary/20" : category.iconBgColor} flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                <div className={`text-sm ${category.highlight ? "text-secondary" : "text-primary"} font-medium mb-4`}>
                  {category.courses} دوره آموزشی
                </div>
                {category.highlight && (
                  <div className="mb-4 text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">پرطرفدار</div>
                )}
                <Button
                  variant="outline"
                  className={`mt-2 w-full ${category.highlight ? "border-secondary text-secondary hover:bg-secondary" : "border-primary text-primary hover:bg-primary"} hover:text-white transition-all duration-300`}
                >
                  مشاهده دوره‌ها
                  <ChevronRight className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
