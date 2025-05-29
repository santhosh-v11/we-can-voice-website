import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Heart, DollarSign, Users, Briefcase, Home, ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs & Services</h1>
            <p className="text-xl md:text-2xl text-green-100">
              Comprehensive programs designed to empower individuals and strengthen communities through education,
              support, and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Programs */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-100 text-green-800">Education</Badge>
                <CardTitle className="text-2xl">Youth Leadership Academy</CardTitle>
                <CardDescription className="text-base">
                  Comprehensive leadership development program for young people aged 16-25, focusing on civic
                  engagement, public speaking, and community organizing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    12-week intensive training program
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mentorship with community leaders
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-world project implementation
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Certificate of completion
                  </div>
                </div>
                <Button className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Mental Health Programs */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <Heart className="h-16 w-16 text-white" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-teal-100 text-teal-800">Healthcare</Badge>
                <CardTitle className="text-2xl">Mental Health Support Network</CardTitle>
                <CardDescription className="text-base">
                  Accessible mental health services including counseling, support groups, and wellness workshops for
                  underserved communities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Free individual counseling sessions
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Weekly support group meetings
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Crisis intervention services
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mental health awareness workshops
                  </div>
                </div>
                <Button className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Economic Empowerment */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <DollarSign className="h-16 w-16 text-white" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-emerald-100 text-emerald-800">Economic</Badge>
                <CardTitle className="text-2xl">Microfinance Initiative</CardTitle>
                <CardDescription className="text-base">
                  Small business loans and financial literacy training to help entrepreneurs start and grow sustainable
                  businesses in their communities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Micro-loans up to $5,000
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Business planning workshops
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Financial literacy training
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ongoing business mentorship
                  </div>
                </div>
                <Button className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Community Building */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-lime-100 text-lime-800">Community</Badge>
                <CardTitle className="text-2xl">Community Organizing Program</CardTitle>
                <CardDescription className="text-base">
                  Training and resources for community members to organize around local issues and advocate for positive
                  change in their neighborhoods.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Community organizing workshops
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advocacy training sessions
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Campaign planning support
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Networking opportunities
                  </div>
                </div>
                <Button className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Job Training */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Briefcase className="h-16 w-16 text-white" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-amber-100 text-amber-800">Employment</Badge>
                <CardTitle className="text-2xl">Skills Development Center</CardTitle>
                <CardDescription className="text-base">
                  Vocational training and job placement services to help individuals develop marketable skills and
                  secure sustainable employment.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Technical skills training
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Resume and interview preparation
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Job placement assistance
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Industry certifications
                  </div>
                </div>
                <Button className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Housing Support */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                <Home className="h-16 w-16 text-white" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-rose-100 text-rose-800">Housing</Badge>
                <CardTitle className="text-2xl">Housing Assistance Program</CardTitle>
                <CardDescription className="text-base">
                  Support for individuals and families facing housing insecurity, including emergency assistance and
                  long-term housing solutions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Emergency housing assistance
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rental assistance programs
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Housing search support
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tenant rights education
                  </div>
                </div>
                <Button className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">How to Apply</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p className="text-gray-600">
                  Reach out to our team to discuss your needs and learn about available programs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                <p className="text-gray-600">
                  Complete an intake assessment to determine the best program fit for your situation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Started</h3>
                <p className="text-gray-600">
                  Begin your journey with personalized support and resources tailored to your goals.
                </p>
              </div>
            </div>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Apply for Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
