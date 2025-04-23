import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-secondary/10 transform -skew-y-6"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/20 rounded-full transform translate-y-1/2 -translate-x-1/4"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full transform -translate-y-1/2 translate-x-1/4"></div>
        </div>
        <div className="py-12 px-6 md:px-12 text-center text-white relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">همین امروز آینده شغلی خود را تضمین کنید</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            با شرکت در دوره‌های تخصصی آموزشگاه هوشمان و دریافت مدرک رسمی فنی و حرفه‌ای، مسیر موفقیت شغلی خود را هموار کنید
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/courses">
              <Button
                size="lg"
                className="text-base px-6 bg-secondary text-white hover:bg-secondary/90 w-full sm:w-auto"
              >
                مشاهده دوره‌ها
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-6 bg-transparent hover:bg-white/10 text-white border-white w-full sm:w-auto"
              >
                مشاوره رایگان
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
