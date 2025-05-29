import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Heart, Award, Globe, Calendar } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About We Can Voice Trust</h1>
            <p className="text-xl md:text-2xl text-green-100">
              Founded on the belief that every voice matters, we work tirelessly to create platforms for change and
              empower communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                We Can Voice Trust was founded in 2018 by a group of passionate advocates who recognized the urgent need
                to amplify marginalized voices in society. What started as a small community initiative has grown into a
                comprehensive organization serving thousands of individuals across multiple countries.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our journey began when we witnessed firsthand how systemic barriers prevented talented, motivated
                individuals from accessing opportunities and having their voices heard. We knew that with the right
                support, resources, and platform, these individuals could become powerful agents of change in their
                communities.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we continue to expand our reach and impact, always staying true to our core mission of empowering
                voices and creating sustainable, positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Inclusivity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe in creating spaces where everyone feels welcome, valued, and heard, regardless of their
                  background or circumstances.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We operate with transparency, honesty, and accountability in all our actions and decisions, building
                  trust with our communities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle>Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We approach every interaction with empathy and understanding, recognizing the unique challenges and
                  strengths of each individual.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We strive for the highest standards in our programs and services, continuously improving to better
                  serve our communities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-lime-600" />
                </div>
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We focus on creating long-term, sustainable solutions that will continue to benefit communities for
                  generations to come.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We embrace creative approaches and new technologies to solve complex social challenges and maximize
                  our impact.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">SJ</span>
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
                <Badge variant="secondary">Executive Director</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  With over 15 years in nonprofit leadership, Sarah brings extensive experience in community development
                  and social advocacy to guide our mission.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">MK</span>
                </div>
                <CardTitle>Michael Kim</CardTitle>
                <Badge variant="secondary">Program Director</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Michael oversees all our community programs, ensuring they meet the highest standards of effectiveness
                  and cultural sensitivity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">ER</span>
                </div>
                <CardTitle>Elena Rodriguez</CardTitle>
                <Badge variant="secondary">Community Outreach Manager</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Elena builds bridges between our organization and the communities we serve, ensuring our programs are
                  accessible and impactful.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
              <div className="text-lg text-green-100">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25</div>
              <div className="text-lg text-green-100">Countries Reached</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-lg text-green-100">Community Partners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$2M+</div>
              <div className="text-lg text-green-100">Funds Distributed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
