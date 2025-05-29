import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, ArrowRight, Quote } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-emerald-600 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Voices, <br />
              <span className="text-amber-300">Changing Lives</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              We Can Voice Trust is dedicated to amplifying unheard voices and creating positive change in communities
              worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-white/20 backdrop-blur-sm"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To provide a platform for marginalized communities, advocate for social justice, and create sustainable
              programs that empower individuals to find and use their voice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Creating strong, supportive communities where every voice matters and collective action drives change.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle>Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fighting for policy changes and social reforms that address systemic inequalities and promote justice.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle>Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Providing tools, resources, and support to help individuals develop confidence and leadership skills.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Featured Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our impactful programs designed to create lasting change in communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <CardHeader>
                <Badge className="w-fit mb-2">Education</Badge>
                <CardTitle>Youth Leadership Academy</CardTitle>
                <CardDescription>
                  Empowering young leaders with skills, knowledge, and confidence to drive positive change in their
                  communities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600"></div>
              <CardHeader>
                <Badge className="w-fit mb-2">Healthcare</Badge>
                <CardTitle>Mental Health Support</CardTitle>
                <CardDescription>
                  Providing accessible mental health resources and support groups for underserved communities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600"></div>
              <CardHeader>
                <Badge className="w-fit mb-2">Economic</Badge>
                <CardTitle>Microfinance Initiative</CardTitle>
                <CardDescription>
                  Supporting small business development and financial literacy in marginalized communities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Voices of Change</h2>
            <p className="text-lg text-gray-600">Hear from those whose lives have been transformed</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <Quote className="h-8 w-8 text-green-600 mb-4" />
                <CardDescription className="text-base italic">
                  "We Can Voice Trust gave me the confidence to start my own community garden project. Now we're feeding
                  50 families every month."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-green-600">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Maria Rodriguez</p>
                    <p className="text-sm text-gray-600">Community Leader</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <Quote className="h-8 w-8 text-teal-600 mb-4" />
                <CardDescription className="text-base italic">
                  "The mental health support program helped me through my darkest times. I'm now a peer counselor
                  helping others."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-teal-600">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold">James Davis</p>
                    <p className="text-sm text-gray-600">Program Graduate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <Quote className="h-8 w-8 text-emerald-600 mb-4" />
                <CardDescription className="text-base italic">
                  "Thanks to the microfinance program, I was able to expand my small business and now employ five people
                  from my neighborhood."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-emerald-600">AP</span>
                  </div>
                  <div>
                    <p className="font-semibold">Aisha Patel</p>
                    <p className="text-sm text-gray-600">Entrepreneur</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we can amplify voices, create change, and build a more equitable world for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black">
              <Heart className="mr-2 h-5 w-5" />
              Donate Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 bg-white/20 backdrop-blur-sm">
              Become a Volunteer
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-white/20 backdrop-blur-sm"
              >
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
