import nodemailer from 'nodemailer'
import { google } from 'googleapis'

async function createTransporter() {
  const jwtClient = new google.auth.JWT({
    email: process.env.CLIENT_EMAIL,
    key: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/gmail.send'],
    subject: process.env.EMAIL_FROM,
  })

  const accessToken = await new Promise<string>((resolve, reject) => {
    jwtClient.authorize((err: any, tokens: any) => {
      if (err) {
        reject('Failed to create access token')
      }
      resolve(tokens?.access_token || '')
    })
  })

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_FROM,
      accessToken,
      clientId: process.env.CLIENT_ID,
      privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
  })
}

export async function sendEmail(to: string, subject: string, html: string) {
  const transporter = await createTransporter()
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html,
  }

  await transporter.sendMail(mailOptions)
}
