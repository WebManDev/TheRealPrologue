import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, BookOpen, Trophy, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 bg-white">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="ml-2 text-xl font-bold text-primary">Prologue</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#courses">
            Courses
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#mentors">
            Mentors
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#testimonials">
            Success Stories
          </Link>
        </nav>
        <div className="ml-6 flex gap-2">
          <Button variant="outline" size="sm">
            Log In
          </Button>
          <Button size="sm" className="bg-secondary hover:bg-secondary/90">
            Sign Up
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <Badge variant="secondary" className="mb-4 bg-secondary text-white">
                  🎓 Trusted by 10,000+ Students
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Learn from
                  <span className="text-primary"> College Athletes</span>
                  <br />
                  <span className="text-secondary">& Expert Coaches</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 text-lg md:text-xl">
                  Take courses designed for high schoolers and get personalized feedback from college athletes and
                  coaches. Build skills, gain confidence, and prepare for your future.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 border-primary text-primary hover:bg-primary/5"
                >
                  Browse Courses
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Free trial available
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Expert mentorship included
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  College prep focused
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <Image
                src="/placeholder.svg?height=500&width=900"
                width={900}
                height={500}
                alt="Students learning with college athlete mentors"
                className="rounded-xl border shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-gray-600">Students Enrolled</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-gray-600">College Mentors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600">Course Topics</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-primary text-primary">
                  How It Works
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Your path to success starts here
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  Get personalized guidance from college athletes and coaches who understand what it takes to succeed.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 lg:grid-cols-3">
              <Card className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mb-2" />
                  <CardTitle className="text-xl">Choose Your Course</CardTitle>
                  <CardDescription className="text-base">
                    Browse courses in academics, athletics, leadership, and life skills designed specifically for high
                    schoolers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Academic subjects & test prep
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Athletic training & nutrition
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Leadership & communication
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-secondary/20 transition-colors">
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-secondary mb-2" />
                  <CardTitle className="text-xl">Get Expert Feedback</CardTitle>
                  <CardDescription className="text-base">
                    Receive personalized feedback and guidance from college athletes and experienced coaches.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      1-on-1 video sessions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Written feedback on assignments
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Goal setting & progress tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <Trophy className="h-12 w-12 text-primary mb-2" />
                  <CardTitle className="text-xl">Achieve Your Goals</CardTitle>
                  <CardDescription className="text-base">
                    Build confidence, improve skills, and prepare for college applications and athletic recruitment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      College application prep
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Athletic recruitment guidance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Scholarship opportunities
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-secondary text-secondary">
                  Success Stories
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  What students are saying
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 lg:grid-cols-3">
              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "My mentor helped me improve my SAT score by 200 points and gave me amazing advice for my college
                    applications. I got into my dream school!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Student avatar"
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Emma Rodriguez</p>
                      <p className="text-xs text-gray-500">Junior, Lincoln High School</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "The athletic training course and feedback from a D1 soccer player completely changed my game. I
                    made varsity this year!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Student avatar"
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Marcus Johnson</p>
                      <p className="text-xs text-gray-500">Sophomore, Central High School</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "Prologue helped me build confidence in public speaking and leadership. I'm now student body
                    president and feel ready for college!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Student avatar"
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Aisha Patel</p>
                      <p className="text-xs text-gray-500">Senior, Westfield High School</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center text-white">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to start your journey?</h2>
                <p className="mx-auto max-w-[600px] text-white/90 text-lg">
                  Join thousands of high schoolers who are already building their future with expert guidance from
                  college athletes and coaches.
                </p>
              </div>
              <div className="w-full max-w-md space-y-4">
                <form className="flex gap-2">
                  <Input
                    className="flex-1 bg-white text-gray-900 border-0"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                    Get Started
                  </Button>
                </form>
                <p className="text-sm text-white/80">Start your free trial today. No credit card required.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 bg-white">
        <div className="flex items-center">
          <BookOpen className="h-5 w-5 text-primary mr-2" />
          <span className="text-sm font-medium text-primary">Prologue</span>
        </div>
        <p className="text-xs text-gray-500 sm:ml-4">© 2024 Prologue. Empowering the next generation.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-primary transition-colors" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:text-primary transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-primary transition-colors" href="#">
            Contact Us
          </Link>
          <Link className="text-xs hover:text-primary transition-colors" href="#">
            Help Center
          </Link>
        </nav>
      </footer>
    </div>
  )
}
