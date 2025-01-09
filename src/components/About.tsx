'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const DesktopAbout = dynamic(() => import('./DesktopAbout'), { ssr: false })
const MobileAbout = dynamic(() => import('./MobileAbout'), { ssr: false })

export default function About() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust this breakpoint as needed
    }

    handleResize() // Set initial state
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {isMobile ? <MobileAbout /> : <DesktopAbout />}
    </>
  )
}

