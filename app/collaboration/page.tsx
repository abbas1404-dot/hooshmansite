import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Users, BookOpen, Briefcase, PenTool, TrendingUp } from "lucide-react"

const collaborationOptions = [
  {
    id: "teaching",
    title: "همکاری در تدریس",
    description: "به تیم مدرسین آموزشگاه هوشمان بپیوندید و تجربیات خود را با علاقه‌مندان به اشتراک بگذارید.",
    icon: <Users className="h-10 w-10 text-primary" />,
    benefits: [
      "همکاری با معتبرترین آموزشگاه تخصصی فنی و حرفه‌ای",
      "درآمد مناسب و پرداخت به موقع",
      "امکان تدریس آنلاین و حضوری",
      "ارتقای رزومه کاری و شبکه‌سازی حرفه‌ای",
    ],
    cta: "ارسال رزومه تدریس",
    link: "/collaboration/teaching",
    image: "/placeholder.svg?key=mu5eq",
  },
  {
    id: "content",
    title: "تولید محتوا",
    description: "در تولید محتوای آموزشی با کیفیت در حوزه‌های مختلف فناوری اطلاعات با ما همکاری کنید.",
    icon: <PenTool className="h-10 w-10 text-primary" />,
    benefits: [
      "تولید محتوای متنی، ویدیویی و گرافیکی",
      "پرداخت به ازای هر محتوای تولیدی",
      "انعطاف‌پذیری در زمان‌بندی",
      "معرفی شما به عنوان تولیدکننده محتوا",
    ],
    cta: "ثبت درخواست همکاری",
    link: "/collaboration/content",
    image: "/digital-content-creation.png",
  },
  {
    id: "marketing",
    title: "همکاری در بازاریابی",
    description: "به تیم بازاریابی و فروش آموزشگاه هوشمان بپیوندید و در رشد و توسعه مجموعه سهیم باشید.",
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    benefits: [
      "کمیسیون جذاب به ازای هر فروش",
      "آموزش رایگان تکنیک‌های بازاریابی دیجیتال",
      "پشتیبانی کامل تیم فروش",
      "امکان همکاری پاره‌وقت و تمام‌وقت",
    ],
    cta: "شروع همکاری",
    link: "/collaboration/marketing",
    image: "/connected-growth.png",
  },
  {
    id: "business",
    title: "همکاری تجاری",
    description: "فرصت‌های همکاری B2B برای سازمان‌ها، شرکت‌ها و مراکز آموزشی جهت ارتقای مهارت‌های کارکنان.",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    benefits: [
      "تخفیف‌های ویژه سازمانی",
      "برگزاری دوره‌های اختصاصی",
      "صدور گواهینامه‌های معتبر برای کارکنان",
      "امکان برگزاری دوره در محل سازمان",
    ],
    cta: "درخواست جلسه مشاوره",
    link: "/collaboration/business",
    image: "/collaborative-strategy-session.png",
  },
  {
    id: "internship",
    title: "فرصت‌های کارآموزی",
    description: "فرصت‌های کارآموزی برای دانشجویان و علاقه‌مندان به کسب تجربه عملی در حوزه‌های مختلف.",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    benefits: [
      "کسب تجربه عملی در محیط حرفه‌ای",
      "آشنایی با فرآیندهای کاری واقعی",
      "امکان استخدام پس از دوره کارآموزی",
      "دریافت گواهی معتبر پایان دوره",
    ],
    cta: "ثبت‌نام کارآموزی",
    link: "/collaboration/internship",
    image: "/diverse-intern-team.png",
  },
]

export default function CollaborationPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">همکاری با آموزشگاه هوشمان</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          فرصت‌های متنوع همکاری با آموزشگاه تخصصی هوشمان برای متخصصان، مدرسان، تولیدکنندگان محتوا و سازمان‌ها
        </p>
        <div className="h-1 w-20 bg-primary mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collaborationOptions.map((option) => (
          <Card key={option.id} className="overflow-hidden transition-all hover:shadow-lg border-0 shadow-md">
            <div className="relative h-48 w-full">
              <Image src={option.image || "/placeholder.svg"} alt={option.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-white rounded-full p-2 shadow-md">{option.icon}</div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{option.title}</CardTitle>
              <CardDescription>{option.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-medium mb-3">مزایای همکاری:</h4>
              <ul className="space-y-2">
                {option.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 ml-2">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={option.link} className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90">{option.cta}</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">آماده همکاری با ما هستید؟</h2>
            <p className="text-gray-600">
              برای کسب اطلاعات بیشتر درباره نحوه همکاری با آموزشگاه هوشمان با ما تماس بگیرید.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 min-w-[150px]">تماس با ما</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 min-w-[150px]">
                درباره آموزشگاه
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
