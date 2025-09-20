import nodemailer from 'nodemailer';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Create transporter
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(data: EmailData) {
  try {
    // Email to you (notification)
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #3B82F6; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #475569;">${data.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Reply to:</strong> ${data.email}
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #3B82F6; margin-bottom: 20px;">Thank You for Your Message!</h2>
          
          <p style="color: #475569; line-height: 1.6;">Hi ${data.name},</p>
          
          <p style="color: #475569; line-height: 1.6;">
            Thank you for reaching out! I've received your message about "<strong>${data.subject}</strong>" and I'll get back to you as soon as possible.
          </p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Your Message Summary</h3>
            <p style="color: #64748b; margin: 0;"><strong>Subject:</strong> ${data.subject}</p>
            <p style="color: #64748b; margin: 10px 0 0 0;"><strong>Sent:</strong> ${new Date().toLocaleDateString()}</p>
          </div>
          
          <p style="color: #475569; line-height: 1.6;">
            I typically respond within 24-48 hours. In the meantime, feel free to check out my portfolio and recent projects.
          </p>
          
          <p style="color: #475569; line-height: 1.6;">
            Best regards,<br>
            <strong>Subhrajit Mukherjee</strong><br>
            Full-Stack Developer
          </p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #dbeafe; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              Connect with me: 
              <a href="https://www.linkedin.com/in/subhrajit-mukherjee-1026161b4/" style="color: #3B82F6; text-decoration: none;">LinkedIn</a> | 
              <a href="https://github.com/subhrajitMukherje" style="color: #3B82F6; text-decoration: none;">GitHub</a>
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

    return { success: true, message: 'Emails sent successfully' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Failed to send email' };
  }
}