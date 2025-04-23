import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Award, Building } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="stats-card-improved">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="stats-icon-wrapper-improved">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mt-4 mb-2">۵,۰۰۰+</h3>
            <p className="text-muted-foreground">دانشجوی موفق</p>
          </CardContent>
        </Card>

        <Card className="stats-card-improved">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="stats-icon-wrapper-improved">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mt-4 mb-2">۳۵+</h3>
            <p className="text-muted-foreground">استاد متخصص</p>
          </CardContent>
        </Card>

        <Card className="stats-card-improved">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="stats-icon-wrapper-improved">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mt-4 mb-2">۴۵+</h3>
            <p className="text-muted-foreground">دوره تخصصی</p>
          </CardContent>
        </Card>

        <Card className="stats-card-improved">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="stats-icon-wrapper-improved">
              <Building className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mt-4 mb-2">۱۲+</h3>
            <p className="text-muted-foreground">سال سابقه</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
