'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

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
    description: "Machine learning model for analyzing MRI scans and identifying brain tumors. This project showcases the application of deep learning in medical imaging.",
    imageUrl: "/images/Brain-Tumor.png",
    tags: ["Python", "TensorFlow", "Deep Learning", "Medical Imaging"],
    color: "#FF6B6B",
    link: "https://github.com/imhemathkumar/Brain_tumor_classification"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather forecasting web application using OpenWeatherMap API. Get accurate weather information for any location with a sleek, user-friendly interface.",
    imageUrl: "/images/Nimbusvue.png",
    tags: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind", "API Integration"],
    color: "#4ECDC4",
    link: "https://nimbusvue.vercel.app/"
  },
  {
    id: 3,
    title: "Fashion-MNIST",
    description: "Image classification model for fashion items using the Fashion-MNIST dataset. This project demonstrates the power of convolutional neural networks in recognizing and categorizing clothing items.",
    imageUrl: "/images/Fashion-Mnist.png",
    tags: ["Python", "TensorFlow", "CNN", "Computer Vision"],
    color: "#45B7D1",
    link: "https://github.com/imhemathkumar/Fashion-Mnist-CNN"
  },
  {
    id: 4,
    title: "TrustCert",
    description: "Web application for online certificate generation and validation. Streamline the process of creating, issuing, and verifying digital certificates with enhanced security features.",
    imageUrl: "/images/Trustcert.png",
    tags: ["React", "Vite", "Node.js", "JavaScript", "Cryptography"],
    color: "#A55EEA",
    link: "https://example.com/trustcert"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Responsive portfolio website showcasing projects and skills. A modern, interactive platform to highlight professional achievements and technical expertise.",
    imageUrl: "/portfolio.png",
    tags: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind", "Framer Motion"],
    color: "#F7B731",
    link: "https://hemanthkumar-one.vercel.app/"
  },
]

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <motion.div 
      layout
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)' }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="relative h-48">
        <Image 
          src={project.imageUrl} 
          alt={project.title} 
          layout="fill"
          objectFit="cover"
        />
        <div 
          className="absolute inset-0 opacity-60"
          style={{ backgroundColor: project.color, opacity:"0.5" }}
        />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="bg-white/20 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        ref={modalRef}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="relative h-64">
          <Image 
            src={project.imageUrl} 
            alt={project.title} 
            layout="fill"
            objectFit="cover"
          />
          <div 
            className="absolute inset-0 opacity-60"
            style={{ backgroundColor: project.color,  opacity:"0.1" }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
          >
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  //const [filter, setFilter] = useState<string | null>(null) //removed

  //const filteredProjects = filter
  //  ? projects.filter(project => project.tags.includes(filter))
  //  : projects //removed

  //const allTags = Array.from(new Set(projects.flatMap(project => project.tags))) //removed

  return (
    <section id="projects" className="py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Projects
        </motion.h2>


        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProjectCard 
                  project={project} 
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects

