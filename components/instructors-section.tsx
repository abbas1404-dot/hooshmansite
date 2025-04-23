"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"

const instructors = [
  {
    id: 1,
    name: "دکتر علی محمدی",
    title: "متخصص هوش مصنوعی و علوم داده",
    bio: "دکترای هوش مصنوعی از دانشگاه تهران با بیش از ۱۰ سال سابقه تدریس و فعالیت در پروژه‌های صنعتی",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    slug: "ali-mohammadi",
  },
  {
    id: 2,
    name: "مهندس سارا احمدی",
    title: "متخصص طراحی وب و UI/UX",
    bio: "کارشناسی ارشد طراحی وب از دانشگاه شریف با سابقه همکاری با شرکت‌های بین‌المللی و استارتاپ‌های موفق",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    slug: "sara-ahmadi",
  },
  {
    id: 3,
    name: "مهندس رضا کریمی",
    title: "متخصص برنامه‌نویسی و توسعه نرم‌افزار",
    bio: "کارشناسی ارشد مهندسی نرم‌افزار با بیش از ۸ سال سابقه تدریس و توسعه نرم‌افزارهای تجاری و سازمانی",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    slug: "reza-karimi",
  },
  {
    id: 4,
    name: "مهندس مریم حسینی",
    title: "متخصص گرافیک و طراحی دیجیتال",
    bio: "فارغ‌التحصیل طراحی گرافیک با بیش از ۷ سال سابقه تدریس فتوشاپ، ایلاستریتور و طراحی گرافیک",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    slug: "maryam-hosseini",
  },
]

export default function InstructorsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="seo-title">اساتید برجسته</h2>
          <p className="seo-description">اساتید متخصص و با تجربه در حوزه‌های مختلف فناوری اطلاعات</p>
        </div>
        <Link href="/instructors" className="mt-4 md:mt-0">
          <Button variant="outline">مشاهده همه اساتید</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {instructors.map((instructor) => (
          <Card key={instructor.id} className="instructor-card">
            <div className="instructor-card-image">
              <Link href={`/instructors/${instructor.slug}`}>
                <Image
                  src={instructor.image || "/placeholder.svg"}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                />
              </Link>
            </div>
            <div className="instructor-card-content">
              <Link href={`/instructors/${instructor.slug}`}>
                <h3 className="instructor-card-name">{instructor.name}</h3>
              </Link>
              <p className="instructor-card-title">{instructor.title}</p>
              <p className="instructor-card-bio line-clamp-3">{instructor.bio}</p>
              <div className="instructor-card-footer">
                <div className="flex space-x-2 space-x-reverse">
                  <button
                    onClick={() => window.open(instructor.social.linkedin, "_blank")}
                    className="text-gray-500 hover:text-primary"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => window.open(instructor.social.twitter, "_blank")}
                    className="text-gray-500 hover:text-primary"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => window.open(instructor.social.facebook, "_blank")}
                    className="text-gray-500 hover:text-primary"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
