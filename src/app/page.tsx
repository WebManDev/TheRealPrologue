import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Star,
  BookOpen,
  Trophy,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 px-4 lg:px-6 h-20 flex items-center backdrop-blur-lg bg-white/80 border-b border-gray-100 shadow-sm">
        <Link className="flex items-center justify-center group" href="#">
          <div className="relative">
            <BookOpen className="h-9 w-9 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-200" />
            <div className="absolute inset-0 bg-indigo-600/20 rounded-full blur-lg group-hover:bg-indigo-700/30 transition-all duration-200 -z-10"></div>
          </div>
          <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Prologue
          </span>
        </Link>
        <nav className="ml-auto flex gap-8">
          <Link
            className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-all duration-200 relative group"
            href="#courses"
          >
            Courses
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-all duration-200 relative group"
            href="#mentors"
          >
            Mentors
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-all duration-200 relative group"
            href="#how-it-works"
          >
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-all duration-200 relative group"
            href="#testimonials"
          >
            Success Stories
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
        <div className="ml-8 flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 font-semibold transition-all duration-200"
          >
            Log In
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Sign Up
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          {/* Background with modern gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-transparent to-purple-600/5"></div>

          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6">
                <Badge className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 border-indigo-200 shadow-sm font-semibold text-sm">
                  🎓 Trusted by 10,000+ Students Worldwide
                </Badge>
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                  Learn from
                  <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
                    {" "}
                    College Athletes
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    & Expert Coaches
                  </span>
                </h1>
                <p className="mx-auto max-w-[750px] text-gray-700 text-xl md:text-2xl leading-relaxed font-medium">
                  Transform your future with personalized courses designed for
                  ambitious high schoolers. Get expert feedback, build
                  confidence, and unlock your potential.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="h-14 px-10 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Start Learning Today
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-10 text-lg font-semibold border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-400 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Browse Courses
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-8 text-base text-gray-600 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="font-medium">Free trial available</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="font-medium">
                    Expert mentorship included
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="font-medium">College prep focused</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="w-full py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <Image
                  src="/placeholder.svg?height=500&width=900"
                  width={900}
                  height={500}
                  alt="Students learning with college athlete mentors"
                  className="relative rounded-2xl border-2 border-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform group-hover:-translate-y-2"
                />
              </div>
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
                <Badge
                  variant="outline"
                  className="border-primary text-primary"
                >
                  How It Works
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Your path to success starts here
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  Get personalized guidance from college athletes and coaches
                  who understand what it takes to succeed.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 lg:grid-cols-3">
              <Card className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mb-2" />
                  <CardTitle className="text-xl">Choose Your Course</CardTitle>
                  <CardDescription className="text-base">
                    Browse courses in academics, athletics, leadership, and life
                    skills designed specifically for high schoolers.
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
                    Receive personalized feedback and guidance from college
                    athletes and experienced coaches.
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
                    Build confidence, improve skills, and prepare for college
                    applications and athletic recruitment.
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
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="border-secondary text-secondary"
                >
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
                      <Star
                        key={star}
                        className="h-4 w-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "My mentor helped me improve my SAT score by 200 points and
                    gave me amazing advice for my college applications. I got
                    into my dream school!"
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
                      <p className="text-sm font-medium text-gray-900">
                        Emma Rodriguez
                      </p>
                      <p className="text-xs text-gray-500">
                        Junior, Lincoln High School
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "The athletic training course and feedback from a D1 soccer
                    player completely changed my game. I made varsity this
                    year!"
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
                      <p className="text-sm font-medium text-gray-900">
                        Marcus Johnson
                      </p>
                      <p className="text-xs text-gray-500">
                        Sophomore, Central High School
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "Prologue helped me build confidence in public speaking and
                    leadership. I'm now student body president and feel ready
                    for college!"
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
                      <p className="text-sm font-medium text-gray-900">
                        Aisha Patel
                      </p>
                      <p className="text-xs text-gray-500">
                        Senior, Westfield High School
                      </p>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to start your journey?
                </h2>
                <p className="mx-auto max-w-[600px] text-white/90 text-lg">
                  Join thousands of high schoolers who are already building
                  their future with expert guidance from college athletes and
                  coaches.
                </p>
              </div>
              <div className="w-full max-w-md space-y-4">
                <form className="flex gap-2">
                  <Input
                    className="flex-1 bg-white text-gray-900 border-0"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-sm text-white/80">
                  Start your free trial today. No credit card required.
                </p>
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
        <p className="text-xs text-gray-500 sm:ml-4">
          © 2024 Prologue. Empowering the next generation.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:text-primary transition-colors"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-xs hover:text-primary transition-colors"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:text-primary transition-colors"
            href="#"
          >
            Contact Us
          </Link>
          <Link
            className="text-xs hover:text-primary transition-colors"
            href="#"
          >
            Help Center
          </Link>
        </nav>
      </footer>
    </div>
  );
}
