'use server'

import { Resend } from 'resend'

const resend = new Resend('re_KaeExhmG_M4XnuSGccKa7u4BPrhanv7Bo')

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const lookingFor = formData.get('looking-for') as string
  const message = formData.get('message') as string

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'hemanthkumartelukuntla143@gmail.com', // Replace with your email address
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Looking for: ${lookingFor}
        Message: ${message}
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false }
  }
}

