import type { SeoLocale } from "@/lib/seo";
import type { ServiceSiloPath } from "@/lib/seo-constants";

export type ServiceSiloKey =
  | "web-design-almaty"
  | "seo-agency-almaty"
  | "branding-agency"
  | "ui-ux-design"
  | "mobile-app-development"
  | "google-ads-management";

export const serviceSiloPathByKey: Record<ServiceSiloKey, ServiceSiloPath> = {
  "web-design-almaty": "/web-design-almaty",
  "seo-agency-almaty": "/seo-agency-almaty",
  "branding-agency": "/branding-agency",
  "ui-ux-design": "/ui-ux-design",
  "mobile-app-development": "/mobile-app-development",
  "google-ads-management": "/google-ads-management",
};

type SiloSection = {
  title: string;
  body: string;
  bullets?: string[];
};

type SiloFaq = { question: string; answer: string };

export type ServiceSiloContent = {
  path: ServiceSiloPath;
  eyebrow: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  sections: SiloSection[];
  faq: SiloFaq[];
  relatedLinks: { label: string; href: string }[];
  ctaTitle: string;
  ctaText: string;
  serviceType: string;
};

const silos: Record<SeoLocale, Record<ServiceSiloKey, ServiceSiloContent>> = {
  ru: {
    "web-design-almaty": {
      path: "/web-design-almaty",
      eyebrow: "Веб-дизайн · Алматы",
      h1: "Веб-дизайн сайтов в Алматы — под заявки и SEO",
      intro:
        "Проектируем структуру, UI и визуал коммерческих сайтов для бизнеса в Алматы и Казахстане. Дизайн сразу учитывает конверсию, мобильную версию и передачу в разработку на Next.js.",
      metaTitle: "Веб-дизайн в Алматы | NovaCreator Studio",
      metaDescription:
        "Веб-дизайн сайтов в Алматы: прототип, UI, адаптив и handoff в разработку. Для лендингов, корпоративных сайтов и e-commerce.",
      serviceType: "Web design",
      sections: [
        {
          title: "Что входит в веб-дизайн",
          body: "Мы не рисуем «красивую картинку» отдельно от бизнес-задачи. Каждый экран отвечает на вопрос клиента и ведёт к заявке.",
          bullets: [
            "Аудит ниши, конкурентов и текущего сайта",
            "Wireframe и структура страниц под SEO",
            "UI в Figma, дизайн-система и адаптив",
            "Handoff разработчикам с состояниями форм и CTA",
          ],
        },
        {
          title: "Для каких проектов подходит",
          body: "Работаем с B2B, услугами, e-commerce и локальным бизнесом в Алматы, Астане и по всему KZ.",
          bullets: [
            "Лендинги под Google Ads и SEO",
            "Корпоративные сайты с услугами и кейсами",
            "Интернет-магазины с каталогом и фильтрами",
            "Редизайн устаревших сайтов с потерей конверсии",
          ],
        },
        {
          title: "Связка с разработкой и продвижением",
          body: "Дизайн передаётся в нашу же команду разработки и SEO — без разрыва между макетом и продакшеном.",
          bullets: [
            "Скорость и Core Web Vitals закладываются на этапе UI",
            "Тексты и блоки доверия согласуются до вёрстки",
            "После запуска — SEO и реклама в одной аналитике",
          ],
        },
      ],
      faq: [
        {
          question: "Сколько занимает веб-дизайн сайта?",
          answer: "Лендинг — 5–8 рабочих дней на UI после утверждения структуры. Корпоративный сайт — 2–4 недели в зависимости от числа шаблонов.",
        },
        {
          question: "Работаете только в Алматы?",
          answer: "Офис в Алматы, проекты ведём онлайн по всему Казахстану и с международными клиентами.",
        },
        {
          question: "Можно заказать только дизайн без разработки?",
          answer: "Да, передаём Figma и спецификацию. Чаще клиенты выбирают дизайн + разработку у нас, чтобы не терять качество на handoff.",
        },
      ],
      relatedLinks: [
        { label: "Разработка лендингов", href: "/landing-page-development" },
        { label: "UI/UX проектирование", href: "/ui-ux-design" },
        { label: "Корпоративные сайты", href: "/corporate-website-development" },
        { label: "Портфолио", href: "/portfolio" },
      ],
      ctaTitle: "Обсудить веб-дизайн проекта",
      ctaText: "Опишите нишу и цель — предложим структуру и сроки.",
    },
    "seo-agency-almaty": {
      path: "/seo-agency-almaty",
      eyebrow: "SEO-агентство · Алматы",
      h1: "SEO-агентство в Алматы — продвижение сайтов под заявки",
      intro:
        "Техническое SEO, семантика, контент и локальное продвижение для бизнеса в Казахстане. Фокус на органических заявках из Google и Яндекс, а не на отчёте ради отчёта.",
      metaTitle: "SEO агентство в Алматы | NovaCreator Studio",
      metaDescription:
        "SEO-продвижение сайтов в Алматы и Казахстане: аудит, семантика, контент, локальное SEO и аналитика заявок.",
      serviceType: "SEO services",
      sections: [
        {
          title: "Что делает SEO-агентство NovaCreator",
          body: "Собираем поисковый спрос в систему страниц и внедрений, которые можно измерить в заявках и звонках.",
          bullets: [
            "Технический аудит: индексация, скорость, дубли, schema",
            "Кластеризация коммерческих и информационных запросов",
            "Контент-план и посадочные под услуги и города",
            "Локальное SEO для Алматы и других городов KZ",
          ],
        },
        {
          title: "Когда подключать SEO",
          body: "SEO — долгий канал. Он особенно выгоден, если реклама дорожает или сайт уже готов принимать трафик.",
          bullets: [
            "Новый сайт — SEO-структура с первого дня",
            "Платный трафик есть, органики нет",
            "Конкуренты стабильно в топе по коммерческим запросам",
          ],
        },
        {
          title: "Отчётность и связка с рекламой",
          body: "Ежемесячно смотрим позиции, трафик, конверсии и стоимость лида. При необходимости усиливаем страницы Google Ads.",
          bullets: ["GA4 и цели на формы", "План работ на месяц", "Приоритет страниц с коммерческим intent"],
        },
      ],
      faq: [
        {
          question: "Через сколько месяцев будут заявки из SEO?",
          answer: "Первые сигналы обычно через 3–4 месяца. Устойчивый поток по конкурентным нишам — 6–12 месяцев.",
        },
        {
          question: "Работаете с Яндекс и Google?",
          answer: "Да, учитываем обе системы для KZ: техническая база общая, контент и ссылки — под приоритетную поисковую систему ниши.",
        },
        {
          question: "Чем отличается от страницы /seo?",
          answer: "Это та же команда и процесс. Страница /seo-agency-almaty заточена под запрос «SEO агентство Алматы»; /seo — под общее SEO-продвижение.",
        },
      ],
      relatedLinks: [
        { label: "SEO-продвижение", href: "/seo" },
        { label: "Google Ads", href: "/google-ads-management" },
        { label: "Разработка сайтов", href: "/corporate-website-development" },
        { label: "Блог о SEO", href: "/blog" },
      ],
      ctaTitle: "Заказать SEO-аудит",
      ctaText: "Разберём сайт, семантику и точки роста органики.",
    },
    "branding-agency": {
      path: "/branding-agency",
      eyebrow: "Брендинг · Казахстан",
      h1: "Брендинг и айдентика для бизнеса в Казахстане",
      intro:
        "Помогаем сформулировать позиционирование, визуальную систему и подачу, чтобы сайт и реклама выглядели цельно и вызывали доверие у B2B и B2C аудитории.",
      metaTitle: "Брендинг и айдентика Алматы | NovaCreator Studio",
      metaDescription:
        "Брендинг для бизнеса: позиционирование, логотип, айдентика, гайдлайн и перенос бренда на сайт и рекламу.",
      serviceType: "Branding",
      sections: [
        {
          title: "Что входит в брендинг",
          body: "Бренд — это не только логотип. Это язык, который клиент узнаёт на сайте, в объявлениях и в презентации.",
          bullets: [
            "Позиционирование и отличия от конкурентов",
            "Логотип и базовая айдентика",
            "Цвет, типографика, визуальные паттерны",
            "Гайд для сайта, соцсетей и рекламных креативов",
          ],
        },
        {
          title: "Кому нужен брендинг перед сайтом",
          body: "Особенно важен для новых компаний, ребрендинга и ниш с высокой конкуренцией по доверию.",
          bullets: [
            "Запуск нового продукта или направления",
            "Старый визуал не соответствует уровню услуг",
            "Реклама дорогая из-за слабого первого впечатления",
          ],
        },
        {
          title: "Перенос бренда в digital",
          body: "После айдентики сразу проектируем сайт и посадочные — без потери стиля на этапе разработки.",
          bullets: [
            "Веб-дизайн в единой системе",
            "Шаблоны для контента и кейсов",
            "Подготовка материалов под SEO-страницы",
          ],
        },
      ],
      faq: [
        {
          question: "Делаете только логотип?",
          answer: "Можем, но рекомендуем минимальный бренд-пакет: позиционирование + айдентика + правила для digital.",
        },
        {
          question: "Сколько длится брендинг?",
          answer: "Базовый пакет — 3–5 недель. Полный бренд с исследованием — до 8 недель.",
        },
        {
          question: "Брендинг без сайта имеет смысл?",
          answer: "Да, если готовится запуск или ребрендинг. Мы часто связуем бренд сразу с архитектурой будущего сайта.",
        },
      ],
      relatedLinks: [
        { label: "Веб-дизайн", href: "/web-design-almaty" },
        { label: "UI/UX", href: "/ui-ux-design" },
        { label: "Корпоративный сайт", href: "/corporate-website-development" },
        { label: "О компании", href: "/about" },
      ],
      ctaTitle: "Обсудить брендинг",
      ctaText: "Расскажите о компании — предложим формат и этапы.",
    },
    "ui-ux-design": {
      path: "/ui-ux-design",
      eyebrow: "UI/UX · Продукт и сайты",
      h1: "UI/UX-дизайн сайтов и приложений — проектирование под конверсию",
      intro:
        "Проектируем сценарии пользователя, прототипы и интерфейсы, чтобы снизить трение на пути к заявке, покупке или регистрации.",
      metaTitle: "UI/UX дизайн Алматы | NovaCreator Studio",
      metaDescription:
        "UI/UX проектирование: исследование, прототип, usability, дизайн интерфейсов для сайтов и мобильных приложений.",
      serviceType: "UI/UX design",
      sections: [
        {
          title: "Этапы UI/UX работы",
          body: "Начинаем с задачи бизнеса и поведения пользователя, затем переходим к визуалу.",
          bullets: [
            "Карта сценариев и CJM",
            "Wireframes и кликабельный прототип",
            "UI-kit и адаптивные макеты",
            "Usability-ревью перед разработкой",
          ],
        },
        {
          title: "Для сайтов и приложений",
          body: "Один подход к продукту: понятная навигация, формы, состояния ошибок и мобильный UX.",
          bullets: [
            "Корпоративные сайты и лендинги",
            "E-commerce и личные кабинеты",
            "iOS/Android MVP",
          ],
        },
        {
          title: "Измерение после запуска",
          body: "Подключаем аналитику событий и смотрим, где пользователи отваливаются.",
          bullets: ["GA4 / Firebase events", "A/B гипотезы на ключевых экранах", "Итерации по данным"],
        },
      ],
      faq: [
        {
          question: "Чем UI/UX отличается от веб-дизайна?",
          answer: "UI/UX глубже в сценарии и логике. Веб-дизайн — визуальная реализация страниц; часто идут вместе.",
        },
        {
          question: "Нужен ли UX для небольшого лендинга?",
          answer: "Да, в мини-формате: один сценарий, один оффер, минимум полей в форме — это уже UX-работа.",
        },
        {
          question: "Делаете UX-аудит существующего сайта?",
          answer: "Да, с отчётом по точкам потери конверсии и приоритетом правок.",
        },
      ],
      relatedLinks: [
        { label: "Веб-дизайн Алматы", href: "/web-design-almaty" },
        { label: "Мобильные приложения", href: "/mobile-app-development" },
        { label: "Лендинги", href: "/landing-page-development" },
      ],
      ctaTitle: "Запросить UX-разбор",
      ctaText: "Покажите текущий сайт или идею продукта.",
    },
    "mobile-app-development": {
      path: "/mobile-app-development",
      eyebrow: "Мобильная разработка",
      h1: "Разработка мобильных приложений для бизнеса в Казахстане",
      intro:
        "Нативные iOS-приложения на Swift/SwiftUI, MVP для проверки гипотез и внутренние продукты с Firebase, API и аналитикой.",
      metaTitle: "Разработка мобильных приложений | NovaCreator Studio",
      metaDescription:
        "iOS-разработка Swift/SwiftUI: MVP, дизайн, backend-интеграции, TestFlight и публикация в App Store.",
      serviceType: "Mobile app development",
      sections: [
        {
          title: "Что разрабатываем",
          body: "Фокус на бизнес-приложениях, а не на развлекательных продуктах без модели монетизации.",
          bullets: [
            "B2B и сервисные приложения",
            "MVP для стартапов KZ",
            "Внутренние инструменты компаний",
            "Синхронизация с веб-кабинетом",
          ],
        },
        {
          title: "Стек и процесс",
          body: "SwiftUI, MVVM, Firebase, REST API, push, авторизация, TestFlight.",
          bullets: [
            "Прототип UI/UX до кода",
            "Спринты 1–2 недели с демо",
            "Публикация и базовая поддержка",
          ],
        },
        {
          title: "Связка с сайтом и маркетингом",
          body: "Лендинг под приложение, SEO и реклама — одной командой.",
          bullets: [
            "Посадочная для App Store",
            "Аналитика установок и лидов",
            "Кейс AutoCore в портфолио",
          ],
        },
      ],
      faq: [
        {
          question: "Только iOS или Android тоже?",
          answer: "Сейчас основной фокус — iOS (Swift). Android обсуждаем под проект; для MVP часто достаточно iOS.",
        },
        {
          question: "Срок MVP?",
          answer: "Обычно 6–8 недель на первую версию с ключевым сценарием.",
        },
        {
          question: "Где посмотреть пример?",
          answer: "В портфолио — кейс AutoCore (iOS + macOS).",
        },
      ],
      relatedLinks: [
        { label: "iOS Swift/SwiftUI", href: "/ios-razrabotka-swift-swiftui" },
        { label: "UI/UX", href: "/ui-ux-design" },
        { label: "Кейс AutoCore", href: "/portfolio/autocore" },
      ],
      ctaTitle: "Обсудить приложение",
      ctaText: "Опишите сценарий и платформу — оценим MVP.",
    },
    "google-ads-management": {
      path: "/google-ads-management",
      eyebrow: "Google Ads · Алматы",
      h1: "Настройка и ведение Google Ads в Алматы",
      intro:
        "Запускаем и оптимизируем контекстную рекламу под заявки: структура кампаний, посадочные, цели, минус-слова и прозрачная отчётность по стоимости лида.",
      metaTitle: "Google Ads Алматы | NovaCreator Studio",
      metaDescription:
        "Настройка и ведение Google Ads в Казахстане: поиск, ремаркетинг, аналитика, оптимизация CPL и связка с SEO.",
      serviceType: "Google Ads management",
      sections: [
        {
          title: "Что входит в ведение Google Ads",
          body: "Реклама работает только в связке с сильной посадочной и корректными целями.",
          bullets: [
            "Семантика и структура кампаний",
            "Объявления и расширения",
            "Цели GA4 / конверсии",
            "Минус-слова и оптимизация ставок",
          ],
        },
        {
          title: "Когда Google Ads оправдан",
          body: "Нужен быстрый спрос, тест оффера или усиление сезона.",
          bullets: [
            "Новый продукт на рынке",
            "SEO ещё не дало трафик",
            "Конкурентный аукцион в нише",
          ],
        },
        {
          title: "Связка с SEO и сайтом",
          body: "Делаем посадочные и дорабатываем конверсию, а не только «крутим ставки».",
          bullets: [
            "Лендинги под группы объявлений",
            "Еженедельные гипотезы",
            "Отчёт по заявкам, не только кликам",
          ],
        },
      ],
      faq: [
        {
          question: "Какой бюджет нужен для старта?",
          answer: "Зависит от ниши. На созвоне оценим CPC в Алматы/KZ и предложим тестовый диапазон.",
        },
        {
          question: "Чем отличается от /ads?",
          answer: "Та же услуга. Эта страница ориентирована на запросы «Google Ads Алматы / ведение».",
        },
        {
          question: "Можно подключить только настройку?",
          answer: "Да, есть разовая настройка. Для стабильного CPL рекомендуем ведение от 2–3 месяцев.",
        },
      ],
      relatedLinks: [
        { label: "Страница Google Ads", href: "/ads" },
        { label: "Лендинги", href: "/landing-page-development" },
        { label: "SEO", href: "/seo-agency-almaty" },
      ],
      ctaTitle: "Запустить Google Ads",
      ctaText: "Разберём нишу, посадочную и цели.",
    },
  },
  en: {
    "web-design-almaty": {
      path: "/web-design-almaty",
      eyebrow: "Web design · Almaty",
      h1: "Web design in Almaty built for leads and SEO",
      intro:
        "We design structure, UI and visuals for commercial websites in Almaty and across Kazakhstan — with conversion, mobile UX and clean handoff to Next.js development.",
      metaTitle: "Web Design Agency in Almaty | NovaCreator Studio",
      metaDescription:
        "Web design in Almaty: wireframes, UI, responsive layouts and dev handoff for landing pages, corporate sites and e-commerce.",
      serviceType: "Web design",
      sections: [
        {
          title: "What is included",
          body: "Every screen is tied to business goals and lead paths — not decoration alone.",
          bullets: [
            "Niche and competitor review",
            "SEO-friendly page structure",
            "Figma UI and responsive layouts",
            "Developer handoff with form states",
          ],
        },
        {
          title: "Best for",
          body: "B2B, services, e-commerce and local businesses in KZ.",
          bullets: ["Ad landing pages", "Corporate websites", "Storefront redesigns"],
        },
        {
          title: "Design + build + growth",
          body: "Same team handles development, SEO and ads after launch.",
          bullets: ["Performance-aware UI", "Trust blocks and copy alignment", "Post-launch analytics"],
        },
      ],
      faq: [
        {
          question: "How long does web design take?",
          answer: "Landing UI: 5–8 business days after structure approval. Corporate sites: 2–4 weeks.",
        },
        {
          question: "Almaty only?",
          answer: "Based in Almaty, we work remotely across Kazakhstan and internationally.",
        },
        {
          question: "Design without development?",
          answer: "Yes — Figma delivery available. Most clients choose design + build with us.",
        },
      ],
      relatedLinks: [
        { label: "Landing pages", href: "/landing-page-development" },
        { label: "UI/UX", href: "/ui-ux-design" },
        { label: "Portfolio", href: "/portfolio" },
      ],
      ctaTitle: "Discuss your web design",
      ctaText: "Share your niche and goals — we will propose structure and timeline.",
    },
    "seo-agency-almaty": {
      path: "/seo-agency-almaty",
      eyebrow: "SEO agency · Almaty",
      h1: "SEO agency in Almaty focused on qualified leads",
      intro:
        "Technical SEO, keyword strategy, content and local search for businesses in Kazakhstan — measured by leads, not vanity rankings.",
      metaTitle: "SEO Agency in Almaty | NovaCreator Studio",
      metaDescription:
        "SEO agency in Almaty: audits, semantics, content, local SEO and lead analytics for Google and Yandex.",
      serviceType: "SEO services",
      sections: [
        {
          title: "Our SEO process",
          body: "We turn search demand into pages and implementations you can measure.",
          bullets: ["Technical audits", "Keyword clusters", "Content and landing pages", "Local SEO for KZ cities"],
        },
        {
          title: "When to invest in SEO",
          body: "Best as a long-term channel alongside a conversion-ready website.",
          bullets: ["New site launches", "Rising ad costs", "Competitors dominating organic"],
        },
        {
          title: "Reporting",
          body: "Monthly visibility on rankings, traffic, conversions and next actions.",
          bullets: ["GA4 goals", "Lead quality review", "Coordination with Google Ads"],
        },
      ],
      faq: [
        {
          question: "How fast are SEO results?",
          answer: "Early signals in 3–4 months; stronger stability often in 6–12 months.",
        },
        {
          question: "Google and Yandex?",
          answer: "Yes — shared technical base, content tuned to your primary search engine.",
        },
        {
          question: "Difference vs /seo?",
          answer: "Same team. This page targets “SEO agency Almaty” intent.",
        },
      ],
      relatedLinks: [
        { label: "SEO services", href: "/seo" },
        { label: "Google Ads", href: "/google-ads-management" },
        { label: "Blog", href: "/blog" },
      ],
      ctaTitle: "Request SEO audit",
      ctaText: "We will review your site and growth opportunities.",
    },
    "branding-agency": {
      path: "/branding-agency",
      eyebrow: "Branding · Kazakhstan",
      h1: "Branding and identity for businesses in Kazakhstan",
      intro:
        "Positioning, visual identity and brand guidelines so your website and ads look consistent and trustworthy.",
      metaTitle: "Branding Agency Almaty | NovaCreator Studio",
      metaDescription:
        "Branding services: positioning, logo, identity system and digital brand rollout for websites and ads.",
      serviceType: "Branding",
      sections: [
        {
          title: "Branding scope",
          body: "Brand is how customers recognize you across touchpoints.",
          bullets: ["Positioning", "Logo and identity", "Typography and color", "Digital brand guide"],
        },
        {
          title: "When branding matters",
          body: "Launches, rebrands and high-trust niches benefit most.",
          bullets: ["New product lines", "Outdated visual vs offer", "Weak ad performance from trust gap"],
        },
        {
          title: "Into digital execution",
          body: "We carry identity into web design and marketing assets.",
          bullets: ["Web design system", "Case study templates", "SEO page visuals"],
        },
      ],
      faq: [
        {
          question: "Logo only?",
          answer: "Possible, but we recommend positioning + identity + digital rules.",
        },
        {
          question: "Timeline?",
          answer: "Basic package: 3–5 weeks. Full brand program: up to 8 weeks.",
        },
        {
          question: "Branding without a website?",
          answer: "Yes — often paired with future site architecture planning.",
        },
      ],
      relatedLinks: [
        { label: "Web design", href: "/web-design-almaty" },
        { label: "About", href: "/about" },
      ],
      ctaTitle: "Talk about branding",
      ctaText: "Tell us about your company and market.",
    },
    "ui-ux-design": {
      path: "/ui-ux-design",
      eyebrow: "UI/UX",
      h1: "UI/UX design for websites and apps that convert",
      intro:
        "User flows, prototypes and interfaces that reduce friction on the path to leads, purchases or sign-ups.",
      metaTitle: "UI/UX Design Agency Almaty | NovaCreator Studio",
      metaDescription:
        "UI/UX design: research, prototypes, usability and interface design for web and mobile products.",
      serviceType: "UI/UX design",
      sections: [
        {
          title: "UX process",
          body: "Business goals first, visuals second.",
          bullets: ["Journey mapping", "Wireframes", "UI kit", "Pre-launch usability review"],
        },
        {
          title: "Web and mobile",
          body: "One product mindset for sites and apps.",
          bullets: ["Corporate sites", "E-commerce", "iOS MVP"],
        },
        {
          title: "After launch",
          body: "Event analytics and iteration on drop-off points.",
          bullets: ["GA4 / Firebase", "Hypothesis-driven improvements"],
        },
      ],
      faq: [
        {
          question: "UI/UX vs web design?",
          answer: "UX is scenario depth; web design is page visual execution — often combined.",
        },
        {
          question: "UX for small landings?",
          answer: "Yes — single-offer, minimal forms is still UX work.",
        },
        {
          question: "UX audit available?",
          answer: "Yes, with prioritized fixes.",
        },
      ],
      relatedLinks: [
        { label: "Web design", href: "/web-design-almaty" },
        { label: "Mobile apps", href: "/mobile-app-development" },
      ],
      ctaTitle: "Request UX review",
      ctaText: "Share your product or website URL.",
    },
    "mobile-app-development": {
      path: "/mobile-app-development",
      eyebrow: "Mobile development",
      h1: "Mobile app development for business in Kazakhstan",
      intro:
        "Native iOS with Swift/SwiftUI, MVP launches, Firebase, APIs and App Store delivery.",
      metaTitle: "Mobile App Development | NovaCreator Studio",
      metaDescription:
        "iOS app development: MVP, SwiftUI, integrations, TestFlight and App Store launch.",
      serviceType: "Mobile app development",
      sections: [
        {
          title: "What we build",
          body: "Business and service apps with clear ROI scenarios.",
          bullets: ["B2B tools", "MVPs", "Internal ops apps"],
        },
        {
          title: "Stack",
          body: "SwiftUI, MVVM, Firebase, REST, push notifications.",
          bullets: ["UX before code", "Sprint demos", "Store submission"],
        },
        {
          title: "Marketing fit",
          body: "Landing pages, ads and SEO by the same team.",
          bullets: ["App launch pages", "Install analytics", "AutoCore case study"],
        },
      ],
      faq: [
        {
          question: "iOS only?",
          answer: "Primary focus is iOS; Android discussed per project.",
        },
        {
          question: "MVP timeline?",
          answer: "Typically 6–8 weeks for core flow.",
        },
        {
          question: "Case study?",
          answer: "See AutoCore in our portfolio.",
        },
      ],
      relatedLinks: [
        { label: "iOS page", href: "/ios-razrabotka-swift-swiftui" },
        { label: "Portfolio AutoCore", href: "/portfolio/autocore" },
      ],
      ctaTitle: "Discuss your app",
      ctaText: "Describe platform and core scenario.",
    },
    "google-ads-management": {
      path: "/google-ads-management",
      eyebrow: "Google Ads · Almaty",
      h1: "Google Ads management in Almaty for measurable leads",
      intro:
        "Campaign setup and ongoing optimization: structure, landing pages, goals, negatives and CPL reporting.",
      metaTitle: "Google Ads Management Almaty | NovaCreator Studio",
      metaDescription:
        "Google Ads in Kazakhstan: search, remarketing, conversion tracking and landing page optimization.",
      serviceType: "Google Ads management",
      sections: [
        {
          title: "Management scope",
          body: "Ads need strong landing pages and correct conversion tracking.",
          bullets: ["Keyword structure", "Ad copy", "GA4 goals", "Bid and query optimization"],
        },
        {
          title: "When to use paid search",
          body: "Fast demand, offer tests or seasonal pushes.",
          bullets: ["Product launches", "Pre-SEO phase", "Competitive auctions"],
        },
        {
          title: "With SEO and web",
          body: "We improve pages, not only bids.",
          bullets: ["Dedicated landings", "Weekly hypotheses", "Lead reporting"],
        },
      ],
      faq: [
        {
          question: "Minimum budget?",
          answer: "Depends on niche — we estimate CPC for KZ on a call.",
        },
        {
          question: "Vs /ads page?",
          answer: "Same service; this URL targets management-intent queries.",
        },
        {
          question: "Setup only?",
          answer: "Yes; ongoing management recommended for stable CPL.",
        },
      ],
      relatedLinks: [
        { label: "Ads service page", href: "/ads" },
        { label: "Landing pages", href: "/landing-page-development" },
      ],
      ctaTitle: "Launch Google Ads",
      ctaText: "We will review niche, landing page and goals.",
    },
  },
};

export function getServiceSilo(key: ServiceSiloKey, locale: string): ServiceSiloContent {
  const normalized = locale === "en" ? "en" : "ru";
  return silos[normalized][key];
}

export function getAllServiceSiloKeys(): ServiceSiloKey[] {
  return Object.keys(silos.ru) as ServiceSiloKey[];
}
