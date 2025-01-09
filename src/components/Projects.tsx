'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  imageUrl: string
  color: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Brain Tumor Image Classification",
    description: "Brain Tumor Image Classification uses machine learning to analyze MRI scans and identify or classify brain tumors for early detection and treatment.",
    imageUrl: "/images/Brain-Tumor.png",
    tags: ["Python", "Tensorflow"],
    color: "#FF6B6B",
    link: "https://github.com/imhemathkumar/Brain_tumor_classification"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather forecasting web applocation provides weather forecasts, including temperature, humidity, and conditions, based on the user's location.",
    imageUrl: "/images/Nimbusvue.png",
    tags: ["Nextjs", "React","Node.js","Typescript","Tailwind","OpenWeatherMapApi"],
    color: "#4ECDC4",
    link: "https://nimbusvue.vercel.app/"
  },
  {
    id: 3,
    title: "Fashion-Mnist",
    description: "Fashion-MNIST is a dataset of 28x28 grayscale images representing 10 fashion categories, used for training machine learning models in image classification tasks",
    imageUrl: "/images/Fashion-Mnist.png",
    tags: ["Python", "Tensorflow"],
    color: "#45B7D1",
    link: "https://github.com/imhemathkumar/Fashion-Mnist-CNN"
  },

  {
    id: 4,
    title: "TrustCert",
    description: "A Web-Application for online certificate generation and validation. In this Certificate generation creates digital certificates for authentication, and validation ensures their authenticity through checks like signatures and expiration.",
    imageUrl: "/images/Trustcert.png",
    tags: ["React", "Vitejs", "Node.js","Javascript"],
    color: "#A55EEA",
    link: "https://example.com/chatbot"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my projects and skills.",
    imageUrl: "/images/portfolio.png",
    tags: ["Nextjs", "React","Node.js","Typescript","Tailwind"],
    color: "#F7B731",
    link: "https://example.com/portfolio"
  },
]

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className="flex-shrink-0 w-[350px] h-[500px] relative perspective-1000 group"
      whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden transform-style-3d bg-gray-800"
        style={{ 
          transformOrigin: 'right center',
          rotateY: isHovered ? -20 : 0,
          transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)'
        }}
      >
        <Image 
          src={project.imageUrl} 
          alt={project.title} 
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-50"
        />
        <div 
          className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <motion.h3 
            className="text-3xl font-bold text-white mb-3"
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="text-sm text-gray-300 mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {project.description}
          </motion.p>
          <motion.div
          className="flex flex-wrap items-center gap-2"
          initial={{ y: 20, opacity: 0 }}
          animate={isHovered? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.4 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 1 && (
            <span className="mx-1 text-gray-300"></span>
          )}
            </motion.div>

          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold pt-3 text-white hover:text-gray-300 transition-colors duration-200"
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </motion.a>
        </div>
      </motion.div>
      <div 
        className="absolute -bottom-4 left-4 right-4 h-8 bg-gray-900 rounded-full shadow-lg flex items-center justify-center"
        style={{ backgroundColor: project.color }}
      >
        <span className="text-xs font-bold text-white">{project.title}</span>
      </div>
    </motion.div>
  )
}

const ProjectsCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      const newIndex = Math.round(scrollLeft / (scrollWidth / projects.length))
      setCurrentIndex(newIndex)
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const currentRef = containerRef.current
    currentRef?.addEventListener('scroll', handleScroll)
    return () => currentRef?.removeEventListener('scroll', handleScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const scrollAmount = index * 400 // Assuming each card is roughly 400px wide
      containerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  return (
    <section id="projects" className="py-24 dark:bg-gray-900 text-black dark:text-white overflow-hidden relative">
      <motion.div 
        className="absolute inset-0 z-0 opacity-10"
        style={{ 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Projects
        </motion.h2>
        <div className="relative">
          <motion.div 
            ref={containerRef}
            className="flex space-x-8 overflow-x-scroll scrollbar-hide pb-12"
            style={{ scrollBehavior: 'smooth' }}
            whileTap={{ cursor: 'grabbing' }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'dark:bg-primary/80 bg-blue-500 scale-125' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-lg transition-opacity  duration-200 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-lg transition-opacity duration-200 ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <ArrowRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsCarousel
