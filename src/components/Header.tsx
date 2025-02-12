'use client'

import Link from "next/link"
import { useState } from 'react'
import { DesktopNavigation } from './DesktopNavigation'
import { MobileMenuButton } from './MobileMenuButton'
import { MobileNavigationSheet } from './MobileNavigationSheet'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-inherit/80 dark:bg-gray-800/80 backdrop-blur-sm border-b dark:border-gray-700">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between space-x-4">
        <Link href="/" className="text-xl font-semibold dark:text-white">
          Hemanth<span className="text-primary dark:text-primary animate-pulse">.</span>
        </Link>
        <DesktopNavigation navItems={navItems} />
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)} />
        <MobileNavigationSheet 
          navItems={navItems} 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
      </nav>
    </header>
  )
}

