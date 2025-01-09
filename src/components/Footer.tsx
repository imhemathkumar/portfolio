'use client'

import { Github, Linkedin, Mail, X } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  return (
    <footer 
      className="w-full flex flex-col border-gray-200 dark:border-gray-800 border-t-2 items-center justify-center gap-4 py-8">
      <div className="flex items-center gap-6">
        <Link href="https://x.com/imhemanthkumar8?t=bRuhXnDRPrk-YKhgyDEJnw&s=08" className="text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-500  text-xs transition-colors">
          <X size={18} />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link href="https://www.linkedin.com/in/hemanth-kumar-telukuntla-14a8572b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-500 text-xs dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors">
          <Linkedin size={18} />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link href="https://github.com/imhemathkumar" className="text-gray-500  text-xs dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors">
          <Github size={18} />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link href="mailto:hemanthkumartelukuntla143@gmail.com" className="text-gray-500  text-xs dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-colors">
          <Mail size={18} />
          <span className="sr-only">Email</span>
        </Link>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} Hemanth Kumar.All rights reserved.
      </p>
    </footer>
  )
}

