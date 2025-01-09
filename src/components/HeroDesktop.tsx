import { Button } from "@/src/app/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"

const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      type: "spring",
      stiffness: 300
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeInOut"
    }
  }
}

export default function HeroDesktop() {
  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-primary dark:text-primary">Hi There, I&apos;m</p>
      <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold tracking-tight dark:text-white">
        Hemanth Kumar
      </h1>
      <p className="text-muted-foreground dark:text-gray-300 max-w-lg">
      I&apos;m a Web Developer with expertise in full-stack development, UI/UX design, and modern web technologies.
      </p>
      <div className="flex items-center gap-4">
        <motion.div
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <Link href="#personal-info" scroll={true}>
            <Button 
              size="lg" 
              className="bg-primary dark:bg-primary hover:bg-black/90 dark:hover:bg-white/90 text-white dark:text-white dark:hover:text-black rounded-3xl transition-all hover:shadow-lg"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>
        <motion.div
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <Link href="#contact" scroll={true}>
            <Button 
              variant="ghost" 
              size="lg" 
              className="group hover:bg-yellow-400 hover:text-white/90 rounded-3xl"
            >
              Contact Me Here
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
