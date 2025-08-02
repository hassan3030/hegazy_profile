export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About", 
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      language: "English",
      portfolio: "Portfolio"
    },
    home: {
      title: "Professional Accountant",
      subtitle: "Expert Financial Solutions",
      description: "Providing comprehensive accounting services, financial consulting, and business advisory to help your organization achieve sustainable growth and financial excellence.",
      cta: "Get Started",
      name: "Mahnoud Hegazy",
      stats: {
        experience: "Years Experience",
        clients: "Happy Clients", 
        projects: "Projects Completed",
        certifications: "Certifications"
      }
    },
    about: {
      title: "About Me",
      subtitle: "Professional Background",
      bio: "I am a dedicated and experienced Certified Public Accountant with over 8 years of expertise in financial management, tax planning, and business consulting..."
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "Technical Proficiency"
    },
    experience: {
      title: "Professional Experience",
      subtitle: "Career Journey"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Contact Information",
      form: {
        title: "Send a Message",
        name: "Full Name *",
        email: "Email Address *", 
        phone: "Phone Number",
        subject: "Subject *",
        message: "Message *",
        send: "Send Message"
      }
    },
    footer: {
      description: "Providing expert financial services and accounting solutions to help your business thrive and grow.",
      quickLinks: "Quick Links",
      services: "Services",
      contactInfo: "Contact Info",
      copyright: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "حول",
      skills: "المهارات", 
      experience: "الخبرة",
      contact: "اتصل بنا",
      language: "العربية",
      portfolio: "المحفظة"
    },
    home: {
      title: "محاسب محترف",
      subtitle: "حلول مالية متخصصة",
      description: "تقديم خدمات محاسبية شاملة واستشارات مالية ونصائح تجارية لمساعدة مؤسستك على تحقيق النمو المستدام والتميز المالي.",
      cta: "ابدأ الآن",
      name: "محمود حجازي",

      stats: {
        experience: "سنوات خبرة",
        clients: "عملاء راضون",
        projects: "مشاريع مكتملة", 
        certifications: "شهادات"
      }
    },
    about: {
      title: "نبذة عني",
      subtitle: "الخلفية المهنية",
      bio: "أنا محاسب قانوني معتمد مخصص وذو خبرة مع أكثر من 8 سنوات من الخبرة في الإدارة المالية والتخطيط الضريبي والاستشارات التجارية..."
    },
    skills: {
      title: "المهارات والخبرات",
      subtitle: "الكفاءة التقنية"
    },
    experience: {
      title: "الخبرة المهنية", 
      subtitle: "المسار المهني"
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "معلومات الاتصال",
      form: {
        title: "إرسال رسالة",
        name: "الاسم الكامل *",
        email: "البريد الإلكتروني *",
        phone: "رقم الهاتف", 
        subject: "الموضوع *",
        message: "الرسالة *",
        send: "إرسال الرسالة"
      }
    },
    footer: {
      description: "تقديم خدمات مالية متخصصة وحلول محاسبية لمساعدة عملك على النمو والازدهار.",
      quickLinks: "روابط سريعة",
      services: "الخدمات", 
      contactInfo: "معلومات الاتصال",
      copyright: "جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة"
    }
  }
};

export type Language = 'en' | 'ar';
export type TranslationKey = keyof typeof translations.en;