import { siteConfig } from "@/lib/site-config";

export type HomeLocale = "ru" | "en";

export type HomeContent = (typeof homeContent)[HomeLocale];

const serviceLinks = {
  seo: "/seo",
  ads: "/ads",
  landing: "/landing-page-development",
  ecommerce: "/ecommerce-development",
  corporate: "/corporate-website-development",
  ios: "/ios-razrabotka-swift-swiftui",
} as const;

export const homeContent = {
  ru: {
    nav: {
      desktop: [
        { label: "Портфолио", href: "/portfolio" },
        { label: "Услуги", href: "/services" },
        { label: "О нас", href: "/about" },
      ],
      burger: [
        { label: "Портфолио", href: "/portfolio" },
        { label: "Услуги", href: "/services" },
        { label: "SEO", href: "/seo" },
        { label: "Google Ads", href: "/ads" },
        { label: "Лендинги", href: "/landing-page-development" },
        { label: "E-commerce", href: "/ecommerce-development" },
        { label: "Корпоративные сайты", href: "/corporate-website-development" },
        { label: "iOS-разработка", href: "/ios-razrabotka-swift-swiftui" },
        { label: "Калькулятор", href: "/calculator" },
        { label: "Блог", href: "/blog" },
        { label: "FAQ", href: "/faq" },
        { label: "О нас", href: "/about" },
        { label: "Контакты", href: "/contact" },
      ],
      cta: "Начать проект",
      burgerCta: "Связаться",
      menu: "Меню",
      account: {
        label: "Аккаунт",
        login: "Войти",
        register: "Регистрация",
      },
    },
    hero: {
      eyebrow: "Digital-агентство · Алматы · Казахстан",
      headline: {
        first: "Сайт, реклама и SEO",
        second: "которые приводят клиентов",
      },
      descriptions: [
        "SEO-продвижение, разработка сайтов и маркетинговые стратегии, которые приносят результат. Работаем с клиентами по всему Казахстану: Алматы, Астана, Шымкент и другие города. Ваш успех — наша миссия.",
        "Профессиональное digital-агентство с опытом работы более 10 лет. Помогаем бизнесу расти в интернете через SEO, контекстную рекламу и разработку. Работаем онлайн по всему Казахстану.",
        "Комплексные решения для digital-продвижения вашего бизнеса. От технического SEO до настройки рекламных кампаний — всё для роста вашей компании.",
      ],
      trustLine: "100+ проектов · 10+ лет · Алматы",
      primaryCta: "Начать",
      secondaryCta: "Услуги",
      note: "Для компаний, которым нужен не просто сайт, а управляемая система продаж в интернете.",
      stats: [
        { value: "100+", label: "проектов" },
        { value: "10+", label: "лет опыта" },
        { value: "KZ", label: "Алматы и весь Казахстан" },
      ],
      floating: [
        { label: "SEO-продвижение", value: "Топ поисковых систем" },
        { label: "Разработка сайтов", value: "Лендинги и корпоративные сайты" },
        { label: "Google Ads", value: "Кампании с аналитикой" },
      ],
    },
    outcomes: {
      eyebrow: "Что получает бизнес",
      title: "Упаковываем digital так, чтобы он продавал, измерялся и масштабировался.",
      items: [
        {
          title: "Больше заявок",
          description: "Страницы, реклама и SEO собираются вокруг понятного оффера и конверсии.",
        },
        {
          title: "Прозрачная аналитика",
          description: "Видно, откуда приходят клиенты, сколько стоит лид и что улучшать дальше.",
        },
        {
          title: "Система вместо хаоса",
          description: "Сайт, формы, Telegram, реклама и отчеты работают как единый процесс.",
        },
      ],
    },
    work: {
      eyebrow: "Портфолио",
      title: "Избранные работы",
      subtitle: "Кейсы, которыми гордимся",
      viewAll: "Смотреть все",
      items: [
        {
          title: "Motor-Land.kz",
          industry: "ecommerce",
          description: "Корпоративный сайт продажи контрактных двигателей",
          href: "/portfolio/motor-land",
        },
        {
          title: "AutoCore (iOS + macOS)",
          industry: "b2b",
          description: "Кроссплатформенное приложение управления автопроцессами",
          href: "/portfolio/autocore",
        },
        {
          title: "UrbanFrame Development",
          industry: "real estate",
          description: "Лендинг застройщика с заявками и презентацией ЖК",
          href: "/portfolio/urbanframe",
        },
        {
          title: "LakeView Hotel",
          industry: "hospitality",
          description: "Бутик-отель с премиальной страницей бронирования",
          href: "/portfolio/lakeview",
        },
      ],
    },
    services: {
      eyebrow: "Услуги",
      title: "Комплексное digital-продвижение бизнеса",
      subtitle:
        "Три ключевых направления главной страницы: SEO, разработка и контекстная реклама.",
      items: [
        {
          title: "SEO",
          description:
            "Техническая оптимизация, контент, локальное продвижение и аналитика для роста органического трафика.",
          href: serviceLinks.seo,
        },
        {
          title: "Разработка",
          description:
            "Продающие лендинги, корпоративные сайты, интернет-магазины и цифровые продукты под задачи бизнеса.",
          href: "/services#development",
        },
        {
          title: "Google Ads",
          description:
            "Настройка рекламных кампаний, гипотезы, оптимизация бюджета и прозрачная отчетность.",
          href: serviceLinks.ads,
        },
      ],
    },
    process: {
      eyebrow: "Процесс",
      title: "От идеи до заявок без лишней суеты.",
      steps: [
        ["01", "Диагностика", "Разбираем нишу, спрос, конкурентов и текущие точки потери заявок."],
        ["02", "Упаковка", "Формируем структуру, оффер, визуальный язык и сценарии конверсии."],
        ["03", "Запуск", "Собираем сайт, подключаем формы, аналитику, SEO и рекламные каналы."],
        ["04", "Рост", "Смотрим данные, усиливаем страницы и масштабируем то, что приносит заявки."],
      ],
    },
    contact: {
      eyebrow: "Связаться",
      title: "Расскажите о проекте",
      subtitle: "Оставьте контакты, и мы свяжемся с вами в течение 2 часов.",
      workingHours: "Пн-Пт, 10:00-19:00 (GMT+5)",
      channelsTitle: "Каналы связи",
      formTitle: "Home Contact Form",
      fields: {
        name: "Имя",
        namePlaceholder: "Иван",
        country: "Код страны",
        phone: "Телефон",
        phonePlaceholder: "xxx-xxx-xx-xx",
        contactMethod: "Способ связи",
        messenger: "Мессенджер",
        call: "Звонок",
        submit: "Отправить заявку",
        honeypot: "Website",
      },
      channels: [
        { label: "Телефон", value: siteConfig.contacts.phone, href: siteConfig.contacts.phoneHref },
        { label: "Email", value: siteConfig.contacts.email, href: `mailto:${siteConfig.contacts.email}` },
        { label: "WhatsApp", value: "+7 706 606 39 21", href: siteConfig.contacts.whatsapp },
        { label: "Telegram", value: "@victhefise", href: siteConfig.contacts.telegram },
      ],
    },
    footer: {
      description:
        "Маркетинговое агентство в Алматы: SEO, разработка сайтов, контекстная реклама и аналитика.",
      servicesTitle: "Услуги",
      companyTitle: "Компания",
      contactsTitle: "Контакты",
      workingHours: "Пн-Пт, 10:00-19:00",
      rights: "All rights reserved.",
      backToTop: "Наверх",
      services: [
        { label: "SEO", href: serviceLinks.seo },
        { label: "Google Ads", href: serviceLinks.ads },
        { label: "Лендинги", href: serviceLinks.landing },
        { label: "E-commerce", href: serviceLinks.ecommerce },
        { label: "Корпоративные сайты", href: serviceLinks.corporate },
        { label: "iOS-разработка", href: serviceLinks.ios },
      ],
      company: [
        { label: "О нас", href: "/about" },
        { label: "Портфолио", href: "/portfolio" },
        { label: "Блог", href: "/blog" },
        { label: "FAQ", href: "/faq" },
        { label: "Вакансии", href: "/vacancies" },
        { label: "Калькулятор", href: "/calculator" },
        { label: "Политика", href: "/privacy" },
      ],
    },
  },
  en: {
    nav: {
      desktop: [
        { label: "Portfolio", href: "/portfolio" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
      ],
      burger: [
        { label: "Portfolio", href: "/portfolio" },
        { label: "Services", href: "/services" },
        { label: "SEO", href: "/seo" },
        { label: "Google Ads", href: "/ads" },
        { label: "Landing pages", href: "/landing-page-development" },
        { label: "E-commerce", href: "/ecommerce-development" },
        { label: "Corporate sites", href: "/corporate-website-development" },
        { label: "iOS development", href: "/ios-razrabotka-swift-swiftui" },
        { label: "Calculator", href: "/calculator" },
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/faq" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
      cta: "Start project",
      burgerCta: "Contact",
      menu: "Menu",
      account: {
        label: "Account",
        login: "Login",
        register: "Register",
      },
    },
    hero: {
      eyebrow: "Digital agency · Almaty · Kazakhstan",
      headline: {
        first: "Websites, ads and SEO",
        second: "built to win clients",
      },
      descriptions: [
        "SEO promotion, website development and marketing strategies that deliver results. We work with clients throughout Kazakhstan: Almaty, Astana, Shymkent and other cities. Your success is our mission.",
        "Professional digital agency with over 10 years of experience. We help businesses grow online through SEO, contextual advertising and development.",
        "Comprehensive solutions for digital promotion of your business. From technical SEO to advertising campaign setup — everything for your company's growth.",
      ],
      trustLine: "100+ projects · 10+ years · Almaty",
      primaryCta: "Get Started",
      secondaryCta: "Services",
      note: "For teams that need more than a website: a measurable digital sales system.",
      stats: [
        { value: "100+", label: "projects" },
        { value: "10+", label: "years of experience" },
        { value: "KZ", label: "Almaty and Kazakhstan" },
      ],
      floating: [
        { label: "SEO promotion", value: "Search visibility" },
        { label: "Website development", value: "Landing and corporate sites" },
        { label: "Google Ads", value: "Campaigns with analytics" },
      ],
    },
    outcomes: {
      eyebrow: "Business outcomes",
      title: "We package digital growth so it sells, measures and scales.",
      items: [
        {
          title: "More qualified leads",
          description: "Pages, ads and SEO are built around a clear offer and conversion path.",
        },
        {
          title: "Transparent analytics",
          description: "You see where clients come from, what a lead costs and what to improve next.",
        },
        {
          title: "A system, not chaos",
          description: "Website, forms, Telegram, ads and reports work as one operating flow.",
        },
      ],
    },
    work: {
      eyebrow: "Portfolio",
      title: "Selected work",
      subtitle: "Case studies we're proud of",
      viewAll: "View all work",
      items: [
        {
          title: "Motor-Land.kz",
          industry: "ecommerce",
          description: "Corporate website for contract engine sales",
          href: "/portfolio/motor-land",
        },
        {
          title: "AutoCore (iOS + macOS)",
          industry: "b2b",
          description: "Cross-platform app for automotive process management",
          href: "/portfolio/autocore",
        },
        {
          title: "UrbanFrame Development",
          industry: "real estate",
          description: "Developer landing page with leads and residential presentation",
          href: "/portfolio/urbanframe",
        },
        {
          title: "LakeView Hotel",
          industry: "hospitality",
          description: "Boutique hotel with a premium booking page",
          href: "/portfolio/lakeview",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Full-funnel digital growth for modern businesses",
      subtitle:
        "The homepage keeps the original three service pillars: SEO, development and Google Ads.",
      items: [
        {
          title: "SEO",
          description:
            "Technical optimization, content, local search and analytics for compounding organic growth.",
          href: serviceLinks.seo,
        },
        {
          title: "Development",
          description:
            "Landing pages, corporate websites, e-commerce and digital products built around business goals.",
          href: "/services#development",
        },
        {
          title: "Google Ads",
          description:
            "Campaign setup, testing, budget optimization and transparent reporting.",
          href: serviceLinks.ads,
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "From idea to leads without unnecessary noise.",
      steps: [
        ["01", "Diagnose", "We map demand, competitors and the places where leads are currently lost."],
        ["02", "Package", "We shape structure, offer, visual language and conversion scenarios."],
        ["03", "Launch", "We build the site, connect forms, analytics, SEO and acquisition channels."],
        ["04", "Scale", "We read the data, improve pages and scale what generates leads."],
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us about your project",
      subtitle: "Leave your contacts, and we will get back to you within 2 hours.",
      workingHours: "Mon-Fri, 10:00-19:00 (GMT+5)",
      channelsTitle: "Contact channels",
      formTitle: "Home Contact Form",
      fields: {
        name: "Name",
        namePlaceholder: "John",
        country: "Country code",
        phone: "Phone",
        phonePlaceholder: "xxx-xxx-xx-xx",
        contactMethod: "Contact method",
        messenger: "Messenger",
        call: "Call",
        submit: "Send request",
        honeypot: "Website",
      },
      channels: [
        { label: "Phone", value: siteConfig.contacts.phone, href: siteConfig.contacts.phoneHref },
        { label: "Email", value: siteConfig.contacts.email, href: `mailto:${siteConfig.contacts.email}` },
        { label: "WhatsApp", value: "+7 706 606 39 21", href: siteConfig.contacts.whatsapp },
        { label: "Telegram", value: "@victhefise", href: siteConfig.contacts.telegram },
      ],
    },
    footer: {
      description:
        "A marketing agency in Almaty: SEO, website development, paid ads and analytics.",
      servicesTitle: "Services",
      companyTitle: "Company",
      contactsTitle: "Contacts",
      workingHours: "Mon-Fri, 10:00-19:00",
      rights: "All rights reserved.",
      backToTop: "Back to top",
      services: [
        { label: "SEO", href: serviceLinks.seo },
        { label: "Google Ads", href: serviceLinks.ads },
        { label: "Landing pages", href: serviceLinks.landing },
        { label: "E-commerce", href: serviceLinks.ecommerce },
        { label: "Corporate websites", href: serviceLinks.corporate },
        { label: "iOS development", href: serviceLinks.ios },
      ],
      company: [
        { label: "About", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/faq" },
        { label: "Careers", href: "/vacancies" },
        { label: "Calculator", href: "/calculator" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
  },
} as const;

export function getHomeContent(locale: string) {
  return homeContent[locale === "en" ? "en" : "ru"];
}
