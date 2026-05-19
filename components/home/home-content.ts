import { siteConfig } from "@/lib/site-config";

export type HomeLocale = "ru" | "en";

export type HomeContent = (typeof homeContent)[HomeLocale];

const serviceLinks = {
  webDesign: "/web-design-almaty",
  seoAgency: "/seo-agency-almaty",
  branding: "/branding-agency",
  uiUx: "/ui-ux-design",
  mobile: "/mobile-app-development",
  googleAds: "/google-ads-management",
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
      eyebrow: "Web design & SEO · Алматы · Казахстан",
      headline: {
        first: "Агентство веб-дизайна",
        second: "и SEO в Алматы",
      },
      descriptions: [
        "Разрабатываем сайты, настраиваем SEO и Google Ads для бизнеса в Алматы и по всему Казахстану. Фокус на заявках, аналитике и измеримом росте.",
      ],
      trustLine: "100+ проектов · 10+ лет · Алматы",
      primaryCta: "Получить расчёт",
      secondaryCta: "Услуги",
      note: "Веб-дизайн, брендинг, UI/UX, SEO, реклама и мобильные приложения — одной командой.",
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
      title: "Digital-услуги для роста бизнеса в Казахстане",
      subtitle: "Отдельные страницы под каждое направление — без размытой подачи «мы всё делаем».",
      items: [
        {
          title: "Веб-дизайн",
          description: "UI, структура и визуал сайта под конверсию и SEO.",
          href: serviceLinks.webDesign,
        },
        {
          title: "SEO-агентство",
          description: "Продвижение в Google и Яндекс с фокусом на заявки.",
          href: serviceLinks.seoAgency,
        },
        {
          title: "Брендинг",
          description: "Айдентика и позиционирование перед запуском сайта.",
          href: serviceLinks.branding,
        },
        {
          title: "UI/UX",
          description: "Прототипы и сценарии, которые снижают отказы.",
          href: serviceLinks.uiUx,
        },
        {
          title: "Google Ads",
          description: "Быстрые заявки из поиска с прозрачным CPL.",
          href: serviceLinks.googleAds,
        },
        {
          title: "Мобильные приложения",
          description: "iOS на Swift/SwiftUI для MVP и бизнес-продуктов.",
          href: serviceLinks.mobile,
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Частые вопросы перед стартом проекта",
      subtitle: "Коротко о сроках, SEO, рекламе и формате работы в Алматы.",
      viewAll: "Все вопросы и ответы",
      items: [
        {
          question: "Сколько стоит сайт в Алматы?",
          answer:
            "Зависит от типа: лендинг, корпоративный сайт или магазин. После брифа даём вилку и этапы — без скрытых доплат в смете.",
        },
        {
          question: "Когда SEO начнёт приносить заявки?",
          answer: "Первые сигналы обычно через 3–4 месяца. Для быстрого спроса параллельно подключаем Google Ads.",
        },
        {
          question: "Работаете только в Алматы?",
          answer: "Базируемся в Алматы, ведём проекты онлайн по всему Казахстану и с зарубежными клиентами.",
        },
        {
          question: "Можно заказать только SEO или только сайт?",
          answer: "Да. Часто начинаем с аудита или MVP-лендинга, затем масштабируем каналы по данным.",
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
        { label: "Веб-дизайн", href: serviceLinks.webDesign },
        { label: "SEO Алматы", href: serviceLinks.seoAgency },
        { label: "Брендинг", href: serviceLinks.branding },
        { label: "UI/UX", href: serviceLinks.uiUx },
        { label: "Google Ads", href: serviceLinks.googleAds },
        { label: "Мобильные приложения", href: serviceLinks.mobile },
        { label: "Лендинги", href: serviceLinks.landing },
        { label: "Корпоративные сайты", href: serviceLinks.corporate },
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
      eyebrow: "Web design & SEO · Almaty · Kazakhstan",
      headline: {
        first: "Web design & SEO agency",
        second: "in Almaty",
      },
      descriptions: [
        "We build websites, run SEO and Google Ads for businesses in Almaty and across Kazakhstan — focused on leads and measurable growth.",
      ],
      trustLine: "100+ projects · 10+ years · Almaty",
      primaryCta: "Get a quote",
      secondaryCta: "Services",
      note: "Web design, branding, UI/UX, SEO, ads and mobile apps — one team.",
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
      title: "Digital services for growth in Kazakhstan",
      subtitle: "Dedicated pages per service — clear intent for search and buyers.",
      items: [
        {
          title: "Web design",
          description: "UI, structure and visuals built for conversion and SEO.",
          href: serviceLinks.webDesign,
        },
        {
          title: "SEO agency",
          description: "Organic growth in Google and Yandex with lead focus.",
          href: serviceLinks.seoAgency,
        },
        {
          title: "Branding",
          description: "Identity and positioning before your site launch.",
          href: serviceLinks.branding,
        },
        {
          title: "UI/UX",
          description: "Prototypes and flows that reduce drop-off.",
          href: serviceLinks.uiUx,
        },
        {
          title: "Google Ads",
          description: "Fast search demand with transparent CPL.",
          href: serviceLinks.googleAds,
        },
        {
          title: "Mobile apps",
          description: "iOS with Swift/SwiftUI for MVP and business products.",
          href: serviceLinks.mobile,
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions before we start",
      subtitle: "Timelines, SEO, ads and how we work from Almaty.",
      viewAll: "Full FAQ",
      items: [
        {
          question: "How much does a website cost in Almaty?",
          answer: "Depends on scope: landing, corporate site or store. We quote after a short brief.",
        },
        {
          question: "When will SEO bring leads?",
          answer: "Early signals in 3–4 months. For faster demand we add Google Ads in parallel.",
        },
        {
          question: "Almaty only?",
          answer: "Based in Almaty, we work remotely across Kazakhstan and internationally.",
        },
        {
          question: "Can we hire you for SEO or web only?",
          answer: "Yes. Many clients start with an audit or MVP landing, then scale channels.",
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
        { label: "Web design", href: serviceLinks.webDesign },
        { label: "SEO Almaty", href: serviceLinks.seoAgency },
        { label: "Branding", href: serviceLinks.branding },
        { label: "UI/UX", href: serviceLinks.uiUx },
        { label: "Google Ads", href: serviceLinks.googleAds },
        { label: "Mobile apps", href: serviceLinks.mobile },
        { label: "Landing pages", href: serviceLinks.landing },
        { label: "Corporate websites", href: serviceLinks.corporate },
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
