'use client'

import { useHasMounted } from "@/src/hooks/useHasMounted"
import { motion } from "framer-motion"
import Image from "next/image"
import HeroDesktop from "./HeroDesktop"
import HeroMobile from "./HeroMobile"

export default function Hero() {
  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return null
  }

  return (
    <div id="home" style={{ paddingBottom:"10%"}} className=" w-full">
      {/* Mobile View */}
      <div className="lg:hidden">
        <HeroMobile />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        <HeroDesktop />
        
        {/* Image Section (Visible only on desktop) */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/20 dark:border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/20 dark:border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute top-0 right-0 w-[200px] h-[200px] border border-primary/20 dark:border-primary/20 rotate-45 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] border border-primary/20 dark:border-primary/80 -rotate-45 animate-pulse" />
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/port.png"
              alt="Portrait of developer"
              width={600}
              height={700}
              className="relative mx-auto rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

