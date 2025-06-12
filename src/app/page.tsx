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
            <BookOpen className="h-9 w-9 text-blue-900 group-hover:text-blue-800 transition-colors duration-200" />
            <div className="absolute inset-0 bg-blue-900/20 rounded-full blur-lg group-hover:bg-blue-800/30 transition-all duration-200 -z-10"></div>
          </div>
          <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent">
            Prologue
          </span>
        </Link>
        <nav className="ml-auto flex gap-8">
          <Link
            className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition-all duration-200 relative group"
            href="#courses"
          >
            Courses
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition-all duration-200 relative group"
            href="#mentors"
          >
            Mentors
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition-all duration-200 relative group"
            href="#how-it-works"
          >
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition-all duration-200 relative group"
            href="#testimonials"
          >
            Success Stories
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
        <div className="ml-8 flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-gray-300 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-900 font-semibold transition-all duration-200"
          >
            Log In
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-900 to-orange-500 hover:from-blue-800 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
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
        <section className="w-full py-20 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent mb-2">
                  10,000+
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Students Enrolled
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  College Mentors
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Course Topics
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  95%
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="how-it-works"
          className="w-full py-20 md:py-32 lg:py-40 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4">
                <Badge className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 border-indigo-200 font-semibold">
                  How It Works
                </Badge>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  Your path to success
                  <br />
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    starts here
                  </span>
                </h2>
                <p className="max-w-[800px] text-gray-700 text-xl md:text-2xl leading-relaxed font-medium">
                  Get personalized guidance from college athletes and coaches
                  who understand what it takes to succeed.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-indigo-50 to-indigo-100">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5"></div>
                <CardHeader className="relative p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    Choose Your Course
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-700 leading-relaxed">
                    Browse courses in academics, athletics, leadership, and life
                    skills designed specifically for high schoolers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative p-8 pt-0">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        Academic subjects & test prep
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        Athletic training & nutrition
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        Leadership & communication
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-pink-100">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5"></div>
                <CardHeader className="relative p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    Get Expert Feedback
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-700 leading-relaxed">
                    Receive personalized feedback and guidance from college
                    athletes and experienced coaches.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative p-8 pt-0">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        1-on-1 video sessions
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        Written feedback on assignments
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        Goal setting & progress tracking
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-emerald-50 to-teal-100">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5"></div>
                <CardHeader className="relative p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    Achieve Your Goals
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-700 leading-relaxed">
                    Build confidence, improve skills, and prepare for college
                    applications and athletic recruitment.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative p-8 pt-0">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        College application prep
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        Athletic recruitment guidance
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        Scholarship opportunities
                      </span>
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
          className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-gray-100"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4">
                <Badge className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200 font-semibold">
                  Success Stories
                </Badge>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  What students are
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    saying
                  </span>
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                    "My mentor helped me improve my SAT score by 200 points and
                    gave me amazing advice for my college applications. I got
                    into my dream school!"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        width={50}
                        height={50}
                        alt="Student avatar"
                        className="rounded-full border-2 border-indigo-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        Emma Rodriguez
                      </p>
                      <p className="text-gray-600 font-medium">
                        Junior, Lincoln High School
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                    "The athletic training course and feedback from a D1 soccer
                    player completely changed my game. I made varsity this
                    year!"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        width={50}
                        height={50}
                        alt="Student avatar"
                        className="rounded-full border-2 border-purple-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        Marcus Johnson
                      </p>
                      <p className="text-gray-600 font-medium">
                        Sophomore, Central High School
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                    "Prologue helped me build confidence in public speaking and
                    leadership. I'm now student body president and feel ready
                    for college!"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        width={50}
                        height={50}
                        alt="Student avatar"
                        className="rounded-full border-2 border-emerald-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        Aisha Patel
                      </p>
                      <p className="text-gray-600 font-medium">
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
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

          {/* Animated background elements */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center text-white">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Ready to start your
                  <br />
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    journey?
                  </span>
                </h2>
                <p className="mx-auto max-w-[700px] text-white/90 text-xl md:text-2xl leading-relaxed font-medium">
                  Join thousands of high schoolers who are already building
                  their future with expert guidance from college athletes and
                  coaches.
                </p>
              </div>
              <div className="w-full max-w-lg space-y-6">
                <form className="flex flex-col sm:flex-row gap-4">
                  <Input
                    className="flex-1 h-14 px-6 bg-white/95 backdrop-blur-sm text-gray-900 border-0 shadow-lg text-lg placeholder:text-gray-500 focus:bg-white transition-all duration-200"
                    placeholder="Enter your email address"
                    type="email"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="h-14 px-8 bg-white text-indigo-600 hover:bg-gray-100 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Get Started Free
                  </Button>
                </form>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-300" />
                    <span className="font-medium">Free trial available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-300" />
                    <span className="font-medium">No credit card required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container px-4 md:px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center group">
              <div className="relative">
                <BookOpen className="h-8 w-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200" />
                <div className="absolute inset-0 bg-indigo-400/20 rounded-full blur-lg group-hover:bg-indigo-300/30 transition-all duration-200 -z-10"></div>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Prologue
              </span>
            </div>

            <nav className="flex flex-wrap justify-center gap-8">
              <Link
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
                href="#"
              >
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
                href="#"
              >
                Terms of Service
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
                href="#"
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
                href="#"
              >
                Help Center
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 font-medium">
              © 2024 Prologue. Empowering the next generation to achieve
              greatness.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
