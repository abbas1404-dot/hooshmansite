import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import {
  Clock,
  Users,
  Award,
  BookOpen,
  CheckCircle,
  PlayCircle,
  FileText,
  Download,
  Share2,
  ShoppingCart,
} from "lucide-react"

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  // This would normally fetch data based on the slug
  const course = {
    id: 1,
    title: "پایتون و هوش مصنوعی",
    description: "آموزش پایتون از مبتدی تا پیشرفته همراه با یادگیری ماشین و هوش مصنوعی",
    longDescription:
      "در این دوره جامع، شما از مفاهیم پایه پایتون شروع کرده و به تدریج با مباحث پیشرفته آشنا می‌شوید. سپس وارد دنیای هوش مصنوعی و یادگیری ماشین شده و با کتابخانه‌های مهم مانند NumPy، Pandas، Matplotlib، Scikit-learn و TensorFlow کار خواهید کرد. در پایان دوره، قادر خواهید بود پروژه‌های واقعی هوش مصنوعی را پیاده‌سازی کنید.",
    image: "/placeholder.svg?height=400&width=800",
    level: "مبتدی تا پیشرفته",
    duration: "۶ ماه",
    students: "۸۵",
    certificate: true,
    category: "data-science",
    price: "۸,۵۰۰,۰۰۰",
    instructor: {
      name: "دکتر علی محمدی",
      title: "متخصص هوش مصنوعی و علوم داده",
      bio: "دکترای هوش مصنوعی از دانشگاه تهران با بیش از ۱۰ سال سابقه تدریس و فعالیت در پروژه‌های صنعتی",
      image: "/placeholder.svg?height=100&width=100",
    },
    curriculum: [
      {
        title: "بخش اول: مقدمات پایتون",
        lessons: [
          { title: "معرفی دوره و نصب پایتون", duration: "۴۵ دقیقه", type: "video" },
          { title: "متغیرها و انواع داده", duration: "۶۰ دقیقه", type: "video" },
          { title: "ساختارهای کنترلی", duration: "۷۵ دقیقه", type: "video" },
          { title: "توابع و ماژول‌ها", duration: "۹۰ دقیقه", type: "video" },
          { title: "تمرین عملی بخش اول", duration: "۱۲۰ دقیقه", type: "exercise" },
        ],
      },
      {
        title: "بخش دوم: پایتون پیشرفته",
        lessons: [
          { title: "کار با فایل‌ها", duration: "۶۰ دقیقه", type: "video" },
          { title: "برنامه‌نویسی شی‌گرا", duration: "۱۲۰ دقیقه", type: "video" },
          { title: "مدیریت خطاها", duration: "۴۵ دقیقه", type: "video" },
          { title: "کار با کتابخانه‌های استاندارد", duration: "۹۰ دقیقه", type: "video" },
          { title: "پروژه میانی", duration: "۱۸۰ دقیقه", type: "project" },
        ],
      },
      {
        title: "بخش سوم: مقدمات علوم داده و هوش مصنوعی",
        lessons: [
          { title: "معرفی NumPy و Pandas", duration: "۹۰ دقیقه", type: "video" },
          { title: "تحلیل و پیش‌پردازش داده", duration: "۱۲۰ دقیقه", type: "video" },
          { title: "مصورسازی داده با Matplotlib", duration: "۷۵ دقیقه", type: "video" },
          { title: "مفاهیم پایه یادگیری ماشین", duration: "۱۰۵ دقیقه", type: "video" },
          { title: "تمرین عملی بخش سوم", duration: "۱۵۰ دقیقه", type: "exercise" },
        ],
      },
      {
        title: "بخش چهارم: یادگیری ماشین با Scikit-learn",
        lessons: [
          { title: "الگوریتم‌های طبقه‌بندی", duration: "۱۲۰ دقیقه", type: "video" },
          { title: "الگوریتم‌های رگرسیون", duration: "۹۰ دقیقه", type: "video" },
          { title: "خوشه‌بندی و کاهش ابعاد", duration: "۱۰۵ دقیقه", type: "video" },
          { title: "ارزیابی مدل‌ها", duration: "۷۵ دقیقه", type: "video" },
          { title: "پروژه یادگیری ماشین", duration: "۲۱۰ دقیقه", type: "project" },
        ],
      },
      {
        title: "بخش پنجم: یادگیری عمیق با TensorFlow",
        lessons: [
          { title: "مقدمه‌ای بر شبکه‌های عصبی", duration: "۹۰ دقیقه", type: "video" },
          { title: "شبکه‌های عصبی کانولوشنی", duration: "۱۲۰ دقیقه", type: "video" },
          { title: "شبکه‌های عصبی بازگشتی", duration: "۱۰۵ دقیقه", type: "video" },
          { title: "پردازش زبان طبیعی", duration: "۱۳۵ دقیقه", type: "video" },
          { title: "پروژه نهایی", duration: "۲۴۰ دقیقه", type: "project" },
        ],
      },
    ],
    features: [
      "دسترسی مادام‌العمر به محتوای دوره",
      "پشتیبانی آنلاین و پاسخگویی به سوالات",
      "تمرین‌ها و پروژه‌های عملی",
      "گواهینامه رسمی فنی و حرفه‌ای",
      "معرفی به بازار کار برای دانشجویان برتر",
      "دسترسی به منابع و کدهای آموزشی",
    ],
    prerequisites: [
      "آشنایی مقدماتی با مفاهیم برنامه‌نویسی",
      "آشنایی با مفاهیم پایه ریاضی و آمار",
      "داشتن کامپیوتر با حداقل ۸ گیگابایت رم",
    ],
    reviews: [
      {
        id: 1,
        name: "محمد رضایی",
        rating: 5,
        date: "۱۴۰۲/۰۲/۱۵",
        comment: "دوره بسیار کاملی بود و من توانستم بعد از گذراندن آن در یک شرکت دانش‌بنیان استخدام شوم.",
      },
      {
        id: 2,
        name: "سارا احمدی",
        rating: 4,
        date: "۱۴۰۲/۰۱/۲۰",
        comment: "محتوای دوره عالی بود، فقط کاش تمرین‌های بیشتری داشت.",
      },
      {
        id: 3,
        name: "علی محمودی",
        rating: 5,
        date: "۱۴۰۱/۱۲/۱۰",
        comment: "استاد دوره بسیار با حوصله تمام مطالب را توضیح می‌دادند و پشتیبانی عالی بود.",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="breadcrumbs">
        <Link href="/" className="breadcrumb-item">
          خانه
        </Link>
        <span className="breadcrumb-separator">/</span>
        <Link href="/courses" className="breadcrumb-item">
          دوره‌ها
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span>{course.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2">
          <div className="course-details-card mb-8">
            <div className="relative h-[300px] md:h-[400px] w-full">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <PlayCircle className="ml-2 h-5 w-5" /> پخش ویدیو معرفی دوره
                </Button>
              </div>
            </div>
            <div className="course-details-header">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">{course.title}</h1>
                  <p className="text-muted-foreground">{course.description}</p>
                </div>
                <Badge className="bg-primary hover:bg-primary/90 text-white">{course.level}</Badge>
              </div>
            </div>
            <div className="course-details-content">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">معرفی دوره</TabsTrigger>
                  <TabsTrigger value="curriculum">سرفصل‌ها</TabsTrigger>
                  <TabsTrigger value="instructor">مدرس</TabsTrigger>
                  <TabsTrigger value="reviews">نظرات</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-4">درباره دوره</h2>
                    <p className="text-muted-foreground leading-relaxed">{course.longDescription}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">ویژگی‌های دوره</h2>
                    <ul className="space-y-2">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">پیش‌نیازها</h2>
                    <ul className="space-y-2">
                      {course.prerequisites.map((prerequisite, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary ml-2 flex-shrink-0" />
                          <span>{prerequisite}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="curriculum" className="space-y-6">
                  <h2 className="text-xl font-bold mb-4">سرفصل‌های دوره</h2>
                  <div className="space-y-4">
                    {course.curriculum.map((section, sectionIndex) => (
                      <Card key={sectionIndex}>
                        <CardContent className="p-0">
                          <div className="p-4 bg-muted font-bold">{section.title}</div>
                          <div>
                            {section.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="course-curriculum-item">
                                <div className="course-curriculum-item-title">
                                  <div className="course-curriculum-item-icon">
                                    {lesson.type === "video" && <PlayCircle className="h-4 w-4" />}
                                    {lesson.type === "exercise" && <FileText className="h-4 w-4" />}
                                    {lesson.type === "project" && <BookOpen className="h-4 w-4" />}
                                  </div>
                                  <span>{lesson.title}</span>
                                </div>
                                <span className="course-curriculum-item-duration">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="instructor">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <Image
                        src={course.instructor.image || "/placeholder.svg"}
                        alt={course.instructor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2">{course.instructor.name}</h2>
                      <p className="text-primary mb-4">{course.instructor.title}</p>
                      <p className="text-muted-foreground">{course.instructor.bio}</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">نظرات دانشجویان</h2>
                    <Button>ثبت نظر</Button>
                  </div>

                  <div className="space-y-4">
                    {course.reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold">{review.name}</h3>
                            <div className="flex">
                              {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                  <span key={i} className={`text-${i < review.rating ? "yellow-400" : "gray-300"}`}>
                                    ★
                                  </span>
                                ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{review.date}</p>
                          <p>{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        <div>
          <div className="course-details-sidebar sticky top-24">
            <div className="text-3xl font-bold mb-4">{course.price} تومان</div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-muted-foreground ml-2" />
                <span>مدت دوره: {course.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-muted-foreground ml-2" />
                <span>{course.students} دانشجو</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-muted-foreground ml-2" />
                <span>{course.curriculum.reduce((acc, section) => acc + section.lessons.length, 0)} جلسه</span>
              </div>
              {course.certificate && (
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-600 ml-2" />
                  <span className="text-green-600">دارای مدرک رسمی فنی و حرفه‌ای</span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                <ShoppingCart className="ml-2 h-5 w-5" /> افزودن به سبد خرید
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="ml-2 h-5 w-5" /> دانلود سرفصل دوره
              </Button>
              <Button variant="ghost" className="w-full">
                <Share2 className="ml-2 h-5 w-5" /> اشتراک‌گذاری
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
