import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="dynamic-bg">
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-lg md:text-xl text-primary inline-flex items-center justify-center">
              <span className="mx-2">آموزش</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span className="mx-2">معرفی</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span className="mx-2">استخدام</span>
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            آموزشگاه تخصصی فنی و حرفه‌ای هوشمان
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10">تحت نظر سازمان فنی و حرفه‌ای کشور</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button size="lg" className="text-base px-8 py-6 w-full sm:w-auto bg-primary hover:bg-primary/90">
                مشاهده دوره‌ها
              </Button>
            </Link>
            <Link href="/certificates">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 w-full sm:w-auto border-secondary text-secondary hover:bg-secondary/10"
              >
                استعلام گواهینامه
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
