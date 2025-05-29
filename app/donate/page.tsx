"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Heart, CreditCard, Shield, Users, GraduationCap, DollarSign } from "lucide-react"

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [customAmount, setCustomAmount] = useState("")

  const predefinedAmounts = ["25", "50", "100", "250", "500", "1000"]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Your donation helps us amplify voices, empower communities, and create lasting change. Every contribution,
              no matter the size, makes a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">$2.1M+</div>
                <div className="text-sm text-green-100">Raised This Year</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">5,000+</div>
                <div className="text-sm text-green-100">Lives Impacted</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-green-100">Goes to Programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <Card className="lg:sticky lg:top-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="mr-2 h-6 w-6 text-red-500" />
                  Make Your Donation
                </CardTitle>
                <CardDescription>Choose your donation amount and frequency to support our mission.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Donation Type */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Donation Type</Label>
                  <RadioGroup value={donationType} onValueChange={setDonationType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time">One-time donation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Monthly donation</Label>
                      <Badge variant="secondary" className="ml-2">
                        More Impact
                      </Badge>
                    </div>
                  </RadioGroup>
                </div>

                {/* Amount Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Select Amount</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={donationAmount === amount ? "default" : "outline"}
                        onClick={() => {
                          setDonationAmount(amount)
                          setCustomAmount("")
                        }}
                        className="h-12"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom-amount">Custom Amount</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value)
                          setDonationAmount("")
                        }}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Impact Message */}
                {(donationAmount || customAmount) && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Your Impact</h4>
                    <p className="text-sm text-green-800">
                      ${donationAmount || customAmount} can provide:
                      {Number.parseInt(donationAmount || customAmount || "0") >= 100 && (
                        <span className="block">• Mental health counseling for 2 individuals</span>
                      )}
                      {Number.parseInt(donationAmount || customAmount || "0") >= 50 && (
                        <span className="block">• Educational materials for 5 students</span>
                      )}
                      <span className="block">• Community workshop supplies for 1 week</span>
                    </p>
                  </div>
                )}

                {/* Payment Method */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Payment Method</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-12 justify-start">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Credit Card
                    </Button>
                    <Button variant="outline" className="h-12 justify-start">
                      <Shield className="mr-2 h-4 w-4" />
                      PayPal
                    </Button>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="cover-fees" />
                    <Label htmlFor="cover-fees" className="text-sm">
                      Cover processing fees (adds 3.5%)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="anonymous" />
                    <Label htmlFor="anonymous" className="text-sm">
                      Make this donation anonymous
                    </Label>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                  disabled={!donationAmount && !customAmount}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate ${donationAmount || customAmount || "0"}
                  {donationType === "monthly" && "/month"}
                </Button>

                <p className="text-xs text-gray-600 text-center">
                  Your donation is secure and tax-deductible. You will receive a receipt via email.
                </p>
              </CardContent>
            </Card>

            {/* Impact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Where Your Money Goes</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <GraduationCap className="h-8 w-8 text-green-600 mr-3" />
                      <span className="font-semibold">Education Programs</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">40%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg">
                    <div className="flex items-center">
                      <Heart className="h-8 w-8 text-teal-600 mr-3" />
                      <span className="font-semibold">Mental Health Support</span>
                    </div>
                    <span className="text-2xl font-bold text-teal-600">25%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                    <div className="flex items-center">
                      <DollarSign className="h-8 w-8 text-emerald-600 mr-3" />
                      <span className="font-semibold">Economic Empowerment</span>
                    </div>
                    <span className="text-2xl font-bold text-emerald-600">20%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-lime-50 rounded-lg">
                    <div className="flex items-center">
                      <Users className="h-8 w-8 text-lime-600 mr-3" />
                      <span className="font-semibold">Community Building</span>
                    </div>
                    <span className="text-2xl font-bold text-lime-600">10%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Shield className="h-8 w-8 text-gray-600 mr-3" />
                      <span className="font-semibold">Administrative Costs</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-600">5%</span>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Other Ways to Give</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Corporate Partnerships</h4>
                    <p className="text-sm text-gray-600">
                      Partner with us for employee giving programs, matching gifts, and corporate social responsibility
                      initiatives.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">Planned Giving</h4>
                    <p className="text-sm text-gray-600">
                      Include We Can Voice Trust in your will or estate planning to create a lasting legacy.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold">Stock Donations</h4>
                    <p className="text-sm text-gray-600">
                      Donate appreciated securities and potentially receive greater tax benefits.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Volunteer Your Time</h4>
                    <p className="text-sm text-gray-600">
                      Can't donate money? Your time and skills are equally valuable to our mission.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Donor Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Voice Supporter</span>
                      <Badge variant="outline">$1 - $99</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Voice Advocate</span>
                      <Badge variant="outline">$100 - $499</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Voice Champion</span>
                      <Badge variant="outline">$500 - $999</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Voice Leader</span>
                      <Badge variant="outline">$1,000+</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    All donors receive quarterly impact reports and invitations to special events.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">What Our Donors Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "Knowing that my monthly donation directly supports youth leadership programs gives me such joy. I've
                  seen the impact firsthand in my community."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-green-600">LM</span>
                  </div>
                  <div>
                    <p className="font-semibold">Lisa Martinez</p>
                    <p className="text-sm text-gray-600">Monthly Donor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "We Can Voice Trust's transparency and impact reporting convinced me to make them a major part of our
                  family's charitable giving."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-teal-600">DW</span>
                  </div>
                  <div>
                    <p className="font-semibold">David Wilson</p>
                    <p className="text-sm text-gray-600">Major Donor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "Even small donations make a difference here. I love getting updates about how my $25/month is helping
                  real people in real ways."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-emerald-600">SC</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-gray-600">Regular Supporter</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
