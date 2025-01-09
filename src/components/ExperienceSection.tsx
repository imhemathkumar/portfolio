'use client'

import { motion } from 'framer-motion'
import { Book, ChevronDown, Code, GraduationCap } from 'lucide-react'
import { useState } from 'react'

interface StudentExperienceItem {
  id: number
  title: string
  institution: string
  duration: string
  description: string[]
  icon: React.ReactNode
}

const studentExperiences: StudentExperienceItem[] = [
  {
    id: 1,
    institution: "Sathyabama University",
    title: "Chennai, India",
    duration: "2025 - Present",
    description: [
      "Maintaining a CGPA of 8.6 in core computer science courses.",
      "I learned several coding languages and used my logical skills to excel in coding competitions during my 2nd year.",
      "Active participant in the university's coding club."
    ],
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    id: 2,
    institution: "NPTEL Courses",
    title: "Chennai, India",
    duration: "2023",
    description: [
      "Gained certification in multiple NPTEL courses, varying from short-term 4-week programs to extensive 12-week sessions.",
      "These courses reinforced analytical thinking, problem-solving, and specialized skills in data visualization and machine learning.",
      "These programs featured rigorous academic content and practical applications, highlighting a commitment to continuous learning and skill enhancement in particular areas."
    ],
    icon: <Book className="w-6 h-6" />
  },
  {
    id: 3,
    institution: "Data Analyst",
    title: "SkillForge, Bangalore",
    duration: "2023",
    description: [
      "Analysting in a machine learning project focused on natural language processing",
      "Implementing and testing various neural network architectures",
      "Utilizing statistical analysis and machine learning techniques to address business challenges, including trend forecasting, pattern recognition, and anomaly detection."
    ],
    icon: <Code className="w-6 h-6" />
  },
]

export default function StudentExperience() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {studentExperiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="mb-8 dark:bg-gray-800/80 rounded-lg shadow-md overflow-hidden "
              whileHover={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
            >
              <motion.div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedId(expandedId === experience.id ? null : experience.id)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-primary hover:text-sky-500"
                    >
                      {experience.icon}
                    </motion.div>
                    <h3 className="text-xl text-black dark:text-white font-semibold ">{experience.institution}</h3>
                  </div>
                  <span className="text-sm text-black dark:text-white">{experience.duration}</span>
                </div>
                <p className="text-lg text-black dark:text-white mt-1">{experience.title}</p>
                <motion.div
                  animate={{ rotate: expandedId === experience.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2"
                >
                  <ChevronDown className="w-6 h-6 text-black dark:text-white" />
                </motion.div>
              </motion.div>
              <motion.div
                initial={false}
                animate={{ 
                  height: expandedId === experience.id ? 'auto' : 0,
                  opacity: expandedId === experience.id ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0">
                  <ul className="list-disc px-10 text-black dark:text-white">
                    {experience.description.map((item, index) => (
                      <motion.li 
                        key={`description-${index}-${item.substring(0, 10)}`} 
                        className="mb-2 text"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

