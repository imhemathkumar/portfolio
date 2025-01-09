'use client'

import { sendEmail } from '@/src/app/actions/contact'
import { Button } from "@/src/app/components/ui/button"
import { motion } from "framer-motion"
import { useState } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormStatus('sending')

    const formData = new FormData(event.currentTarget)
    const result = await sendEmail(formData)

    setFormStatus(result.success ? 'success' : 'error')
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Let's Talk</h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300">Be it anything, I'm always open to discuss new ideas and projects.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium dark:text-white">
                      Name <span className="text-red-500 dark:text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium dark:text-white">
                      Email <span className="text-red-500 dark:text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="looking-for" className="text-sm font-medium dark:text-white">
                    What are you looking for? <span className="text-red-500 dark:text-red-500">*</span>
                  </label>
                  <select
                    id="looking-for"
                    name="looking-for"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select an option</option>
                    <option value="website">Website Development</option>
                    <option value="app">App Development</option>
                    <option value="design">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium dark:text-white">
                    Your Message <span className="text-red-500 dark:text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
                    placeholder="What is your project about?"
                  />
                </div>
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="flex justify-end"
            >
              <Button 
                type="submit"
                size="lg"
                className="bg-primary dark:bg-primary hover:bg-black/90 dark:hover:bg-white/90 text-white dark:text-white dark:hover:text-black px-8"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send'}
              </Button>
            </motion.div>
          </form>
          {formStatus === 'success' && (
            <p className="mt-4 text-green-600 dark:text-green-400">Your message has been sent successfully!</p>
          )}
          {formStatus === 'error' && (
            <p className="mt-4 text-red-600 dark:text-red-400">There was an error sending your message. Please try again.</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

