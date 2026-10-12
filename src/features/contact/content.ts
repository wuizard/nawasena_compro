import type { Localized } from "@/features/i18n";

type ContactContent = {
  eyebrow: string;
  title: string;
  body: string;
  fields: { name: string; email: string; company: string; companyOptional: string; message: string };
  placeholders: { name: string; email: string; company: string; message: string };
  errors: { name: string; email: string; message: string };
  sendWhatsApp: string;
  sendEmail: string;
  sendHint: string;
  notConfigured: string;
  privacy: string;
  directLabel: string;
  whatsappLabel: string;
  emailLabel: string;
  emailSubject: string;
  greeting: string;
  messageLabels: { name: string; email: string; company: string; needs: string };
  floatingLabel: string;
  floatingMessage: string;
};

export const contactContent: Localized<ContactContent> = {
  id: {
    eyebrow: "Kontak",
    title: "Apa yang ingin Anda bangun berikutnya?",
    body: "Ceritakan ide, tantangan, atau kebutuhan bisnis Anda. Mari mulai percakapan tentang solusi yang bisa kita bangun bersama.",
    fields: {
      name: "Nama",
      email: "Email",
      company: "Perusahaan",
      companyOptional: "opsional",
      message: "Kebutuhan / Ide Proyek",
    },
    placeholders: {
      name: "Nama lengkap Anda",
      email: "nama@perusahaan.com",
      company: "Nama perusahaan",
      message: "Ceritakan secara singkat apa yang ingin Anda bangun",
    },
    errors: {
      name: "Mohon isi nama Anda.",
      email: "Mohon isi alamat email yang valid.",
      message: "Mohon ceritakan kebutuhan atau ide proyek Anda.",
    },
    sendWhatsApp: "Kirim via WhatsApp",
    sendEmail: "Kirim via Email",
    sendHint: "Pesan Anda akan dibuka di WhatsApp atau aplikasi email untuk dikirim.",
    notConfigured: "Kanal ini belum tersedia.",
    privacy: "Informasi yang Anda kirim digunakan untuk menanggapi pertanyaan atau kebutuhan proyek Anda.",
    directLabel: "Hubungi langsung",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    emailSubject: "Inquiry Proyek dari Website Nawasena Ananta",
    greeting: "Halo Nawasena Ananta, saya ingin mendiskusikan proyek.",
    messageLabels: { name: "Nama", email: "Email", company: "Perusahaan", needs: "Kebutuhan / Ide Proyek" },
    floatingLabel: "Chat via WhatsApp",
    floatingMessage: "Halo Nawasena Ananta, saya ingin bertanya tentang layanan Anda.",
  },
  en: {
    eyebrow: "Contact",
    title: "What would you like to build next?",
    body: "Tell us about your idea, challenge, or business needs. Let's start a conversation about what we can build together.",
    fields: {
      name: "Name",
      email: "Email",
      company: "Company",
      companyOptional: "optional",
      message: "Project Needs / Idea",
    },
    placeholders: {
      name: "Your full name",
      email: "name@company.com",
      company: "Company name",
      message: "Briefly describe what you want to build",
    },
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      message: "Please tell us about your project needs or idea.",
    },
    sendWhatsApp: "Send via WhatsApp",
    sendEmail: "Send via Email",
    sendHint: "Your message opens in WhatsApp or your email app, ready to send.",
    notConfigured: "This channel is not available yet.",
    privacy: "We use the information you submit to respond to your enquiry or project needs.",
    directLabel: "Reach us directly",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    emailSubject: "Project Inquiry from the Nawasena Ananta Website",
    greeting: "Hello Nawasena Ananta, I would like to discuss a project.",
    messageLabels: { name: "Name", email: "Email", company: "Company", needs: "Project Needs / Idea" },
    floatingLabel: "Chat on WhatsApp",
    floatingMessage: "Hello Nawasena Ananta, I have a question about your services.",
  },
};
