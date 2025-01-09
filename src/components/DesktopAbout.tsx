'use client'

import { Button } from "@/src/app/components/ui/button"
import { motion } from "framer-motion"
import { Download } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function DesktopAbout() {
  const aboutContent = {
    title: "About Me",
    description: `I’m currently in my 3rd year of a B.E./B.Tech program and I’m a passionate web developer based in Chennai 🌴 . My main technical skills include Java, Python, C/C++, React, Next.js, Node.js, and MongoDB, which I leverage to create scalable and user-friendly 🕊️ web applications.`,
    location: "Chennai",
    additionalInfo: `Web development and design are not only my areas of expertise but also my true passion 💓. I take great pride in crafting functional and visually appealing digital 💡 solutions. When I’m not coding, I enjoy 🤸 playing cricket and kabaddi, listening to music 🎧, and engaging in creative challenges.
    `
  }
  const personalInfo = {
    name: "Hemanth Kumar Telukuntla",
    title: "Web Developer",
    birthday: "May 08, 2003",
    phone: "+91 93929-61094",
    email: "hemanthkumartelukuntla143@gmail.com",
    location: "Chennai, India",
    languages: "English, Telugu, Hindi, Tamil",
    freelance: "Available"
  }
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section style={{ paddingTop:"5%"}} id="about" className="py-20 lg:px-8">
          <motion.div
            className="max-w-10xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-center dark:text-white">{aboutContent.title}</h2>
            <p style={{ textAlign: 'justify' }} className="text-xl text-black-300 dark:text-gray-300">{aboutContent.description}</p>
            <p style={{ textAlign: 'justify' }} className="text-xl text-black-300 dark:text-gray-300">
            I’ve had the opportunity to work 👨🏻‍💻 as a Data Analyst at Skillforge, where I honed my analytical skills and appreciated the importance of teamwork and collaboration 🤝. In addition to my professional experience, I possess 🧠 strong problem-solving abilities, team management skills, and leadership qualities, which enable me to thrive in both academic and project environments.

            </p>
            <p style={{ textAlign: 'justify' }} className="text-xl text-black-300 dark:text-gray-300">{aboutContent.additionalInfo}</p>
            <p style={{ textAlign: 'justify' }} className="text-xl text-black-300 dark:text-gray-300">I’m excited to continue my growth as a developer and contribute to meaningful projects that blend innovation with an excellent user experience. I'm ready to connect and create some digital magic together! ✨ </p>
            <div className="flex gap-6">
              <motion.a
                href="https://www.instagram.com/hemanth_kumar_telukuntla?igsh=MWFucmlreGwwdGdhMA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.153-1.772 4.902 4.902 0 01-1.772-1.153c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/hemanth-kumar-telukuntla-14a8572b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://github.com/imhemathkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
          {/* Personal Info Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="max-w-8xl mx-auto mt-20 p-1 rounded-3xl text-black dark:text-white"
            id="personal-info"
          >
            <div className="max-w-6xl mx-auto px-50 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
          <div className="relative aspect-[3/4] w-full h-full max-w-50 mx-auto">
            <Image style={{marginLeft:"-3%" }}
              src="/images/hemath-kumar.jpg"
              alt="Profile photo"
              fill
              className="object-cover rounded-3xl px-1"
              priority
            />
          </div>
            <div style={{marginLeft:"-3%" }} className=" gap-2 px-auto">
            <div className="space-y-2">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Hello, I&apos;m Hemanth Kumar</h1>
              <h2 className="text-xl font-semibold text-yellow-500 dark:text-yellow-500">Developer</h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
            I am a developer with a passion for coding and the continuous upgrading of my skills. My websites are dynamic and user-friendly, integrating technical skills with creative problem-solving. Always excited about innovative ideas and collaborations.
            </p>

                <motion.h2 variants={itemVariants} className="text-3xl font-bold dark:text-white">
                  Personal Info
                </motion.h2>
                <motion.div variants={itemVariants} className="space-y-4 grid md:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <span className="text-zinc-400 dark:text-gray-300">Name:</span>
                    <p className="text-lg dark:text-white">{personalInfo.name}</p>
                  </div>
                  <div>
                    <span className="text-zinc-400 dark:text-gray-300">Birthday:</span>
                    <p className="text-lg dark:text-white">{personalInfo.birthday}</p>
                  </div>
                  <div>
                    <span className="text-zinc-400 dark:text-gray-300">Phone:</span>
                    <p className="text-lg dark:text-white">{personalInfo.phone}</p>
                  </div>
                  <div>
                    <span className="text-zinc-400 dark:text-gray-300">Location:</span>
                    <p className="text-lg dark:text-white">{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>
              <div className="space-y-2">
                <motion.h2 variants={itemVariants} className="text-3xl font-bold md:opacity-0">
                  
                </motion.h2>
                <motion.div variants={itemVariants} className="space-y-4">
                <div>
                    <span className="text-zinc-400 dark:text-gray-300">Email:</span>
                    <p className="text-lg dark:text-white">{personalInfo.email}</p>
                  </div>
                  
                  <div>
                    <span className="text-zinc-400 dark:text-gray-300">Languages:</span>
                    <p className="text-lg dark:text-white">{personalInfo.languages}</p>
                  </div>
                  <div>
                    <span className="text-zinc-400 dark:text-gray-300">Freelance:</span>
                    <p className="text-lg dark:text-white">{personalInfo.freelance}</p>
                  </div>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/Hemanth Resume.pdf" 
                    download="Hemanth Resume.pdf"
                    className="inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Button 
                      className="w-30 bg-primary dark:bg-primary hover:bg-black/90 dark:hover:bg-white/90 text-white dark:text-white dark:hover:text-black rounded-3xl"
                      size="lg"

                    >
                      <Download className="mr-2 h-4 w-4"/>
                      Download CV
                    </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            </div>
            </div>
          </motion.div>
        </section>
      )
    }

