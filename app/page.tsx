"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Code,
  TestTube,
  Smartphone,
  Globe,
  Database,
  Zap,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white animate-fade-in">Mohamed Ehab</h1>
            <div className="hidden md:flex space-x-6">
              {["about", "skills", "experience", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-slate-300 hover:text-teal-400 transition-all duration-300 capitalize relative group ${
                    activeSection === section ? "text-teal-400" : ""
                  }`}
                >
                  {section}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div
                className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              >
                <div className="space-y-2">
                  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-teal-200 to-teal-400 bg-clip-text text-transparent animate-gradient">
                    Mohamed Ehab
                  </h1>
                  <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-pulse"></div>
                </div>

                <h2 className="text-xl md:text-2xl text-teal-400 font-medium animate-fade-in-up delay-300">
                  Software Engineer | Frontend Developer | Part-Time Software Tester | No-Code Builder
                </h2>

                <p className="text-lg text-slate-300 leading-relaxed animate-fade-in-up delay-500">
                  I build and test scalable digital products using Flutter, FlutterFlow, and modern frontend stacks. I
                  thrive in hybrid teams and fast-paced sprints.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-700">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-teal-500/25"
                    asChild
                  >
                    <a 
                      href="/Mohamed-Ehab-CV.pdf" 
                      download="Mohamed_Ehab_CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection("projects")}
                    className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Projects
                  </Button>
                </div>
              </div>

              {/* Profile Image */}
              <div
                className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              >
                <div className="relative group">
                  {/* Animated border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                  {/* Image container */}
                  <div className="relative bg-slate-800 rounded-2xl p-2">
                    <Image
                      src="/images/mohamed-profile.jpg"
                      alt="Mohamed Ehab - Software Engineer"
                      width={500}
                      height={600}
                      className="rounded-xl object-cover w-full h-auto transform group-hover:scale-105 transition-all duration-500"
                      priority
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full animate-bounce delay-1000"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-1500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-teal-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-up">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-left">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Code className="mr-2 h-5 w-5 text-teal-400" />
                    Professional Background
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    I bring a unique hybrid experience combining Flutter development, manual software testing, and
                    expertise in low-code/no-code tools like FlutterFlow, Glide, and Airtable. My diverse skill set
                    allows me to bridge the gap between development and quality assurance, ensuring robust and
                    user-friendly applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-right">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Calendar className="mr-2 h-5 w-5 text-teal-400" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="group">
                      <h4 className="font-semibold text-white group-hover:text-teal-400 transition-colors">
                        Bachelor's in Computer Engineering
                      </h4>
                      <p className="text-slate-300">Arab Academy for Science, Technology & Maritime Transport</p>
                    </div>
                    <div className="group">
                      <h4 className="font-semibold text-white group-hover:text-teal-400 transition-colors">
                        Bachelor's Degree
                      </h4>
                      <p className="text-slate-300">University of Northampton</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-up">
            Skills & Technologies
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Languages",
                  skills: ["Dart", "JavaScript", "C", "HTML", "CSS"],
                  delay: "delay-100",
                },
                {
                  title: "Tools",
                  skills: ["FlutterFlow", "Firebase", "Zapier", "Glide", "Airtable", "Git", "Postman", "Jira"],
                  delay: "delay-200",
                },
                {
                  title: "Frameworks",
                  skills: ["Flutter", "Next.js", "React.js", "TailwindCSS"],
                  delay: "delay-300",
                },
                {
                  title: "Concepts",
                  skills: ["OOP", "Clean Architecture", "REST APIs", "MVVM", "TDD"],
                  delay: "delay-400",
                },
              ].map((category, index) => (
                <Card
                  key={category.title}
                  className={`bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-up ${category.delay}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-700 text-slate-200 hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                          style={{ animationDelay: `${skillIndex * 100}ms` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-up">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  icon: TestTube,
                  title: "Software Tester (Part-Time)",
                  company: "Blocka",
                  badge: "Current",
                  description:
                    "Conducting comprehensive manual testing for iOS and Android applications, ensuring quality and user experience across mobile platforms.",
                  delay: "delay-100",
                },
                {
                  icon: Globe,
                  title: "Frontend Developer (Freelance)",
                  company: "aydikhbrat.com",
                  description:
                    "Developed and maintained frontend components for a web application, focusing on responsive design and user experience optimization.",
                  delay: "delay-200",
                },
                {
                  icon: Zap,
                  title: "No-Code Developer (Full-Time)",
                  company: "GeekyAir",
                  badge: "Current",
                  description:
                    "Led development of innovative no-code solutions, creating scalable applications using modern no-code platforms and tools.",
                  projects: [
                    "Dreamfinder - Mobile application for dream analysis",
                    "Social Army - Social media management dashboard",
                  ],
                  delay: "delay-300",
                },
              ].map((job, index) => (
                <Card
                  key={job.title}
                  className={`bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-up ${job.delay}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center text-white">
                          <job.icon className="mr-2 h-5 w-5 text-teal-400" />
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-slate-300">{job.company}</CardDescription>
                      </div>
                      {job.badge && (
                        <Badge variant="outline" className="border-teal-400 text-teal-400 animate-pulse">
                          {job.badge}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-3">{job.description}</p>
                    {job.projects && (
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="font-medium text-white">Key Projects:</span>
                        </div>
                        <ul className="list-disc list-inside text-slate-300 space-y-1">
                          {job.projects.map((project, projectIndex) => (
                            <li key={projectIndex} className="hover:text-teal-400 transition-colors">
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Smartphone,
                  title: "E-Commerce App",
                  description: "Flutter + Firebase",
                  content:
                    "Full-featured e-commerce mobile application built with Flutter and Firebase, including user authentication, product catalog, and payment integration.",
                  badges: ["Flutter", "Firebase", "Dart"],
                  delay: "delay-100",
                },
                {
                  icon: Code,
                  title: "Smart Wheelchair",
                  description: "Voice Control System",
                  content:
                    "Innovative smart wheelchair with voice control capabilities using TensorFlow Lite and Raspberry Pi for enhanced accessibility and user independence.",
                  badges: ["TensorFlow Lite", "Raspberry Pi", "IoT"],
                  delay: "delay-200",
                },
                {
                  icon: Database,
                  title: "Payroll System",
                  description: "Enterprise Solution",
                  content:
                    "Comprehensive payroll management system implementing OOP principles, design patterns, and test-driven development for enterprise-level reliability.",
                  badges: ["OOP", "Design Patterns", "TDD"],
                  delay: "delay-300",
                },
                {
                  icon: Smartphone,
                  title: "Dreamfinder",
                  description: "Golf Scholarships App",
                  content:
                    "A golf scholarships mobile app used to find suitable scholarships for golf players based on their scores. Available on the App Store with intuitive matching algorithms.",
                  badges: ["FlutterFlow", "Sports Tech", "iOS"],
                  link: "https://apps.apple.com/eg/app/dreamfinder/id6743325294",
                  linkText: "View on App Store",
                  delay: "delay-400",
                },
                {
                  icon: Globe,
                  title: "Social Army Platform",
                  description: "TikTok Shop Affiliate Platform",
                  content:
                    "A comprehensive platform designed to empower TikTok Shop affiliates and content creators. Features in-depth courses, community support, and exclusive brand deals. Serves 4,000+ students with $10M+ GMV generated.",
                  badges: ["Glide", "Airtable", "TikTok Shop"],
                  link: "https://dash.social-army.io/",
                  linkText: "View Dashboard",
                  delay: "delay-500",
                },
                {
                  icon: Globe,
                  title: "خبرة الايادي للاستقدام",
                  description: "Saudi Recruitment Agency",
                  content:
                    "Professional website for خبرة الأيادي للاستقدام, a licensed Saudi recruitment agency specializing in domestic labor services. Features user-friendly interface, service tracking, and 98% satisfaction rate.",
                  badges: ["Frontend", "Arabic", "Recruitment"],
                  link: "https://frontendksawebsite1.vercel.app/",
                  linkText: "View Website",
                  delay: "delay-600",
                },
              ].map((project, index) => (
                <Card
                  key={project.title}
                  className={`bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-up ${project.delay} group`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center text-white group-hover:text-teal-400 transition-colors">
                      <project.icon className="mr-2 h-5 w-5 text-teal-400" />
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">{project.content}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.badges.map((badge, badgeIndex) => (
                        <Badge
                          key={badge}
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:border-teal-400 hover:text-teal-400 transition-all duration-300"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    {project.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
                      >
                        <Link href={project.link} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {project.linkText}
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-up">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-left">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                  <CardDescription className="text-slate-300">Let's discuss your next project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center group">
                    <Mail className="mr-3 h-5 w-5 text-teal-400 group-hover:scale-110 transition-transform" />
                    <a
                      href="mailto:mohamedehab26901@gmail.com"
                      className="text-slate-300 hover:text-teal-400 transition-colors"
                    >
                      mohamedehab26901@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center group">
                    <Phone className="mr-3 h-5 w-5 text-teal-400 group-hover:scale-110 transition-transform" />
                    <a href="tel:+201275827643" className="text-slate-300 hover:text-teal-400 transition-colors">
                      +20 127 582 7643
                    </a>
                  </div>
                  <div className="flex items-center group">
                    <MapPin className="mr-3 h-5 w-5 text-teal-400 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-300">Alexandria, Egypt</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-right">
                <CardHeader>
                  <CardTitle className="text-white">Connect With Me</CardTitle>
                  <CardDescription className="text-slate-300">Find me on social platforms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-600 text-slate-300 hover:border-teal-400 hover:text-teal-400 hover:bg-teal-400/10 transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <Link href="#" target="_blank">
                      <Linkedin className="mr-3 h-5 w-5" />
                      LinkedIn Profile
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-600 text-slate-300 hover:border-teal-400 hover:text-teal-400 hover:bg-teal-400/10 transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <Link href="#" target="_blank">
                      <Github className="mr-3 h-5 w-5" />
                      GitHub Profile
                    </Link>
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-teal-500/25"
                    asChild
                  >
                    <Link href="mailto:mohamedehab26901@gmail.com">
                      <Mail className="mr-3 h-5 w-5" />
                      Send Email
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto text-center">
          <p className="text-slate-400 animate-fade-in">© 2024 Mohamed Ehab. Built with Next.js and TailwindCSS.</p>
        </div>
      </footer>
    </div>
  )
}
