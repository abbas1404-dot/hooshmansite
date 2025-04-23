import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { FileText, BookOpen, Wrench, FileCode, HelpCircle, ExternalLink } from "lucide-react"

const resourceCategories = [
  {
    id: "tutorials",
    title: "آموزش‌های رایگان",
    description: "مجموعه‌ای از آموزش‌های رایگان در حوزه‌های مختلف فناوری اطلاعات",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    image: "/diverse-learning-online.png",
    items: [
      { title: "آموزش مقدماتی HTML و CSS", link: "/resources/tutorials/html-css-basics" },
      { title: "آشنایی با پایتون", link: "/resources/tutorials/python-intro" },
      { title: "اصول طراحی UI/UX", link: "/resources/tutorials/ui-ux-principles" },
      { title: "مفاهیم پایه دیجیتال مارکتینگ", link: "/resources/tutorials/digital-marketing-basics" },
      { title: "آشنایی با اکسل", link: "/resources/tutorials/excel-basics" },
    ],
  },
  {
    id: "tools",
    title: "ابزارهای کاربردی",
    description: "معرفی ابزارهای مفید و کاربردی برای توسعه‌دهندگان و طراحان",
    icon: <Wrench className="h-10 w-10 text-primary" />,
    image: "/software-development-workspace.png",
    items: [
      { title: "ابزارهای طراحی وب", link: "/resources/tools/web-design" },
      { title: "ابزارهای برنامه‌نویسی", link: "/resources/tools/programming" },
      { title: "ابزارهای طراحی گرافیک", link: "/resources/tools/graphic-design" },
      { title: "ابزارهای تحلیل داده", link: "/resources/tools/data-analysis" },
      { title: "ابزارهای دیجیتال مارکتینگ", link: "/resources/tools/digital-marketing" },
    ],
  },
  {
    id: "ebooks",
    title: "کتاب‌های الکترونیکی",
    description: "مجموعه‌ای از کتاب‌های الکترونیکی رایگان در حوزه‌های مختلف فناوری اطلاعات",
    icon: <FileText className="h-10 w-10 text-primary" />,
    image: "/digital-library.png",
    items: [
      { title: "راهنمای جامع HTML5", link: "/resources/ebooks/html5-guide" },
      { title: "آموزش جامع پایتون", link: "/resources/ebooks/python-complete-guide" },
      { title: "اصول طراحی وب ریسپانسیو", link: "/resources/ebooks/responsive-web-design" },
      { title: "مبانی هوش مصنوعی", link: "/resources/ebooks/ai-fundamentals" },
      { title: "راهنمای سئو برای مبتدیان", link: "/resources/ebooks/seo-beginners-guide" },
    ],
  },
  {
    id: "templates",
    title: "قالب‌ها و نمونه‌کارها",
    description: "مجموعه‌ای از قالب‌ها و نمونه‌کارهای آماده برای استفاده در پروژه‌های مختلف",
    icon: <FileCode className="h-10 w-10 text-primary" />,
    image: "/abstract-code-flow.png",
    items: [
      { title: "قالب‌های HTML/CSS", link: "/resources/templates/html-css" },
      { title: "قالب‌های رزومه", link: "/resources/templates/resume" },
      { title: "نمونه پروژه‌های جاوااسکریپت", link: "/resources/templates/javascript-projects" },
      { title: "قالب‌های پاورپوینت", link: "/resources/templates/powerpoint" },
      { title: "نمونه پروژه‌های پایتون", link: "/resources/templates/python-projects" },
    ],
  },
  {
    id: "faq",
    title: "سوالات متداول",
    description: "پاسخ به سوالات متداول در حوزه‌های مختلف فناوری اطلاعات و برنامه‌نویسی",
    icon: <HelpCircle className="h-10 w-10 text-primary" />,
    image: "/frequently-asked-questions.png",
    items: [
      { title: "سوالات متداول برنامه‌نویسی", link: "/resources/faq/programming" },
      { title: "سوالات متداول طراحی وب", link: "/resources/faq/web-design" },
      { title: "سوالات متداول هوش مصنوعی", link: "/resources/faq/ai" },
      { title: "سوالات متداول دیجیتال مارکتینگ", link: "/resources/faq/digital-marketing" },
      { title: "سوالات متداول آفیس", link: "/resources/faq/office" },
    ],
  },
]

const externalResources = [
  {
    title: "W3Schools",
    description: "آموزش‌های رایگان HTML، CSS، JavaScript و بسیاری از زبان‌های برنامه‌نویسی دیگر",
    link: "https://www.w3schools.com/",
    icon: "/placeholder.svg?height=40&width=40&query=w3schools logo",
  },
  {
    title: "MDN Web Docs",
    description: "مستندات جامع برای توسعه‌دهندگان وب از موزیلا",
    link: "https://developer.mozilla.org/",
    icon: "/placeholder.svg?height=40&width=40&query=mdn logo",
  },
  {
    title: "GitHub",
    description: "پلتفرم میزبانی کد و همکاری برای توسعه‌دهندگان",
    link: "https://github.com/",
    icon: "/placeholder.svg?height=40&width=40&query=github logo",
  },
  {
    title: "Stack Overflow",
    description: "بزرگترین جامعه آنلاین برنامه‌نویسان برای پرسش و پاسخ",
    link: "https://stackoverflow.com/",
    icon: "/placeholder.svg?height=40&width=40&query=stackoverflow logo",
  },
  {
    title: "Codecademy",
    description: "پلتفرم آموزش تعاملی برنامه‌نویسی",
    link: "https://www.codecademy.com/",
    icon: "/placeholder.svg?height=40&width=40&query=codecademy logo",
  },
  {
    title: "FreeCodeCamp",
    description: "آموزش رایگان برنامه‌نویسی با پروژه‌های عملی",
    link: "https://www.freecodecamp.org/",
    icon: "/placeholder.svg?height=40&width=40&query=freecodecamp logo",
  },
]

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">لینک‌های مفید</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          مجموعه‌ای از منابع آموزشی، ابزارها، کتاب‌های الکترونیکی و قالب‌های آماده برای کمک به یادگیری و توسعه مهارت‌های شما
        </p>
        <div className="h-1 w-20 bg-primary mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {resourceCategories.map((category) => (
          <Card key={category.id} className="overflow-hidden transition-all hover:shadow-lg border-0 shadow-md">
            <div className="relative h-48 w-full">
              <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-white rounded-full p-2 shadow-md">{category.icon}</div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.items.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} className="text-primary hover:underline flex items-center">
                      <span className="ml-2">•</span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={`/resources/${category.id}`} className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90">مشاهده همه</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">منابع خارجی مفید</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {externalResources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <Image
                  src={resource.icon || "/placeholder.svg"}
                  alt={resource.title}
                  width={40}
                  height={40}
                  className="rounded"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold mb-1 flex items-center">
                  {resource.title}
                  <ExternalLink className="h-3 w-3 mr-1 text-gray-400" />
                </h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">پیشنهاد منبع جدید</h2>
        <p className="text-gray-600 mb-6">
          اگر منبع مفیدی می‌شناسید که در این لیست نیست، لطفاً آن را با ما به اشتراک بگذارید.
        </p>
        <Link href="/contact">
          <Button className="bg-primary hover:bg-primary/90">ارسال پیشنهاد</Button>
        </Link>
      </div>
    </div>
  )
}
