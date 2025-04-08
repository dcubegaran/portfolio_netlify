// pages/api/sendEmail.js
import { sendMail } from 'your-email-service'; // Replace with your email service library

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const subject = 'Message from Portfolio Website';
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    try {
      // Replace with your email sending logic
      await sendMail({
        to: '2003devadharani@gmail.com',
        subject: subject,
        text: body,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}