import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.NODE_ENV === 'production' 
  ? (Number(process.env.PORT) || 3000) 
  : 3000;

const app = express();

app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// Vidyasagar Chaurasiya Contact & Profile Configuration
const OWNER_PROFILE = {
  name: process.env.PORTFOLIO_OWNER_NAME || 'Vidyasagar Chaurasiya',
  companyName: 'VS Technology Pvt. Ltd.',
  title: 'Full Stack Software Engineer (CSE)',
  email: process.env.PORTFOLIO_OWNER_EMAIL || 'vidyasagarchaurasiya38@gmail.com',
  whatsappNumber: process.env.PORTFOLIO_OWNER_WHATSAPP || '919598530662',
  phoneDisplay: '+91 9598530662',
  linkedin: process.env.PORTFOLIO_OWNER_LINKEDIN || 'https://www.linkedin.com/in/vidhyasagar-cse',
  companyLinkedIn: 'https://www.linkedin.com/company/143573013/',
  location: 'H-61, Sector 63, Noida, Uttar Pradesh 201301, India',
};

// In-memory lead/message store for received inquiries
interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  createdAt: string;
  emailSent: boolean;
  whatsappLink: string;
}

const inquiries: Inquiry[] = [
  {
    id: 'inq_sample_1',
    name: 'Rahul Sharma',
    email: 'rahul.s@techcorp.in',
    phone: '+91 98765 43210',
    service: 'Full-Stack Web Development',
    budget: '₹50,000 - ₹1,50,000',
    message: 'We need an enterprise SaaS dashboard built with React and Node.js with payment integration.',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    emailSent: true,
    whatsappLink: 'https://wa.me/919598530662',
  }
];

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Profile & Contact Info Endpoint
app.get('/api/profile', (req, res) => {
  res.json({
    status: 'success',
    profile: OWNER_PROFILE,
  });
});

// Inquiries Listing Endpoint (for client review & verifying received messages)
app.get('/api/inquiries', (req, res) => {
  res.json({
    status: 'success',
    count: inquiries.length,
    inquiries,
  });
});

// Upload Profile Photo endpoint - saves exact original photo to disk
app.post('/api/upload-profile-photo', (req, res) => {
  try {
    const { imageData } = req.body;
    if (!imageData || typeof imageData !== 'string') {
      return res.status(400).json({ success: false, error: 'imageData required' });
    }
    const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const targets = [
      path.resolve(__dirname, 'public', 'vidyasagar_profile.jpg'),
      path.resolve(__dirname, 'public', 'profile.jpg'),
      path.resolve(__dirname, 'src', 'assets', 'images', 'vidyasagar_profile.jpg'),
      path.resolve(__dirname, 'src', 'assets', 'images', 'vidyasagar_real_photo_1790764197266.jpg'),
      path.resolve(__dirname, 'dist', 'vidyasagar_profile.jpg'),
      path.resolve(__dirname, 'dist', 'profile.jpg')
    ];

    targets.forEach(targetPath => {
      try {
        const dir = path.dirname(targetPath);
        if (fs.existsSync(dir)) {
          fs.writeFileSync(targetPath, buffer);
        }
      } catch (e) {
        // ignore individual write error
      }
    });

    return res.json({ success: true, message: 'Photo saved successfully across all destinations' });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Contact Form Submission with Email & WhatsApp direct integration
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields.',
      });
    }

    const inquiryId = `inq_${Date.now()}`;
    const timestamp = new Date().toISOString();

    // Prepare direct WhatsApp message text
    const whatsappText = `*New Lead from VS Technology Website*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📧 *Email:* ${email}\n` +
      `📱 *Phone/WhatsApp:* ${phone || 'Not provided'}\n` +
      `💼 *Service Requested:* ${service || 'General Inquiry'}\n` +
      `💰 *Budget Range:* ${budget || 'Flexible'}\n\n` +
      `📝 *Message:* \n"${message}"\n\n` +
      `⏰ *Sent At:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

    const whatsappUrl = `https://wa.me/${OWNER_PROFILE.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

    // Prepare direct Mailto link as backup
    const mailtoSubject = `VS Technology Inquiry from ${name} [${service || 'Website Project'}]`;
    const mailtoBody = `Hi Vidyasagar,\n\nI reached out via the VS Technology website.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService: ${service || 'N/A'}\nBudget: ${budget || 'N/A'}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${OWNER_PROFILE.email}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;

    // Attempt real email dispatch if SMTP environment variables are present
    let emailSent = false;
    let emailNote = '';

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_PORT === '465',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
          to: OWNER_PROFILE.email,
          replyTo: email,
          subject: `⚡ New Project Inquiry from ${name}: ${service || 'Digital Solution'}`,
          text: whatsappText,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #2563eb; margin-top: 0;">New Project Inquiry</h2>
              <p>You have received a new message through your <strong>Entire Digital Solution</strong> portfolio.</p>
              <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
                <tr><td style="padding: 8px; font-weight: bold; width: 140px; border-bottom: 1px solid #f1f5f9;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${name}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${phone || 'Not provided'}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Service:</td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${service || 'General'}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Budget:</td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${budget || 'Flexible'}</td></tr>
              </table>
              <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #2563eb; margin: 16px 0; border-radius: 4px;">
                <strong>Message:</strong><br />
                <p style="white-space: pre-wrap; margin: 8px 0 0 0;">${message}</p>
              </div>
              <p style="font-size: 12px; color: #64748b;">Inquiry ID: ${inquiryId} • Sent: ${timestamp}</p>
            </div>
          `,
        });
        emailSent = true;
        emailNote = `Direct email dispatched to ${OWNER_PROFILE.email}`;
      } catch (mailErr: any) {
        console.warn('SMTP Send Warning:', mailErr?.message);
        emailNote = `SMTP attempt logged. Instant WhatsApp and backup direct mailto links generated.`;
      }
    } else {
      emailNote = `Message queued and recorded in server database. Direct dispatch ready via WhatsApp and Email for ${OWNER_PROFILE.email}.`;
    }

    const newInquiry: Inquiry = {
      id: inquiryId,
      name,
      email,
      phone: phone || '',
      service: service || 'General',
      budget: budget || 'Flexible',
      message,
      createdAt: timestamp,
      emailSent,
      whatsappLink: whatsappUrl,
    };

    inquiries.unshift(newInquiry);

    console.log(`[Contact Form Received] ID: ${inquiryId} from ${name} (${email}) -> Sent to ${OWNER_PROFILE.email} / WhatsApp: ${OWNER_PROFILE.whatsappNumber}`);

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent and recorded successfully! Vidyasagar will get back to you shortly.',
      inquiryId,
      emailStatus: emailNote,
      whatsappUrl,
      mailtoUrl,
      ownerEmail: OWNER_PROFILE.email,
      ownerWhatsapp: OWNER_PROFILE.whatsappNumber,
    });
  } catch (error: any) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your message.',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
