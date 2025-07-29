"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { SiFlutter, SiFirebase, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiDart, SiHtml5, SiCss3, SiGit, SiJirasoftware, SiPostman, SiAirtable, SiGlide, SiZapier } from "react-icons/si"
import { motion } from "framer-motion"
import { Scene } from "@/components/3d/Scene"
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
  Languages,
  Wrench,
  Layers,
  Lightbulb,
  FileCode,
  Terminal,
  Layout,
  Server,
  GitBranch,
  Bug,
  MessageSquare,
  Boxes,
  Cpu,
  Network,
} from "lucide-react"

interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

interface SkillCategory {
  title: string
  skills: Skill[]
  delay: string
}

interface Project {
  title: string
  description: string
  content: string
  badges: string[]
  link: string
  linkText: string
  delay: string
  icon?: React.ComponentType<{ className?: string }>
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    // Set mounted state after component mounts
    setMounted(true)
    
    // Use requestAnimationFrame to ensure smooth animation start
    requestAnimationFrame(() => {
      setIsVisible(true)
    })

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

  // Return a minimal loading state during SSR and initial client render
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-white">Mohamed Ehab</h1>
        </div>
      </div>
    )
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const projects: Project[] = [
    {
      title: "FlutterFlow Mobile App",
      description: "Built a cross-platform mobile application using FlutterFlow",
      content: "Developed a full-featured mobile app with real-time data synchronization, user authentication, and custom animations.",
      badges: ["FlutterFlow", "Firebase", "Dart"],
      link: "https://example.com/project1",
      linkText: "View Project",
      delay: "delay-100",
      icon: SiFlutter
    },
    // ... rest of the projects array ...
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {mounted && <Scene />}

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
                  <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-teal-200 to-teal-400 bg-clip-text text-transparent animate-gradient">
                    Mohamed Ehab
                  </h1>
                  <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-pulse"></div>
                </div>

                <h2 className="text-2xl md:text-3xl text-teal-400 font-medium animate-fade-in-up delay-300">
                  Software Engineer | Frontend Developer | Part-Time Software Tester | No-Code Builder
                </h2>

                <p className="text-xl text-slate-300 leading-relaxed animate-fade-in-up delay-500">
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative group max-w-[400px] mx-auto"
              >
                <div className="relative group max-w-[400px] mx-auto">
                  {/* Animated border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                  {/* Image container */}
                  <div className="relative bg-slate-800 rounded-2xl p-2">
                    <Image
                      src="/images/mohamed-profile.jpg"
                      alt="Mohamed Ehab - Software Engineer"
                      width={400}
                      height={480}
                      className="rounded-xl object-cover w-full h-auto transform group-hover:scale-105 transition-all duration-500"
                      priority
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full animate-bounce delay-1000"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-1500"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-teal-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gradient-to-b from-slate-800/50 to-slate-900/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-up">
            About Me
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
            A passionate software engineer with a unique blend of technical expertise and creative problem-solving skills
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Professional Background Card */}
              <Card className="bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-left group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                      <Code className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">Professional Background</CardTitle>
                      <CardDescription className="text-slate-400">My journey in tech</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    I bring a unique hybrid experience combining Flutter development, manual software testing, and
                    expertise in low-code/no-code tools like FlutterFlow, Glide, and Airtable.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/80 transition-colors">
                      <h4 className="font-semibold text-teal-400 mb-2">Development</h4>
                      <p className="text-sm text-slate-300">Flutter & Frontend Development</p>
                    </div>
                    <div className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/80 transition-colors">
                      <h4 className="font-semibold text-teal-400 mb-2">Testing</h4>
                      <p className="text-sm text-slate-300">Manual Software Testing</p>
                    </div>
                    <div className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/80 transition-colors">
                      <h4 className="font-semibold text-teal-400 mb-2">No-Code</h4>
                      <p className="text-sm text-slate-300">FlutterFlow & Glide Expert</p>
                    </div>
                    <div className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/80 transition-colors">
                      <h4 className="font-semibold text-teal-400 mb-2">Integration</h4>
                      <p className="text-sm text-slate-300">API & Platform Integration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education Card */}
              <Card className="bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-right group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <Calendar className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">Education & Training</CardTitle>
                      <CardDescription className="text-slate-400">My academic journey</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="relative pl-8 border-l-2 border-slate-700 group-hover:border-teal-500/50 transition-colors">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500/20 group-hover:bg-teal-500/40 transition-colors"></div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-white group-hover:text-teal-400 transition-colors">
                          Bachelor's in Computer Engineering
                        </h4>
                        <p className="text-slate-400">Arab Academy for Science, Technology & Maritime Transport</p>
                        <p className="text-sm text-slate-500">2019 - 2024</p>
                      </div>
                    </div>

                    <div className="relative pl-8 border-l-2 border-slate-700 group-hover:border-teal-500/50 transition-colors">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors"></div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                          Bachelor's Degree
                        </h4>
                        <p className="text-slate-400">University of Northampton</p>
                        <p className="text-sm text-slate-500">2019 - 2024</p>
                      </div>
                    </div>

                    <div className="relative pl-8 border-l-2 border-slate-700 group-hover:border-teal-500/50 transition-colors">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500/20 group-hover:bg-purple-500/40 transition-colors"></div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                          Flutter Diploma
                        </h4>
                        <p className="text-slate-400">Route Academy</p>
                        <p className="text-sm text-slate-500">6 Months Intensive Training</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievement Highlights */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-up delay-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-teal-500/10 rounded-full">
                      <Smartphone className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">2+</h3>
                      <p className="text-slate-400">Mobile Apps Developed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-up delay-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-500/10 rounded-full">
                      <Globe className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">3+</h3>
                      <p className="text-slate-400">Web Platforms Built</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-up delay-400">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-500/10 rounded-full">
                      <Zap className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">98%</h3>
                      <p className="text-slate-400">Client Satisfaction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gradient-to-b from-slate-800/50 to-slate-900/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-up">
            Skills
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
            My technical skills and tools
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Languages",
                  skills: [
                    { name: "Dart", icon: SiDart },
                    { name: "JavaScript", icon: SiJavascript },
                    { name: "C", icon: SiJavascript },
                    { name: "HTML", icon: SiHtml5 },
                    { name: "CSS", icon: SiCss3 },
                  ],
                  delay: "delay-100",
                },
                {
                  title: "Tools",
                  skills: [
                    { name: "FlutterFlow", icon: SiFlutter },
                    { name: "Firebase", icon: SiFirebase },
                    { name: "Zapier", icon: SiZapier },
                    { name: "Glide", icon: SiGlide },
                    { name: "Airtable", icon: SiAirtable },
                    { name: "Git", icon: SiGit },
                    { name: "Postman", icon: SiPostman },
                    { name: "Jira", icon: SiJirasoftware },
                  ],
                  delay: "delay-200",
                },
                {
                  title: "Frameworks",
                  skills: [
                    { name: "Flutter", icon: SiFlutter },
                    { name: "Next.js", icon: SiNextdotjs },
                    { name: "React.js", icon: SiReact },
                    { name: "TailwindCSS", icon: SiTailwindcss },
                  ],
                  delay: "delay-300",
                },
                {
                  title: "Concepts",
                  skills: [
                    { name: "OOP", icon: SiJavascript },
                    { name: "Clean Architecture", icon: SiJavascript },
                    { name: "REST APIs", icon: SiJavascript },
                    { name: "MVVM", icon: SiJavascript },
                    { name: "TDD", icon: SiJavascript },
                  ],
                  delay: "delay-400",
                },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={`bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10 ${category.delay}`}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skill.name}
                            variant="secondary"
                            className="bg-slate-700 text-slate-200 hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-110 flex items-center gap-1"
                            style={{ animationDelay: `${skillIndex * 100}ms` }}
                          >
                            <skill.icon className="h-4 w-4 mr-1" />
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gradient-to-b from-slate-800/50 to-slate-900/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-up">
            Experience
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
            My professional experience
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Professional Background Card */}
              <Card className="bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-left group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                      <Code className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">Professional Background</CardTitle>
                      <CardDescription className="text-slate-400">My journey in tech</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    I bring a unique hybrid experience combining Flutter development, manual software testing, and
                    expertise in low-code/no-code tools like FlutterFlow, Glide, and Airtable.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/80 transition-colors">
                      <h4 className="font-semibold text-teal-400 mb-2">Development</h4>
                      <p className="text-sm text-slate-300">Flutter & Frontend Development</p>
                    </div>
                    <div className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/80 transition-colors">
                      <h4 className="font-semibold text-teal-400 mb-2">Testing</h4>
                      <p className="text-sm text-slate-300">Manual Software Testing</p>
                    </div>
                    <div className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/80 transition-colors">
                      <h4 className="font-semibold text-teal-400 mb-2">No-Code</h4>
                      <p className="text-sm text-slate-300">FlutterFlow & Glide Expert</p>
                    </div>
                    <div className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/80 transition-colors">
                      <h4 className="font-semibold text-teal-400 mb-2">Integration</h4>
                      <p className="text-sm text-slate-300">API & Platform Integration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education Card */}
              <Card className="bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-right group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <Calendar className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">Education & Training</CardTitle>
                      <CardDescription className="text-slate-400">My academic journey</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="relative pl-8 border-l-2 border-slate-700 group-hover:border-teal-500/50 transition-colors">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500/20 group-hover:bg-teal-500/40 transition-colors"></div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-white group-hover:text-teal-400 transition-colors">
                          Bachelor's in Computer Engineering
                        </h4>
                        <p className="text-slate-400">Arab Academy for Science, Technology & Maritime Transport</p>
                        <p className="text-sm text-slate-500">2019 - 2024</p>
                      </div>
                    </div>

                    <div className="relative pl-8 border-l-2 border-slate-700 group-hover:border-teal-500/50 transition-colors">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors"></div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                          Bachelor's Degree
                        </h4>
                        <p className="text-slate-400">University of Northampton</p>
                        <p className="text-sm text-slate-500">2019 - 2024</p>
                      </div>
                    </div>

                    <div className="relative pl-8 border-l-2 border-slate-700 group-hover:border-teal-500/50 transition-colors">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500/20 group-hover:bg-purple-500/40 transition-colors"></div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                          Flutter Diploma
                        </h4>
                        <p className="text-slate-400">Route Academy</p>
                        <p className="text-sm text-slate-500">6 Months Intensive Training</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievement Highlights */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-up delay-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-teal-500/10 rounded-full">
                      <Smartphone className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">2+</h3>
                      <p className="text-slate-400">Mobile Apps Developed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-up delay-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-500/10 rounded-full">
                      <Globe className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">3+</h3>
                      <p className="text-slate-400">Web Platforms Built</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-up delay-400">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-500/10 rounded-full">
                      <Zap className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">98%</h3>
                      <p className="text-slate-400">Client Satisfaction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gradient-to-b from-slate-800/50 to-slate-900/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-up">
            Projects
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
            My recent projects
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={`bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10 ${project.delay} group`}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center text-white group-hover:text-teal-400 transition-colors">
                        {project.icon && <project.icon className="mr-2 h-5 w-5 text-teal-400" />}
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-b from-slate-800/50 to-slate-900/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-up">
            Contact Me
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Get in touch with me
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form Card */}
              <Card className="bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-left group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                      <Mail className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">Contact Form</CardTitle>
                      <CardDescription className="text-slate-400">Send me a message</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Contact form content */}
                </CardContent>
              </Card>

              {/* Contact Details Card */}
              <Card className="bg-slate-800/80 border-slate-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-right group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <Phone className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">Contact Details</CardTitle>
                      <CardDescription className="text-slate-400">How to reach me</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Email: mohamed.ehab@example.com
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Phone: +1 (555) 123-4567
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}