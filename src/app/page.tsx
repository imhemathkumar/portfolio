'use client'

import About from '@/src/components/About'
import Contact from '@/src/components/Contact'
import ExperienceSection from '@/src/components/ExperienceSection'
import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import Hero from '@/src/components/Hero'
import Projects from '@/src/components/Projects'
import Skills from '@/src/components/Skills'
import { ThemeToggle } from "@/src/components/theme-toggle"
import { useEffect, useState } from 'react'

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-screen dark:bg-gray-900 dark:text-white">
      <Header />
      <main>
        <div className="container mx-auto px-4 pt-32 lg:pt-40 overflow-hidden">
          <Hero />
        </div>
        <div className="mx-auto flex flex-col px-8 items-center overflow-hidden">
          <About />
        </div>
        <div className="mx-auto flex flex-col overflow-hidden">
          <Projects />
          <Skills />
          <ExperienceSection />
          <Contact />
        </div>
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  )
}
