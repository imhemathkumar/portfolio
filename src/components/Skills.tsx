'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 dark:text-white">My Skills</h2>
              <p className="text-lg text-muted-foreground dark:text-gray-300">The tech&apos;s that I&apos;ve been using to build my projects.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "Python", image: "/logo/Python.svg" },
                { name: "Java", image: "/logo/java.svg" },
                { name: "Artificial Intellgence", image: "/logo/artificial-intelligence.svg" },
                { name: "HTML 5", image: "/logo/HTML.svg" },
                { name: "CSS 3", image: "/logo/CSS3.svg" },
                { name: "Tailwind CSS", image: "/logo/Tailwind_CSS.svg" },
                { name: "Javascript", image: "/logo/JavaScript.svg" },
                { name: "Typescript", image: "/logo/Typescript.svg" },
                { name: "React JS", image: "/logo/React.svg" },
                { name: "Next JS", image: "/logo/nextjs.svg" },
                { name: "Firebase", image: "/logo/firebase.svg" },
                { name: "MongoDB", image: "/logo/mongodb.svg" }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square relative mb-4">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <h3 className="text-center font-medium dark:text-white">{tech.name}</h3>
                </motion.div>
              ))}
            </div>
      </div>
    </section>
  )
}

