import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, BookOpen, Clock } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "دوره جامع سئو: راهکارهایی که برای رشد هر سایتی واقعیه!",
    image: "/placeholder.svg?height=300&width=500",
    rating: 5,
    description:
      "سئو 5 مهارت‌های تخصصی و جذاب این روزهاست که با 5 دوره و 43 کتاب سئو از صفر تا سطح حرفه‌ای یاد میگیری. میتونی پروژه‌های داخلی و خارجی بگیری، اما ماجرا اینه! بعد از پایان دوره به بازار کار معرفیت میکنیم! سریع و وارد بازار کار میشی و اولین پروژه‌هات رو میگیری.",
    price: "۳.۹ میلیون تومان",
    items: ["5 دوره و 3 کتاب", "معرفی به کار"],
    discountPrice: "فقط تا ساعت ۲۴ امشب",
  },
  {
    id: 2,
    title: "دوره جامع ادمینی اینستاگرام: درآمد از خانه با گوشی + معرفی تضمینی به بازار کار",
    image: "/placeholder.svg?height=300&width=500",
    rating: 5,
    description:
      "ادمینی اینستاگرام نه به سرمایه نیاز داره نه به چیز خاصی! فقط به یه گوشی! چطور فقط با یه گوشی به درآمد 10 تا 50 میلیونی (ماهیانه) درآمد ادمینی برسی؟ بعد از آموزش، کارآموزی و معرفی تضمینی به بازار کار میکنیم و این تازه شروع ماجراست!",
    price: "۳.۹۹ میلیون تومان",
    items: ["20 دوره + 1 دوره هدیه", "معرفی به کار"],
    discountPrice: "فقط تا ساعت ۲۴ امشب",
  },
  {
    id: 3,
    title: "آموزش جامع دیجیتال مارکتینگ: 18 دوره برای پولساز شدن در دنیای دیجیتال",
    image: "/placeholder.svg?height=300&width=500",
    rating: 5,
    description:
      "حدود 65+ کسب‌وکار فقط در دو سال اول شکست میخورن! چطور میتونی تو این 35% باقی در کسب‌وکارت موفق باشی؟ با تسلط صوری در 18 دوره این مجموعه خودت رو گسترده کنی! یاد میگیری و بعدش عملی، آماده‌سازی، رشدت میدیم و بعد تازه بعد از خرید دوره به بازارکار معرفیت میکنیم!",
    price: "۶.۹ میلیون تومان",
    items: ["18 دوره + 3 کتاب", "معرفی به کار"],
    discountPrice: "فقط تا ساعت ۲۴ امشب",
  },
]

export default function CoursePackages() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">پکیج‌های آموزش بازاریابی دیجیتال</h1>
        <p className="text-gray-600">هر بسته شامل چندین دوره برای کسب درآمد آنلاین + تخفیف ویژه است</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="relative h-48 w-full">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
            </div>
            <div className="course-card-content">
              <h3 className="course-card-title">{course.title}</h3>
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-4 w-4 star-rating" fill="currentColor" />
                  ))}
              </div>
              <p className="course-card-description line-clamp-3">{course.description}</p>
              <div className="flex justify-between items-center mt-4 mb-4">
                {course.items.map((item, index) => (
                  <div key={index} className="flex items-center text-xs">
                    {index === 0 ? (
                      <BookOpen className="h-4 w-4 ml-1 text-gray-400" />
                    ) : (
                      <Clock className="h-4 w-4 ml-1 text-gray-400" />
                    )}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Button className="text-xs bg-primary hover:bg-primary/90 text-white">معرفی به کار</Button>
                <Button className="text-xs bg-primary hover:bg-primary/90 text-white">{course.items[0]}</Button>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                <span className="text-xs text-gray-400">{course.discountPrice}</span>
                <span className="text-lg font-bold text-white">{course.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
