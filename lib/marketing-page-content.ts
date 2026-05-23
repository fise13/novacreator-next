import { siteConfig } from "@/lib/site-config";

export type MarketingLocale = "ru" | "en";

export type MarketingPageKey =
  | "services"
  | "about"
  | "contact"
  | "faq"
  | "vacancies"
  | "privacy"
  | "seo"
  | "ads"
  | "landing"
  | "ecommerce"
  | "corporate"
  | "ios"
  | "calculator"
  | "blog"
  | "portfolio";

type MarketingCard = {
  title: string;
  text: string;
  href?: string;
  meta?: string;
  bullets?: string[];
};

export type MarketingSection = {
  id?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  variant?:
    | "default"
    | "spotlight"
    | "compact"
    | "cta"
    | "editorial"
    | "split"
    | "timeline"
    | "mosaic"
    | "plain"
    | "quote"
    | "featureBand";
  facts?: MarketingCard[];
  cards?: MarketingCard[];
  list?: string[];
  steps?: MarketingCard[];
  pricing?: MarketingCard[];
  faq?: MarketingCard[];
  cta?: {
    title: string;
    text: string;
    href: string;
    label: string;
  };
  form?: "contact";
};

export type MarketingPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta?: string;
  sections: MarketingSection[];
};

const contacts = [
  { title: "Телефон", titleEn: "Phone", text: siteConfig.contacts.phone, href: siteConfig.contacts.phoneHref },
  { title: "Email", titleEn: "Email", text: siteConfig.contacts.email, href: `mailto:${siteConfig.contacts.email}` },
  { title: "WhatsApp", titleEn: "WhatsApp", text: "+7 706 606 39 21", href: siteConfig.contacts.whatsapp },
  { title: "Telegram", titleEn: "Telegram", text: "@victhefise", href: siteConfig.contacts.telegram },
];

const pageContent: Record<MarketingLocale, Record<MarketingPageKey, MarketingPageContent>> = {
  ru: {
    services: {
      eyebrow: "Услуги",
      title: "Полная система digital-роста для бизнеса",
      description:
        "Проектируем сайт, трафик, аналитику и формы как единую воронку: от первого клика до заявки в Telegram или CRM.",
      primaryCta: "Обсудить проект",
      secondaryCta: "Подобрать формат",
      sections: [
        {
          title: "Что входит в комплекс",
          variant: "spotlight",
          body: "Страница услуг собрана как полноценная карта роста: SEO, разработка, Google Ads, маркетинг, аналитика, гарантии и переходы на детальные лендинги.",
          facts: [
            { title: "100+", text: "проектов в разработке, SEO, рекламе и аналитике" },
            { title: "10+ лет", text: "опыт продвижения и разработки для бизнеса" },
            { title: "KZ market", text: "структура и аналитика адаптированы под Казахстан" },
          ],
          cards: [
            {
              title: "Стратегия до дизайна",
              text: "Сначала фиксируем цель: заявки, продажи, доверие, поиск или запуск MVP. После этого выбираем стек и каналы.",
              bullets: ["Диагностика ниши", "Аудит текущего сайта", "План запуска"],
            },
            {
              title: "Сайт как центр системы",
              text: "Посадочные страницы, корпоративный сайт или магазин собираются вокруг понятного оффера, формы и аналитики.",
              bullets: ["Next.js структура", "Адаптивный UI", "SEO-база и скорость"],
            },
            {
              title: "Трафик и измерение",
              text: "SEO и реклама не живут отдельно: подключаем цели, отчёты и смотрим, какие страницы реально дают заявки.",
              bullets: ["GA4/цели", "Google Ads", "Отчёты и гипотезы"],
            },
          ],
        },
        {
          id: "seo",
          title: "SEO-продвижение",
          variant: "spotlight",
          body: "Долгосрочный канал заявок из Google и Яндекс. Подходит бизнесу, которому важно снижать зависимость от рекламы и постепенно занимать коммерческие запросы.",
          cards: [
            { title: "Техническая база", text: "Индексация, скорость, структура, дубль-страницы, sitemap, robots и Core Web Vitals." },
            { title: "Семантика и контент", text: "Собираем спрос, группируем запросы и превращаем их в страницы, разделы и статьи." },
            { title: "Локальное SEO", text: "Алматы, Астана, Шымкент и другие города Казахстана, где важна локальная выдача." },
            { title: "Отчётность", text: "Позиции, органический трафик, заявки, стоимость лида и понятные задачи на следующий месяц.", href: "/seo" },
          ],
        },
        {
          id: "development",
          title: "Разработка",
          variant: "spotlight",
          body: "Сайты и приложения строятся вокруг бизнес-задач: быстро проверить оффер, продавать каталог, презентовать компанию или автоматизировать процессы.",
          cards: [
            { title: "Лендинги", text: "Быстрые страницы для рекламы и проверки оффера.", meta: "leadgen", href: "/landing-page-development", bullets: ["10-14 рабочих дней", "Форма и аналитика", "Сильный CTA"] },
            { title: "Интернет-магазины", text: "Каталог, корзина, заказ, админка и SEO для карточек.", meta: "commerce", href: "/ecommerce-development", bullets: ["Фильтры и каталог", "Checkout", "Интеграции"] },
            { title: "Корпоративные сайты", text: "Сайт компании с услугами, кейсами, блогом, FAQ и формами.", meta: "company", href: "/corporate-website-development", bullets: ["5-15+ страниц", "SEO-структура", "Доверие и заявки"] },
            { title: "iOS-разработка", text: "Нативные приложения на Swift/SwiftUI для MVP и внутренних систем.", meta: "MVP 6-8 недель", href: "/ios-razrabotka-swift-swiftui", bullets: ["SwiftUI", "Firebase", "App Store"] },
          ],
        },
        {
          id: "ads",
          title: "Google Ads",
          variant: "spotlight",
          body: "Платный трафик для быстрого спроса: структура кампаний, объявления, цели, ретаргетинг и регулярная оптимизация.",
          cards: [
            { title: "Настройка", text: "Семантика, группы, объявления, цели, минус-слова и базовая аналитика." },
            { title: "Ведение", text: "Контроль ставок, запросов, аудиторий, гипотез и неэффективных расходов." },
            { title: "Контроль трафика", text: "Следим за запросами, аудиториями и качеством заявок, чтобы не сливать показы впустую.", href: "/ads" },
            { title: "Связка с SEO", text: "Если нужен долгий рост, реклама усиливается SEO-страницами и контентом.", href: "/seo" },
          ],
        },
        {
          id: "marketing",
          title: "Маркетинг и упаковка",
          body: "Помогаем сформулировать оффер, структуру страницы, аргументы доверия и сценарий заявки, чтобы сайт выглядел не просто красиво, а продавал.",
          cards: [
            { title: "Оффер", text: "Формулируем главное обещание и отличия от конкурентов." },
            { title: "Сценарий страницы", text: "Выстраиваем путь: проблема, решение, доказательства, CTA." },
            { title: "Контент", text: "Готовим тексты для услуг, кейсов, FAQ и рекламных блоков." },
            { title: "Аналитика решений", text: "Проверяем, какие блоки помогают пользователю оставить заявку." },
          ],
        },
        {
          id: "analytics",
          title: "Аналитика и гарантии",
          body: "Сайт и рекламные каналы должны быть измеримыми: что приносит заявки, где теряются пользователи и какие гипотезы дают рост.",
          cards: [
            { title: "GA4 и цели", text: "События форм, кликов, переходов и ключевых действий." },
            { title: "Telegram/CRM", text: "Передача заявок в удобный канал без ручной потери контактов." },
            { title: "6 месяцев поддержки", text: "Поддержка после запуска, улучшение страниц и помощь с техническими вопросами." },
            { title: "Пожизненная гарантия", text: "На исправление критичных технических дефектов в согласованной зоне ответственности." },
          ],
          cta: {
            title: "Нужна система, а не просто страница?",
            text: "Разберём текущий сайт, спрос и каналы. После диагностики предложим структуру и план запуска.",
            href: "/contact",
            label: "Получить консультацию",
          },
        },
      ],
    },
    about: {
      eyebrow: "О компании",
      title: "Команда, которая превращает digital в управляемую систему роста",
      description:
        "NovaCreator Studio помогает бизнесу в Казахстане расти через сайты, SEO, рекламу, продуктовую упаковку и измеримую аналитику. Мы не делаем “просто красивые страницы” — мы собираем систему, которая объясняет ценность бизнеса, приводит трафик и помогает получать заявки.",
      primaryCta: "Связаться",
      sections: [
        {
          title: "Кто мы такие",
          variant: "spotlight",
          body: "Мы digital-команда из Алматы, которая проектирует сайты, рекламные каналы и контент вокруг реальных бизнес-целей: заявок, продаж, доверия, повторных обращений и понятной аналитики. В каждом проекте мы соединяем стратегию, UX, визуальный стиль, разработку, SEO и рекламу так, чтобы клиент видел не набор разрозненных задач, а цельную систему роста.",
          facts: [
            { title: "10+ лет", text: "практики в разработке, SEO, рекламе и digital-упаковке" },
            { title: "100+", text: "проектов от лендингов до приложений и e-commerce" },
            { title: "KZ + global", text: "понимание локального рынка и международных digital-паттернов" },
          ],
          cards: [
            { title: "Стратегия перед дизайном", text: "Перед макетами разбираем нишу, конкурентов, аудиторию, оффер и точки, где пользователь принимает решение оставить заявку.", bullets: ["Позиционирование", "Структура воронки", "Контентные акценты"] },
            { title: "Разработка без хаоса", text: "Собираем интерфейс, формы, адаптив, SEO-базу и аналитику в одном процессе, чтобы сайт можно было развивать после релиза.", bullets: ["Next.js / Tailwind", "Performance", "Интеграции"] },
            { title: "Маркетинг после запуска", text: "Смотрим на цифры, усиливаем страницы, подключаем рекламу, расширяем SEO-кластеры и улучшаем стоимость заявки.", bullets: ["GA4", "Google Ads", "SEO-рост"] },
          ],
        },
        {
          title: "Наш опыт и подход",
          body: "Мы работаем с малым и средним бизнесом, B2B-компаниями, e-commerce, сервисными нишами и digital-продуктами. Для одних клиентов важен быстрый лендинг под рекламу, для других — корпоративный сайт с доверием, блогом и SEO-структурой, для третьих — приложение или внутренняя система. Подход меняется, но логика остаётся одинаковой: понятная цель, сильная структура, аккуратный визуал, техническая база и измеримый результат.",
          cards: [
            { title: "Прозрачность", text: "Показываем задачи, решения, отчёты и метрики без тумана. Клиент понимает, что делается и зачем." },
            { title: "Качество", text: "Проектируем структуру, интерфейс, скорость и SEO до запуска, а не пытаемся чинить фундамент после релиза." },
            { title: "Партнёрство", text: "Не просто сдаём сайт, а помогаем улучшать систему после релиза: страницы, трафик, формы, аналитику." },
            { title: "Результаты", text: "Смотрим на заявки, стоимость лида, конверсию, органический рост и качество обращений." },
          ],
        },
        {
          title: "Как устроен наш процесс",
          steps: [
            { title: "Диагностика", text: "Разбираем текущий сайт, спрос, конкурентов, рекламные каналы, аналитику и слабые места воронки.", meta: "1-2 дня" },
            { title: "Архитектура", text: "Формируем структуру страниц, сценарии пользователя, ключевые блоки доверия, CTA и контентные приоритеты.", meta: "2-4 дня" },
            { title: "Дизайн и разработка", text: "Собираем визуальную систему, адаптивную вёрстку, формы, анимации, SEO-базу и интеграции.", meta: "от 10 дней" },
            { title: "Запуск и рост", text: "Проверяем скорость, цели, события, индексацию, запускаем трафик и улучшаем страницы по данным.", meta: "после релиза" },
          ],
        },
        {
          title: "Почему бизнесу удобно работать с нами",
          cards: [
            { title: "Один подрядчик вместо пяти", text: "Дизайн, разработка, SEO, реклама, формы и аналитика не конфликтуют между собой, потому что проектируются в одной системе." },
            { title: "Понятные приоритеты", text: "Мы не перегружаем проект случайными эффектами. Всё, что попадает на страницу, должно помогать доверию, пониманию или заявке." },
            { title: "Готовность к росту", text: "Сайт можно масштабировать: добавлять услуги, кейсы, блог, SEO-страницы, калькулятор, кабинеты и интеграции." },
            { title: "Аккуратная коммуникация", text: "Фиксируем решения, объясняем ограничения и предлагаем варианты, когда у задачи есть несколько путей." },
          ],
          cta: {
            title: "Хотите понять, что улучшить в вашей digital-системе?",
            text: "Покажите текущий сайт или опишите задачу. Мы разберём структуру, трафик, форму заявки и предложим ближайшие улучшения.",
            href: "/contact",
            label: "Получить разбор",
          },
        },
      ],
    },
    contact: {
      eyebrow: "Контакты",
      title: "Свяжитесь с NovaCreator Studio",
      description: "Расскажите о задаче, и мы подскажем формат, сроки и следующий шаг.",
      primaryCta: "Написать в Telegram",
      secondaryCta: "Рассчитать проект",
      sections: [
        {
          title: "Каналы связи",
          body: "Работаем Пн-Пт, 10:00-19:00 (GMT+5). Обычно отвечаем в течение 2 часов.",
          cards: contacts.map((item) => ({ title: item.title, text: item.text, href: item.href })),
        },
        {
          title: "Что отправить в первом сообщении",
          list: [
            "Какая услуга нужна: SEO, сайт, реклама, iOS или комплексно.",
            "Есть ли текущий сайт, аналитика и рекламные кабинеты.",
            "Город, ниша, сроки и желаемый формат запуска.",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Ответы на частые вопросы",
      description: "Коротко о сроках, SEO, разработке, рекламе и запуске проекта.",
      primaryCta: "Задать вопрос",
      sections: [
        {
          title: "SEO",
          cards: [
            { title: "Когда появятся результаты SEO?", text: "Первые улучшения обычно видны через 3-4 месяца, сильный эффект занимает 6-12 месяцев." },
            { title: "Можно ли быстро получить заявки?", text: "Для быстрого спроса лучше Google Ads, а SEO подключать как долгосрочный канал." },
            { title: "Что входит в SEO?", text: "Аудит, технические исправления, структура, контент, ссылки и регулярная аналитика." },
          ],
        },
        {
          title: "Разработка",
          cards: [
            { title: "Сколько делается лендинг?", text: "Обычно 10-14 рабочих дней, сложные страницы с интеграциями занимают 15-20 дней." },
            { title: "Можно ли подключить формы и Telegram?", text: "Да, формы, цели, Telegram-уведомления и базовую аналитику закладываем в запуск." },
          ],
        },
        {
          title: "Общие вопросы",
          cards: [
            { title: "Работаете только в Алматы?", text: "Нет, работаем онлайн по всему Казахстану и с международными проектами." },
            { title: "Есть поддержка после запуска?", text: "Да, предусмотрены поддержка, гарантийный период и дальнейшее развитие страниц." },
            { title: "Можно начать с аудита?", text: "Да, часто начинаем с диагностики сайта, рекламы и аналитики." },
          ],
        },
      ],
    },
    vacancies: {
      eyebrow: "Вакансии",
      title: "Работа и сотрудничество",
      description: "Мы развиваем команду вокруг SEO, разработки, рекламы и контента.",
      primaryCta: "Откликнуться",
      sections: [
        {
          title: "Почему с нами",
          cards: [
            { title: "Удалённый формат", text: "Гибкая работа с понятными задачами и результатами." },
            { title: "Реальные проекты", text: "SEO, сайты, реклама, аналитика и продуктовые задачи." },
            { title: "Рост экспертизы", text: "Разбираем процессы, отчёты, стек и клиентские сценарии." },
            { title: "Честная коммуникация", text: "Фокус на качестве, сроках и прозрачных ожиданиях." },
          ],
        },
        {
          title: "Открытые направления",
          cards: [
            { title: "SEO Specialist", text: "Аудиты, семантика, структура, контент и отчётность.", href: "/contact?type=vacancy&vacancy=SEO%20Specialist" },
            { title: "Web Developer", text: "Next.js, вёрстка, формы, интеграции и performance.", href: "/contact?type=vacancy&vacancy=Web%20Developer" },
            { title: "Contextual Ads Specialist", text: "Google Ads, гипотезы, аналитика и оптимизация кампаний.", href: "/contact?type=vacancy&vacancy=Contextual%20Ads%20Specialist" },
            { title: "Content Manager", text: "Статьи, карточки услуг, структура и SEO-редактура.", href: "/contact?type=vacancy&vacancy=Content%20Manager" },
          ],
        },
      ],
    },
    privacy: {
      eyebrow: "Privacy",
      title: "Политика конфиденциальности",
      description: "Правила обработки данных для сайта, форм заявок и iOS-приложений NovaCreator Studio.",
      primaryCta: "Связаться",
      sections: [
        {
          title: "Основные положения",
          list: [
            "Мы собираем данные, которые пользователь отправляет через формы: имя, телефон, email, услугу и сообщение.",
            "Данные используются для обработки заявки, связи с клиентом, аналитики качества сервиса и улучшения сайта.",
            "Для аналитики могут использоваться Firebase, Google Analytics и сторонние сервисы авторизации.",
            "Пользователь может запросить уточнение, исправление или удаление своих данных.",
            `По вопросам privacy: privacy@novacreatorstudio.com или ${siteConfig.contacts.email}.`,
          ],
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "SEO-продвижение сайтов в Алматы и Казахстане",
      description: "Техническое SEO, семантика, контент, локальное продвижение и аналитика для роста заявок из Google и Яндекс.",
      primaryCta: "Начать SEO",
      secondaryCta: "Быстрее через Ads",
      sections: [
        {
          title: "Когда SEO нужна",
          cards: [
            { title: "Сайт не в выдаче", text: "Есть продукт, но поисковый трафик почти не приносит заявок." },
            { title: "Дорогая реклама", text: "Нужно снизить зависимость от платного трафика." },
            { title: "Конкурентная ниша", text: "Важно постепенно занимать коммерческие запросы." },
            { title: "Контентный рост", text: "Блог и посадочные страницы должны работать на спрос." },
          ],
        },
        {
          title: "Как понять объём SEO",
          body: "Первые улучшения видны по техническим метрикам и индексации, а значимый рост зависит от конкуренции, контента и скорости внедрений.",
          cards: [
            { title: "База", text: "Аудит, исправления, ключевые коммерческие страницы и отчёты." },
            { title: "Рост", text: "Техническое SEO, контентные кластеры, конкуренты и внутренние ссылки." },
            { title: "Масштаб", text: "Стратегия, расширение структуры, экспертный контент и приоритетная поддержка." },
          ],
        },
      ],
    },
    ads: {
      eyebrow: "Google Ads",
      title: "Настройка и ведение Google Ads в Казахстане",
      description: "Контекстная реклама для быстрых заявок: структура кампаний, цели, минус-слова, аналитика и оптимизация стоимости лида.",
      primaryCta: "Запустить рекламу",
      secondaryCta: "SEO для долгого роста",
      sections: [
        {
          title: "Что делаем",
          cards: [
            { title: "Структура кампаний", text: "Поиск, ретаргетинг, группы объявлений, ключи и минус-слова." },
            { title: "Аналитика", text: "Цели, заявки, стоимость лида и понятные отчёты." },
            { title: "Оптимизация", text: "Ставки, аудитории, объявления и отключение неэффективного." },
            { title: "Контроль качества", text: "Отслеживаем запросы, аудитории и заявки, чтобы трафик был управляемым." },
          ],
        },
      ],
    },
    landing: {
      eyebrow: "Лендинги",
      title: "Разработка лендингов для заявок и рекламы",
      description: "Создаём посадочные страницы под Google Ads, SEO и лидогенерацию: оффер, структура, дизайн, формы и аналитика.",
      primaryCta: "Обсудить лендинг",
      secondaryCta: "Калькулятор",
      sections: [
        {
          title: "Кому подходит",
          cards: [
            { title: "Новый продукт", text: "Нужно быстро проверить оффер и собрать заявки." },
            { title: "Рекламная кампания", text: "Нужна отдельная страница под Google Ads или соцсети." },
            { title: "Услуга с понятным CTA", text: "Один сценарий, сильный оффер и короткий путь к заявке." },
          ],
        },
        {
          title: "Как меняется объём",
          cards: [
            { title: "Простой запуск", text: "Один оффер, компактная структура, форма и базовая аналитика." },
            { title: "Глубокая страница", text: "Больше доказательств, возражений, сценариев и контентных блоков." },
            { title: "С интеграциями", text: "Внешние сервисы, калькуляторы, сложные формы или кастомная логика." },
            { title: "Срок", text: "10-14 рабочих дней, сложные сценарии требуют больше подготовки." },
          ],
        },
      ],
    },
    ecommerce: {
      eyebrow: "E-commerce",
      title: "Разработка интернет-магазинов в Казахстане",
      description: "Проектируем e-commerce сайты: каталог, фильтры, карточки товаров, checkout, интеграции, SEO и аналитика продаж.",
      primaryCta: "Рассчитать магазин",
      sections: [
        {
          title: "Что входит",
          cards: [
            { title: "Каталог", text: "Категории, фильтры, карточки товара и поиск." },
            { title: "Checkout", text: "Корзина, заказ, статусы, уведомления и интеграции." },
            { title: "Админка", text: "Управление товарами, заказами и базовым контентом." },
            { title: "SEO", text: "Структура, мета, скорость и индексация карточек." },
          ],
        },
        {
          title: "От чего зависит объём",
          cards: [
            { title: "Каталог", text: "Количество товаров, категорий, фильтров и сценариев поиска." },
            { title: "Checkout", text: "Доставка, оплата, уведомления, статусы и внутренние процессы." },
            { title: "Интеграции", text: "CRM, склад, платежи, аналитика, рассылки и внешние сервисы." },
          ],
        },
      ],
    },
    corporate: {
      eyebrow: "Corporate",
      title: "Разработка корпоративных сайтов для бизнеса",
      description: "Создаём сайты компаний с услугами, кейсами, блогом, FAQ, формами заявок, SEO-структурой и аналитикой.",
      primaryCta: "Получить архитектуру",
      sections: [
        {
          title: "Что включает разработка",
          cards: [
            { title: "Структура", text: "Карта страниц, сценарии пользователей и контентные блоки." },
            { title: "Дизайн", text: "Современный визуальный язык под бренд и аудиторию." },
            { title: "Интеграции", text: "Формы, Telegram, CRM, аналитика и служебные страницы." },
            { title: "SEO-база", text: "Метаданные, скорость, микроразметка и внутренние ссылки." },
          ],
        },
        {
          title: "Форматы сайта",
          cards: [
            { title: "Компактный", text: "Ключевые страницы, понятная навигация и базовый сценарий заявки." },
            { title: "Расширенный", text: "Услуги, кейсы, блог, FAQ, интеграции и SEO-структура." },
            { title: "Продуктовый", text: "Многоязычность, кабинеты, сложные формы и масштабируемая архитектура." },
          ],
        },
      ],
    },
    ios: {
      eyebrow: "iOS",
      title: "iOS-разработка приложений на Swift и SwiftUI",
      description: "Нативные iOS-приложения для бизнеса: MVP, прототип, Firebase, REST API, авторизация, TestFlight, App Store и поддержка.",
      primaryCta: "Получить оценку",
      secondaryCta: "Посмотреть кейсы",
      sections: [
        {
          title: "Что входит",
          cards: [
            { title: "Аналитика и прототип", text: "Сценарии, экраны, требования и план MVP." },
            { title: "Swift/SwiftUI", text: "Нативная разработка, MVVM, UIKit при необходимости." },
            { title: "Интеграции", text: "REST API, JSON, Firebase, авторизация и синхронизация." },
            { title: "Релиз", text: "Тестирование, оптимизация и поддержка публикации в App Store." },
          ],
        },
        {
          title: "Форматы",
          cards: [
            { title: "MVP", text: "6-8 недель для проверки продукта." },
            { title: "Бизнес-приложение", text: "CRM, ERP, логистика, кабинеты и внутренние инструменты." },
            { title: "Сложное решение", text: "Подписки, fintech, marketplace, realtime и масштабирование." },
          ],
        },
      ],
    },
    calculator: {
      eyebrow: "Калькулятор",
      title: "Калькулятор стоимости проекта",
      description: "Онлайн-калькулятор стоимости сайта, SEO и Google Ads в Алматы: формат проекта, сроки, сложность и ориентир бюджета.",
      primaryCta: "Оставить заявку",
      sections: [
        {
          title: "Что будет учитывать калькулятор",
          cards: [
            { title: "Тип проекта", text: "SEO, реклама, лендинг, магазин, корпоративный сайт или iOS." },
            { title: "Сложность", text: "Количество страниц, интеграции, контент, дизайн и сроки." },
            { title: "Формат", text: "Показывает вилку сложности и помогает понять следующий шаг." },
            { title: "Следующий шаг", text: "После расчёта пользователь отправляет заявку на уточнение." },
          ],
        },
      ],
    },
    blog: {
      eyebrow: "Блог",
      title: "Материалы о SEO, рекламе, разработке и аналитике",
      description: "Материалы про SEO, рекламу, разработку, аналитику и практический digital-рост.",
      primaryCta: "Обсудить продвижение",
      sections: [
        {
          title: "Последние темы",
          cards: [
            { title: "Как вывести сайт в топ за 6 месяцев", text: "Практическое руководство по SEO-продвижению.", meta: "SEO · 2025-11-15", href: "/blog/kak-vyvesti-sait-v-top-za-6-mesyatsev" },
            { title: "10 ошибок в Google Ads", text: "Ошибки, которые портят заявки и аналитику.", meta: "Google Ads · 2025-11-10", href: "/blog/10-oshibok-v-google-ads-kotorye-stoyat-vam-deneg" },
            { title: "SEO-чеклист при разработке сайта", text: "Что проверить до релиза, чтобы не потерять органику.", meta: "Разработка · 2025-11-05", href: "/blog/chek-list-seo-optimizatsii-saita-pri-razrabotke" },
          ],
        },
      ],
    },
    portfolio: {
      eyebrow: "Портфолио",
      title: "Кейсы NovaCreator Studio",
      description: "Подборка проектов в разных направлениях: e-commerce, B2B-продукты, корпоративные сайты, отели, фитнес, недвижимость и performance-маркетинг.",
      primaryCta: "Обсудить похожий проект",
      sections: [
        {
          title: "Избранные кейсы",
          variant: "spotlight",
          facts: [
            { title: "8 ниш", text: "авто, недвижимость, horeca, fitness, SaaS, retail, B2B, услуги" },
            { title: "Full funnel", text: "сайт, форма, аналитика, SEO и рекламные сценарии" },
            { title: "Scale-ready", text: "каждый проект можно развивать в SEO, блог, кабинет или продукт" },
          ],
          cards: [
            { title: "Motor-Land.kz", text: "Корпоративный веб-проект по продаже контрактных двигателей и автозапчастей.", meta: "ecommerce · development", href: "/portfolio/motor-land", bullets: ["Каталог", "Доверие", "SEO-база"] },
            { title: "AutoCore (iOS + macOS)", text: "Кроссплатформенное приложение для управления автомобильными процессами.", meta: "b2b · swiftui · firebase", href: "/portfolio/autocore", bullets: ["SwiftUI", "Firebase", "B2B workflows"] },
            { title: "UrbanFrame Development", text: "Лендинг застройщика с презентацией ЖК, roadmap, заявками и калькулятором интереса.", meta: "real estate · landing", href: "/portfolio/urbanframe", bullets: ["Hero-подача", "Планировки", "Заявки"] },
            { title: "LakeView Hotel", text: "Премиальная страница бутик-отеля с комнатами, сезонными офферами и сценарием бронирования.", meta: "hospitality · booking", href: "/portfolio/lakeview", bullets: ["Rooms UX", "Booking flow", "Trust blocks"] },
            { title: "BodyCraft Studio", text: "Энергичный fitness-лендинг для тренера: программы, результаты, квиз и заявки.", meta: "fitness · leadgen", href: "/portfolio/bodycraft", bullets: ["Quiz", "Programs", "Motion"] },
            { title: "TechNest Retail", text: "Концепт интернет-магазина техники с каталогом, карточками товаров и e-commerce аналитикой.", meta: "retail · ecommerce", href: "/portfolio/technest", bullets: ["Catalog", "Checkout", "Analytics"] },
            { title: "MedLine Clinic", text: "Сайт клиники с услугами, врачами, FAQ, формой записи и локальным SEO.", meta: "medical · corporate", href: "/portfolio/medline", bullets: ["Local SEO", "Appointments", "Doctors"] },
            { title: "FinPilot Analytics", text: "SaaS-страница для финансовой аналитики: дашборды, планы продукта, onboarding и демо-заявка.", meta: "saas · product", href: "/portfolio/finpilot", bullets: ["Dashboard", "Plans", "Demo CTA"] },
          ],
        },
      ],
    },
  },
  en: {
    services: {
      eyebrow: "Services",
      title: "A full digital growth system for business",
      description: "Website, traffic, analytics and forms designed as one funnel: from first click to lead in Telegram or CRM.",
      primaryCta: "Discuss project",
      secondaryCta: "Choose format",
      sections: [
        {
          title: "What is included",
          variant: "spotlight",
          body: "The services page works as a full growth map: SEO, development, Google Ads, marketing, analytics, guarantees and deep links to service landings.",
          facts: [
            { title: "100+", text: "projects across development, SEO, advertising and analytics" },
            { title: "10+ years", text: "experience in growth and website production for business" },
            { title: "KZ market", text: "structure and analytics are adapted for Kazakhstan" },
          ],
          cards: [
            {
              title: "Strategy before design",
              text: "We define the goal first: leads, sales, trust, search growth or MVP launch. Then we choose stack and channels.",
              bullets: ["Niche diagnostics", "Current website audit", "Launch plan"],
            },
            {
              title: "Website as system center",
              text: "Landing page, corporate website or store is built around a clear offer, form and analytics.",
              bullets: ["Next.js structure", "Responsive UI", "SEO base and speed"],
            },
            {
              title: "Traffic and measurement",
              text: "SEO and ads do not live separately: we connect goals and reports to see which pages generate leads.",
              bullets: ["GA4/events", "Google Ads", "Reports and hypotheses"],
            },
          ],
        },
        {
          id: "seo",
          title: "SEO services",
          variant: "spotlight",
          body: "A long-term lead channel from Google and Yandex. Best for businesses that want to reduce dependence on paid traffic and win commercial search demand.",
          cards: [
            { title: "Technical base", text: "Indexing, speed, structure, duplicate pages, sitemap, robots and Core Web Vitals." },
            { title: "Semantics and content", text: "We collect demand, cluster queries and turn them into pages, sections and articles." },
            { title: "Local SEO", text: "Almaty, Astana, Shymkent and other Kazakhstan cities where local search matters." },
            { title: "Reporting", text: "Positions, organic traffic, leads, cost per lead and clear next-month tasks.", href: "/seo" },
          ],
        },
        {
          id: "development",
          title: "Development",
          variant: "spotlight",
          body: "Websites and apps are built around business goals: validate an offer, sell a catalog, present a company or automate processes.",
          cards: [
            { title: "Landing pages", text: "Fast pages for ads and offer validation.", meta: "leadgen", href: "/landing-page-development", bullets: ["10-14 business days", "Form and analytics", "Strong CTA"] },
            { title: "E-commerce", text: "Catalog, cart, checkout, admin panel and product SEO.", meta: "commerce", href: "/ecommerce-development", bullets: ["Filters and catalog", "Checkout", "Integrations"] },
            { title: "Corporate websites", text: "Company website with services, cases, blog, FAQ and forms.", meta: "company", href: "/corporate-website-development", bullets: ["5-15+ pages", "SEO structure", "Trust and leads"] },
            { title: "iOS development", text: "Native Swift/SwiftUI apps for MVP and internal tools.", meta: "MVP 6-8 weeks", href: "/ios-razrabotka-swift-swiftui", bullets: ["SwiftUI", "Firebase", "App Store"] },
          ],
        },
        {
          id: "ads",
          title: "Google Ads",
          variant: "spotlight",
          body: "Paid traffic for fast demand: campaign structure, ads, goals, retargeting and regular optimization.",
          cards: [
            { title: "Setup", text: "Semantics, ad groups, ads, goals, negative keywords and basic analytics." },
            { title: "Management", text: "Bids, search terms, audiences, hypotheses and inefficient spend control." },
            { title: "Traffic control", text: "We watch search terms, audiences and lead quality so impressions are not wasted.", href: "/ads" },
            { title: "SEO connection", text: "For long-term growth, ads are supported by SEO pages and content.", href: "/seo" },
          ],
        },
        {
          id: "marketing",
          title: "Marketing and packaging",
          body: "We help define the offer, page structure, trust arguments and lead scenario so the website does more than look good.",
          cards: [
            { title: "Offer", text: "We formulate the main promise and differentiation." },
            { title: "Page scenario", text: "Problem, solution, proof and CTA are arranged into a clear flow." },
            { title: "Content", text: "Texts for services, cases, FAQ and advertising blocks." },
            { title: "Decision analytics", text: "We check which blocks help users leave a request." },
          ],
        },
        {
          id: "analytics",
          title: "Analytics and guarantees",
          body: "Website and acquisition channels must be measurable: what generates leads, where users drop off and which hypotheses create growth.",
          cards: [
            { title: "GA4 and events", text: "Forms, clicks, transitions and key user actions." },
            { title: "Telegram/CRM", text: "Lead delivery into a convenient channel without manual loss." },
            { title: "6 months support", text: "Post-launch support, page improvements and technical help." },
            { title: "Lifetime guarantee", text: "Fixing critical technical defects in the agreed responsibility zone." },
          ],
          cta: {
            title: "Need a system, not just a page?",
            text: "We will review your current website, demand and channels, then suggest structure and launch plan.",
            href: "/contact",
            label: "Get consultation",
          },
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "A team turning digital into a controlled growth system",
      description: "NovaCreator Studio helps businesses in Kazakhstan grow through websites, SEO, ads, product packaging and measurable analytics. We do not build just pretty pages. We build systems that explain value, bring traffic and help generate leads.",
      primaryCta: "Contact us",
      sections: [
        {
          title: "Who we are",
          variant: "spotlight",
          body: "We are a digital team from Almaty designing websites, acquisition channels and content around real business goals: leads, sales, trust, repeat requests and clear analytics. In each project we connect strategy, UX, visual style, development, SEO and advertising into a single growth system.",
          facts: [
            { title: "10+ years", text: "practice in development, SEO, advertising and digital packaging" },
            { title: "100+", text: "projects from landing pages to apps and e-commerce" },
            { title: "KZ + global", text: "local market understanding and international digital patterns" },
          ],
          cards: [
            { title: "Strategy before design", text: "Before mockups, we study niche, competitors, audience, offer and decision points.", bullets: ["Positioning", "Funnel structure", "Content accents"] },
            { title: "Development without chaos", text: "Interface, forms, responsive UI, SEO base and analytics are assembled as one scalable system.", bullets: ["Next.js / Tailwind", "Performance", "Integrations"] },
            { title: "Marketing after launch", text: "We watch data, improve pages, run ads, expand SEO clusters and reduce cost per lead.", bullets: ["GA4", "Google Ads", "SEO growth"] },
          ],
        },
        {
          title: "Our experience and approach",
          body: "We work with small and medium businesses, B2B companies, e-commerce, service niches and digital products. Some clients need a fast landing page for ads, others need a corporate website with trust, blog and SEO structure, and others need an app or internal system. The format changes, but the logic stays the same: clear goal, strong structure, polished visuals, technical base and measurable result.",
          cards: [
            { title: "Transparency", text: "Tasks, decisions, reports and metrics are visible. The client understands what is done and why." },
            { title: "Quality", text: "Structure, interface, speed and SEO are designed before launch, not patched after release." },
            { title: "Partnership", text: "We support the system after release: pages, traffic, forms and analytics." },
            { title: "Results", text: "We watch leads, cost per lead, conversion, organic growth and quality of requests." },
          ],
        },
        {
          title: "How our process works",
          steps: [
            { title: "Diagnostics", text: "We review the current website, demand, competitors, ad channels, analytics and weak funnel points.", meta: "1-2 days" },
            { title: "Architecture", text: "We shape page structure, user scenarios, trust blocks, CTA and content priorities.", meta: "2-4 days" },
            { title: "Design and development", text: "We build visual system, responsive UI, forms, motion, SEO base and integrations.", meta: "from 10 days" },
            { title: "Launch and growth", text: "We check speed, goals, events, indexing, launch traffic and improve pages with data.", meta: "after release" },
          ],
        },
        {
          title: "Why businesses choose us",
          cards: [
            { title: "One partner instead of five", text: "Design, development, SEO, ads, forms and analytics do not conflict because they are designed as one system." },
            { title: "Clear priorities", text: "We do not overload projects with random effects. Every block must support trust, clarity or conversion." },
            { title: "Ready to scale", text: "The website can grow with services, cases, blog, SEO pages, calculator, cabinets and integrations." },
            { title: "Careful communication", text: "We fix decisions, explain constraints and offer options when a task has several paths." },
          ],
          cta: {
            title: "Want to understand what to improve?",
            text: "Show your current website or describe the task. We will review structure, traffic, lead form and next improvements.",
            href: "/contact",
            label: "Request review",
          },
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in touch with NovaCreator Studio",
      description: "Tell us about the task, and we will suggest format, timing and the next step.",
      primaryCta: "Message Telegram",
      secondaryCta: "Estimate project",
      sections: [
        {
          title: "Contact channels",
          body: "Mon-Fri, 10:00-19:00 (GMT+5). We usually reply within 2 hours.",
          cards: contacts.map((item) => ({ title: item.titleEn, text: item.text, href: item.href })),
        },
        {
          title: "What to send first",
          list: [
            "Which service you need: SEO, website, ads, iOS or full-funnel.",
            "Whether you have a current website, analytics and ad accounts.",
            "City, niche, timing and desired launch format.",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions",
      description: "Short answers about timelines, SEO, development, ads and project launch.",
      primaryCta: "Ask a question",
      sections: [
        {
          title: "SEO",
          cards: [
            { title: "When will SEO show results?", text: "First improvements usually appear in 3-4 months, strong effect takes 6-12 months." },
            { title: "Can we get leads faster?", text: "For fast demand use Google Ads, while SEO works as a long-term channel." },
            { title: "What is included?", text: "Audit, technical fixes, structure, content, links and regular analytics." },
          ],
        },
        {
          title: "Development",
          cards: [
            { title: "How long does a landing page take?", text: "Usually 10-14 business days, complex pages with integrations take 15-20 days." },
            { title: "Can you connect forms and Telegram?", text: "Yes, forms, goals, Telegram alerts and basic analytics are included in launch." },
          ],
        },
        {
          title: "General",
          cards: [
            { title: "Do you work only in Almaty?", text: "No, we work online across Kazakhstan and with international projects." },
            { title: "Is there support after launch?", text: "Yes. Support, warranty period and further page improvements are included." },
            { title: "Can we start with an audit?", text: "Yes, we often begin with website, ads and analytics diagnostics." },
          ],
        },
      ],
    },
    vacancies: {
      eyebrow: "Careers",
      title: "Work and collaboration",
      description: "We grow the team around SEO, development, advertising and content.",
      primaryCta: "Apply",
      sections: [
        {
          title: "Why us",
          cards: [
            { title: "Remote format", text: "Flexible work with clear tasks and outcomes." },
            { title: "Real projects", text: "SEO, websites, ads, analytics and product work." },
            { title: "Expert growth", text: "Processes, reports, stack and client scenarios." },
            { title: "Clear communication", text: "Focus on quality, timing and expectations." },
          ],
        },
        {
          title: "Open directions",
          cards: [
            { title: "SEO Specialist", text: "Audits, semantics, structure, content and reporting.", href: "/contact?type=vacancy&vacancy=SEO%20Specialist" },
            { title: "Web Developer", text: "Next.js, layout, forms, integrations and performance.", href: "/contact?type=vacancy&vacancy=Web%20Developer" },
            { title: "Contextual Ads Specialist", text: "Google Ads, hypotheses, analytics and campaign optimization.", href: "/contact?type=vacancy&vacancy=Contextual%20Ads%20Specialist" },
            { title: "Content Manager", text: "Articles, service pages, structure and SEO editing.", href: "/contact?type=vacancy&vacancy=Content%20Manager" },
          ],
        },
      ],
    },
    privacy: {
      eyebrow: "Privacy",
      title: "Privacy Policy",
      description: "Data processing rules for NovaCreator Studio website, lead forms and iOS apps.",
      primaryCta: "Contact",
      sections: [
        {
          title: "Core rules",
          list: [
            "We collect data users submit through forms: name, phone, email, service and message.",
            "Data is used to process requests, contact clients, analyze service quality and improve the website.",
            "Firebase, Google Analytics and third-party sign-in services may be used.",
            "Users can request clarification, correction or deletion of their data.",
            `Privacy questions: privacy@novacreatorstudio.com or ${siteConfig.contacts.email}.`,
          ],
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "SEO services for websites in Kazakhstan",
      description: "Technical SEO, keyword research, content structure, local SEO and analytics for more organic leads from Google.",
      primaryCta: "Start SEO",
      secondaryCta: "Faster with Ads",
      sections: [
        {
          title: "When SEO is needed",
          cards: [
            { title: "Site is not ranking", text: "You have a product, but organic traffic does not generate leads." },
            { title: "Expensive ads", text: "You need to reduce dependence on paid traffic." },
            { title: "Competitive niche", text: "Commercial queries must be won gradually." },
            { title: "Content growth", text: "Blog and landing pages should work with demand." },
          ],
        },
        {
          title: "How to understand SEO scope",
          body: "First improvements are visible through technical metrics and indexing. Meaningful growth depends on competition, content and implementation speed.",
          cards: [
            { title: "Base", text: "Audit, fixes, key commercial pages and reporting." },
            { title: "Growth", text: "Technical SEO, content clusters, competitors and internal links." },
            { title: "Scale", text: "Strategy, structure expansion, expert content and priority support." },
          ],
        },
      ],
    },
    ads: {
      eyebrow: "Google Ads",
      title: "Google Ads setup and management in Kazakhstan",
      description: "Paid search campaigns for faster leads: campaign structure, goals, negative keywords, analytics and cost-per-lead optimization.",
      primaryCta: "Launch ads",
      secondaryCta: "SEO for long-term growth",
      sections: [
        {
          title: "What we do",
          cards: [
            { title: "Campaign structure", text: "Search, retargeting, ad groups, keywords and negatives." },
            { title: "Analytics", text: "Goals, leads, cost per lead and clear reports." },
            { title: "Optimization", text: "Bids, audiences, ads and disabling inefficient traffic." },
            { title: "Quality control", text: "Search terms, audiences and lead quality stay under control." },
          ],
        },
      ],
    },
    landing: {
      eyebrow: "Landing pages",
      title: "Landing page development for leads and ads",
      description: "Lead-generation landing pages for Google Ads, SEO and fast offer validation: structure, design, forms and analytics.",
      primaryCta: "Discuss landing",
      secondaryCta: "Calculator",
      sections: [
        {
          title: "Best for",
          cards: [
            { title: "New product", text: "Validate an offer and collect leads quickly." },
            { title: "Ad campaign", text: "Separate page for Google Ads or social traffic." },
            { title: "Clear CTA service", text: "One scenario, strong offer and short path to lead." },
          ],
        },
        {
          title: "How scope changes",
          cards: [
            { title: "Simple launch", text: "One offer, compact structure, form and basic analytics." },
            { title: "Deeper page", text: "More proof, objections, scenarios and content sections." },
            { title: "With integrations", text: "External services, calculators, advanced forms or custom logic." },
            { title: "Timeline", text: "10-14 business days, complex scenarios need more preparation." },
          ],
        },
      ],
    },
    ecommerce: {
      eyebrow: "E-commerce",
      title: "E-commerce website development in Kazakhstan",
      description: "Online store development with catalog UX, filters, product pages, checkout, integrations, SEO and sales analytics.",
      primaryCta: "Estimate store",
      sections: [
        {
          title: "What is included",
          cards: [
            { title: "Catalog", text: "Categories, filters, product pages and search." },
            { title: "Checkout", text: "Cart, order, statuses, notifications and integrations." },
            { title: "Admin", text: "Products, orders and basic content management." },
            { title: "SEO", text: "Structure, metadata, speed and product indexing." },
          ],
        },
        {
          title: "What affects scope",
          cards: [
            { title: "Catalog", text: "Number of products, categories, filters and search scenarios." },
            { title: "Checkout", text: "Delivery, payment, notifications, statuses and internal workflow." },
            { title: "Integrations", text: "CRM, warehouse, payments, analytics, mailings and external services." },
          ],
        },
      ],
    },
    corporate: {
      eyebrow: "Corporate",
      title: "Corporate website development for business",
      description: "Company websites with services, cases, blog, FAQ, lead forms, SEO-ready structure and analytics.",
      primaryCta: "Get site architecture",
      sections: [
        {
          title: "What is included",
          cards: [
            { title: "Structure", text: "Sitemap, user scenarios and content blocks." },
            { title: "Design", text: "Modern visual language for brand and audience." },
            { title: "Integrations", text: "Forms, Telegram, CRM, analytics and legal pages." },
            { title: "SEO base", text: "Metadata, speed, schema and internal links." },
          ],
        },
        {
          title: "Website formats",
          cards: [
            { title: "Compact", text: "Key pages, clear navigation and essential lead flow." },
            { title: "Expanded", text: "Services, cases, blog, FAQ, integrations and SEO structure." },
            { title: "Product-like", text: "Multilingual flows, cabinets, advanced forms and scalable architecture." },
          ],
        },
      ],
    },
    ios: {
      eyebrow: "iOS",
      title: "iOS app development with Swift and SwiftUI",
      description: "Native iOS apps for business: MVP, prototype, Firebase, REST API, authentication, TestFlight, App Store and support.",
      primaryCta: "Get estimate",
      secondaryCta: "View cases",
      sections: [
        {
          title: "What is included",
          cards: [
            { title: "Analytics and prototype", text: "Scenarios, screens, requirements and MVP plan." },
            { title: "Swift/SwiftUI", text: "Native development, MVVM and UIKit when needed." },
            { title: "Integrations", text: "REST API, JSON, Firebase, auth and sync." },
            { title: "Release", text: "Testing, optimization and App Store publishing support." },
          ],
        },
        {
          title: "Formats",
          cards: [
            { title: "MVP", text: "6-8 weeks to validate the product." },
            { title: "Business app", text: "CRM, ERP, logistics, dashboards and internal tools." },
            { title: "Complex solution", text: "Subscriptions, fintech, marketplace, realtime and scaling." },
          ],
        },
      ],
    },
    calculator: {
      eyebrow: "Calculator",
      title: "Project planner",
      description: "Online estimator for website development, SEO and Google Ads in Almaty with scope, timeline and budget ranges.",
      primaryCta: "Leave request",
      sections: [
        {
          title: "What the calculator will include",
          cards: [
            { title: "Project type", text: "SEO, ads, landing page, store, corporate website or iOS." },
            { title: "Complexity", text: "Pages, integrations, content, design and timelines." },
            { title: "Format", text: "Shows project complexity and helps choose the next step." },
            { title: "Next step", text: "After estimate, the user sends a request for clarification." },
          ],
        },
      ],
    },
    blog: {
      eyebrow: "Blog",
      title: "SEO, ads, development and analytics articles",
      description: "Articles about SEO, ads, development, analytics and practical digital growth.",
      primaryCta: "Discuss growth",
      sections: [
        {
          title: "Latest topics",
          cards: [
            { title: "How to rank a website in 6 months", text: "A practical guide to SEO growth.", meta: "SEO · 2025-11-15", href: "/blog/how-to-rank-website-top-10-6-months" },
            { title: "10 Google Ads mistakes", text: "Mistakes that damage leads and analytics.", meta: "Google Ads · 2025-11-10", href: "/blog/10-google-ads-mistakes-cost-money" },
            { title: "SEO checklist during website development", text: "What to check before release to preserve organic growth.", meta: "Development · 2025-11-05", href: "/blog/seo-optimization-checklist-website-development" },
          ],
        },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "NovaCreator Studio cases",
      description: "A selection of projects across e-commerce, B2B products, corporate websites, hotels, fitness, real estate and performance marketing.",
      primaryCta: "Discuss similar project",
      sections: [
        {
          title: "Selected cases",
          variant: "spotlight",
          facts: [
            { title: "8 niches", text: "auto, real estate, horeca, fitness, SaaS, retail, B2B, services" },
            { title: "Full funnel", text: "website, form, analytics, SEO and advertising scenarios" },
            { title: "Scale-ready", text: "each project can grow into SEO, blog, cabinet or product" },
          ],
          cards: [
            { title: "Motor-Land.kz", text: "Corporate web project for contract engines and automotive parts sales.", meta: "ecommerce · development", href: "/portfolio/motor-land", bullets: ["Catalog", "Trust", "SEO base"] },
            { title: "AutoCore (iOS + macOS)", text: "Cross-platform app for automotive workflow management.", meta: "b2b · swiftui · firebase", href: "/portfolio/autocore", bullets: ["SwiftUI", "Firebase", "B2B workflows"] },
            { title: "UrbanFrame Development", text: "Developer landing page with residential presentation, roadmap, leads and interest calculator.", meta: "real estate · landing", href: "/portfolio/urbanframe", bullets: ["Hero story", "Floor plans", "Requests"] },
            { title: "LakeView Hotel", text: "Premium boutique hotel page with rooms, seasonal offers and booking scenario.", meta: "hospitality · booking", href: "/portfolio/lakeview", bullets: ["Rooms UX", "Booking flow", "Trust blocks"] },
            { title: "BodyCraft Studio", text: "Energetic fitness landing page for a trainer: programs, results, quiz and lead forms.", meta: "fitness · leadgen", href: "/portfolio/bodycraft", bullets: ["Quiz", "Programs", "Motion"] },
            { title: "TechNest Retail", text: "Electronics e-commerce concept with catalog, product cards and analytics.", meta: "retail · ecommerce", href: "/portfolio/technest", bullets: ["Catalog", "Checkout", "Analytics"] },
            { title: "MedLine Clinic", text: "Clinic website with services, doctors, FAQ, appointment form and local SEO.", meta: "medical · corporate", href: "/portfolio/medline", bullets: ["Local SEO", "Appointments", "Doctors"] },
            { title: "FinPilot Analytics", text: "SaaS page for financial analytics: dashboards, product plans, onboarding and demo request.", meta: "saas · product", href: "/portfolio/finpilot", bullets: ["Dashboard", "Plans", "Demo CTA"] },
          ],
        },
      ],
    },
  },
};

export function getMarketingPageContent(locale: string, pageKey: MarketingPageKey) {
  const normalizedLocale: MarketingLocale = locale === "en" ? "en" : "ru";
  const content = pageContent[normalizedLocale][pageKey];

  return {
    ...content,
    sections: [...content.sections, ...getExtraSections(normalizedLocale, pageKey)],
  };
}

function getExtraSections(locale: MarketingLocale, pageKey: MarketingPageKey): MarketingSection[] {
  const en = locale === "en";
  const contactCta = {
    title: en ? "Ready to discuss the project?" : "Готовы обсудить проект?",
    text: en
      ? "Send the task, current website and desired timeline. We will suggest structure and next steps."
      : "Отправьте задачу, текущий сайт и желаемые сроки. Мы предложим структуру и следующий шаг.",
    href: "/contact",
    label: en ? "Contact us" : "Связаться",
  };

  const serviceExtras: Partial<Record<MarketingPageKey, MarketingSection[]>> = {
    seo: [
      {
        title: en ? "What SEO optimization means" : "Что такое SEO-оптимизация",
        variant: "editorial",
        body: en
          ? "SEO is a long-term system of technical improvements, content, internal structure and authority growth. It helps the website receive demand without paying for every click."
          : "SEO — это долгосрочная система технических улучшений, контента, внутренней структуры и роста доверия сайта. Она помогает получать спрос без оплаты каждого клика.",
        facts: [
          { title: en ? "First signals" : "Первые сигналы", text: en ? "3-4 months after technical and content work" : "через 3-4 месяца после технических и контентных работ" },
          { title: en ? "Strong growth" : "Сильный рост", text: en ? "6-12 months depending on competition" : "6-12 месяцев в зависимости от конкуренции" },
          { title: en ? "Work rhythm" : "Ритм работы", text: en ? "monthly cycles with tasks and reports" : "ежемесячные циклы задач и отчётов" },
        ],
        cards: [
          { title: en ? "Technical direction" : "Техническое направление", text: en ? "Indexing, redirects, page speed, duplicates, sitemap, internal links and crawl logic." : "Индексация, редиректы, скорость, дубли, sitemap, внутренняя перелинковка и логика обхода." },
          { title: en ? "Content direction" : "Контентное направление", text: en ? "Commercial pages, blog topics, semantic clusters and search intent coverage." : "Коммерческие страницы, темы блога, семантические кластеры и покрытие поискового намерения." },
          { title: en ? "Authority direction" : "Рост доверия", text: en ? "Safe link growth, brand mentions and niche relevance without aggressive tactics." : "Безопасный рост ссылок, упоминания бренда и нишевая релевантность без агрессивных методов." },
        ],
      },
      {
        title: en ? "When SEO is not the right first channel" : "Когда SEO не подходит первым каналом",
        variant: "mosaic",
        cards: [
          { title: en ? "Need leads this week" : "Заявки нужны на этой неделе", text: en ? "Use Google Ads first, then build SEO as a base." : "Сначала запускаем Google Ads, а SEO строим как фундамент.", href: "/ads" },
          { title: en ? "Very narrow demand" : "Очень узкий спрос", text: en ? "If no one searches for the product, content and ads may work better." : "Если продукт почти не ищут, лучше работают контент, партнёрства или реклама." },
          { title: en ? "One-time campaign" : "Разовая кампания", text: en ? "SEO pays off when the product and website live longer than a short promo." : "SEO окупается, когда продукт и сайт живут дольше короткой акции." },
          { title: en ? "Offline decision path" : "Офлайн-сценарий", text: en ? "Some niches rely on referrals, tenders or direct sales more than search." : "В некоторых нишах сильнее рекомендации, тендеры или прямые продажи." },
        ],
      },
      {
        title: en ? "Example outcome" : "Пример результата",
        variant: "featureBand",
        body: en
          ? "A clear SEO result is not only higher positions. The website should become easier to index, easier to expand and easier to connect with real requests."
          : "Хороший результат SEO — это не только рост позиций. Сайт должен легче индексироваться, проще расширяться и понятнее связываться с реальными заявками.",
        cards: [
          { title: en ? "Clear structure" : "Понятная структура", text: en ? "Commercial pages match demand clusters instead of competing with each other." : "Коммерческие страницы соответствуют кластерам спроса и не конкурируют друг с другом." },
          { title: en ? "Measured growth" : "Измеримый рост", text: en ? "Reports show indexing, traffic, positions and leads in one logic." : "В отчётах видны индексация, трафик, позиции и заявки в одной логике." },
          { title: en ? "Next content plan" : "План контента", text: en ? "The next pages are based on search intent, not random blog ideas." : "Следующие страницы строятся на поисковом намерении, а не случайных темах блога." },
        ],
      },
      {
        title: en ? "SEO process" : "Как мы работаем над SEO",
        variant: "timeline",
        steps: [
          { title: en ? "Audit" : "Аудит", text: en ? "We find technical, semantic and conversion issues." : "Находим технические, семантические и конверсионные проблемы.", meta: en ? "Client: access and goals" : "Участие клиента: доступы и цели" },
          { title: en ? "Strategy" : "Стратегия", text: en ? "We prioritize pages, queries, content and quick wins." : "Расставляем приоритеты по страницам, запросам, контенту и быстрым победам.", meta: en ? "Client: approve priorities" : "Участие клиента: согласование приоритетов" },
          { title: en ? "Implementation" : "Внедрение", text: en ? "We fix technical issues, publish pages and improve internal linking." : "Исправляем технику, публикуем страницы и усиливаем перелинковку.", meta: en ? "Client: content feedback" : "Участие клиента: обратная связь по контенту" },
          { title: en ? "Growth" : "Рост", text: en ? "We track data, expand clusters and reinforce what brings leads." : "Смотрим данные, расширяем кластеры и усиливаем то, что приносит заявки.", meta: en ? "Client: monthly review" : "Участие клиента: ежемесячный разбор" },
        ],
        faq: [
          { title: en ? "Can you guarantee top positions?" : "Можно гарантировать топ?", text: en ? "No honest SEO can guarantee a fixed position, but we can guarantee transparent work, reports and a growth process." : "Честное SEO не гарантирует конкретную позицию, но гарантирует прозрачные работы, отчёты и процесс роста." },
          { title: en ? "Do you work with existing websites?" : "Работаете с существующими сайтами?", text: en ? "Yes. We start with an audit and fix the most important technical and content issues first." : "Да. Начинаем с аудита и сначала исправляем самые важные технические и контентные проблемы." },
        ],
        cta: contactCta,
      },
    ],
    ads: [
      {
        title: en ? "When Google Ads is the right channel" : "Когда Google Ads нужен",
        variant: "featureBand",
        facts: [
          { title: en ? "Start" : "Старт", text: en ? "campaigns can launch after setup and moderation" : "кампании запускаются после настройки и модерации" },
          { title: en ? "Control" : "Контроль", text: en ? "weekly search terms and lead quality review" : "еженедельная проверка запросов и качества заявок" },
          { title: en ? "Analytics" : "Аналитика", text: en ? "events and reports are connected before scaling" : "цели и отчёты подключаются до масштабирования" },
        ],
        cards: [
          { title: en ? "Fast demand" : "Быстрый спрос", text: en ? "Useful when leads are needed sooner than SEO can deliver." : "Подходит, когда заявки нужны быстрее, чем их даст SEO." },
          { title: en ? "Clear offer" : "Понятный оффер", text: en ? "Works best when the page has a clear service, proof and CTA." : "Лучше всего работает, когда у страницы есть понятная услуга, доказательства и CTA." },
          { title: en ? "Measured funnel" : "Измеримая воронка", text: en ? "We connect goals and review cost per lead, not just clicks." : "Подключаем цели и смотрим стоимость заявки, а не только клики." },
        ],
      },
      {
        title: en ? "Example outcome" : "Пример результата",
        variant: "mosaic",
        body: en
          ? "A useful ads setup gives the business more than clicks: it shows which queries, pages and offers can actually turn into requests."
          : "Полезная настройка рекламы даёт бизнесу не только клики: она показывает, какие запросы, страницы и офферы реально превращаются в заявки.",
        cards: [
          { title: en ? "Clean campaign structure" : "Чистая структура кампаний", text: en ? "Search groups, negatives and ads are separated by intent, so optimization is possible." : "Группы, минус-слова и объявления разделены по намерению, поэтому кампании можно нормально оптимизировать." },
          { title: en ? "Lead quality control" : "Контроль качества заявок", text: en ? "We review not only cost per click, but request quality and wasted demand." : "Смотрим не только цену клика, но и качество заявок, а также лишний спрос." },
          { title: en ? "Landing page feedback" : "Обратная связь по странице", text: en ? "Ads data shows where the landing page needs stronger proof, offers or form logic." : "Данные рекламы показывают, где посадочной странице нужны сильнее доказательства, оффер или форма." },
        ],
      },
      {
        title: en ? "Campaign management process" : "Процесс ведения рекламы",
        variant: "timeline",
        steps: [
          { title: en ? "Account and goals" : "Аккаунт и цели", text: en ? "Access, conversion setup, target actions and landing pages." : "Доступы, настройка конверсий, целевые действия и посадочные страницы." },
          { title: en ? "Structure" : "Структура", text: en ? "Search groups, keywords, negatives, ads and extensions." : "Поисковые группы, ключи, минус-слова, объявления и расширения." },
          { title: en ? "Launch" : "Запуск", text: en ? "Moderation, first data collection and traffic control." : "Модерация, сбор первых данных и контроль трафика." },
          { title: en ? "Optimization" : "Оптимизация", text: en ? "Search terms, bids, audiences, hypotheses and reports." : "Запросы, ставки, аудитории, гипотезы и отчёты." },
        ],
        faq: [
          { title: en ? "Can ads work without a good landing page?" : "Будет ли работать реклама без хорошей страницы?", text: en ? "It can generate clicks, but leads are usually expensive. We recommend fixing the landing page first." : "Клики будут, но заявки обычно дорогие. Сначала лучше усилить посадочную страницу." },
          { title: en ? "Do you also run Yandex Direct?" : "Ведёте Яндекс Директ?", text: en ? "The core page is built around Google Ads, but contextual advertising strategy can include additional channels when it makes sense." : "Основная страница собрана вокруг Google Ads, но стратегия контекстной рекламы может включать дополнительные каналы, если это оправдано." },
        ],
        cta: contactCta,
      },
    ],
  };

  const developmentExtras: Record<MarketingPageKey, MarketingSection[]> = {
    landing: buildDevelopmentLandingExtras(locale, "landing"),
    ecommerce: buildDevelopmentLandingExtras(locale, "ecommerce"),
    corporate: buildDevelopmentLandingExtras(locale, "corporate"),
    ios: buildDevelopmentLandingExtras(locale, "ios"),
    services: [
      {
        title: en ? "How we choose the first move" : "Как выбираем первый шаг",
        variant: "editorial",
        body: en
          ? "Not every business needs a full rebuild on day one. Sometimes the fastest growth comes from a better landing page, sometimes from SEO structure, sometimes from analytics that finally shows where requests disappear."
          : "Не каждому бизнесу нужен большой перезапуск в первый день. Иногда быстрее всего растит сильная посадочная страница, иногда SEO-структура, иногда аналитика, которая наконец показывает, где теряются заявки.",
        list: [
          en ? "If demand already exists, we strengthen conversion and paid traffic first." : "Если спрос уже есть, сначала усиливаем конверсию и платный трафик.",
          en ? "If the niche is searched every month, we build SEO pages and content clusters." : "Если нишу регулярно ищут, строим SEO-страницы и контентные кластеры.",
          en ? "If the offer is unclear, we start with packaging, structure and a smaller MVP." : "Если оффер неочевиден, начинаем с упаковки, структуры и небольшого MVP.",
        ],
      },
    ],
    about: [],
    contact: [],
    faq: [],
    vacancies: [],
    privacy: [],
    seo: [],
    ads: [],
    calculator: [],
    blog: [],
    portfolio: [],
  };

  return serviceExtras[pageKey] ?? developmentExtras[pageKey] ?? getSupportExtras(locale, pageKey);
}

function buildDevelopmentLandingExtras(locale: MarketingLocale, type: "landing" | "ecommerce" | "corporate" | "ios"): MarketingSection[] {
  const en = locale === "en";
  const data = {
    landing: {
      facts: [
        { title: en ? "Best for" : "Лучше всего", text: en ? "ads, MVP offers and lead generation" : "реклама, MVP-офферы и лидогенерация" },
        { title: en ? "Launch window" : "Срок запуска", text: en ? "10-14 business days" : "10-14 рабочих дней" },
        { title: en ? "Format" : "Формат", text: en ? "compact MVP or expanded lead page" : "компактный MVP или расширенная lead-страница" },
      ],
      included: [
        [en ? "Offer and structure" : "Оффер и структура", en ? "Hero, proof blocks, service logic, CTA and objections." : "Hero, доказательства, логика услуги, CTA и возражения."],
        [en ? "Design and layout" : "Дизайн и вёрстка", en ? "Responsive premium interface with clean hierarchy." : "Адаптивный premium-интерфейс с чистой иерархией."],
        [en ? "Forms and analytics" : "Формы и аналитика", en ? "Lead form, Telegram/CRM direction, goals and events." : "Форма заявки, направление в Telegram/CRM, цели и события."],
        [en ? "SEO base" : "SEO-база", en ? "Metadata, speed, semantic structure and index readiness." : "Метаданные, скорость, семантическая структура и готовность к индексации."],
      ],
      steps: [
        [en ? "Days 1-3" : "Дни 1-3", en ? "Brief, offer, page logic and content skeleton." : "Бриф, оффер, логика страницы и каркас контента."],
        [en ? "Days 4-7" : "Дни 4-7", en ? "Design direction, key sections and responsive states." : "Дизайн-направление, ключевые секции и адаптивные состояния."],
        [en ? "Days 8-12" : "Дни 8-12", en ? "Development, forms, animation and analytics." : "Разработка, формы, анимации и аналитика."],
        [en ? "Days 13-14" : "Дни 13-14", en ? "QA, speed check, SEO basics and launch." : "QA, проверка скорости, SEO-база и запуск."],
      ],
      pricing: [
        [en ? "Simple" : "Простой", en ? "from 150,000 KZT" : "от 150 000 KZT", en ? "One focused offer with basic form and analytics." : "Один сфокусированный оффер с базовой формой и аналитикой."],
        [en ? "Standard" : "Стандартный", en ? "from 250,000 KZT" : "от 250 000 KZT", en ? "Stronger content, more sections and better conversion logic." : "Больше контента, секций и сильнее конверсионная логика."],
        [en ? "Complex" : "С интеграциями", en ? "from 400,000 KZT" : "от 400 000 KZT", en ? "External services, calculators, advanced forms or custom logic." : "Внешние сервисы, калькуляторы, сложные формы или кастомная логика."],
      ],
      result: [
        [en ? "First-screen clarity" : "Понятный первый экран", en ? "Visitor understands the offer, audience and next action without reading the whole page." : "Посетитель понимает оффер, для кого услуга и следующий шаг без чтения всей страницы."],
        [en ? "Lead path" : "Путь к заявке", en ? "CTA, form, messenger links and analytics work as one request flow." : "CTA, форма, мессенджеры и аналитика работают как единый сценарий заявки."],
        [en ? "Launch-ready page" : "Готовность к запуску", en ? "The page can receive paid traffic and show which message converts better." : "Страница готова принимать рекламный трафик и показывать, какой посыл конвертирует лучше."],
      ],
    },
    ecommerce: {
      facts: [
        { title: en ? "Best for" : "Лучше всего", text: en ? "catalog sales and online orders" : "каталожные продажи и онлайн-заказы" },
        { title: en ? "Launch window" : "Срок запуска", text: en ? "6-12 weeks depending on catalog" : "6-12 недель в зависимости от каталога" },
        { title: en ? "Scope" : "Объём", text: en ? "catalog, checkout and integrations" : "каталог, checkout и интеграции" },
      ],
      included: [
        [en ? "Catalog and filters" : "Каталог и фильтры", en ? "Categories, product cards, search and filtering." : "Категории, карточки товаров, поиск и фильтрация."],
        [en ? "Cart and checkout" : "Корзина и оформление", en ? "Order flow, statuses, notifications and payment direction." : "Сценарий заказа, статусы, уведомления и направление оплаты."],
        [en ? "Admin workflow" : "Админ-процессы", en ? "Product and order management scenarios." : "Сценарии управления товарами и заказами."],
        [en ? "E-commerce SEO" : "E-commerce SEO", en ? "Indexable category/product structure and metadata." : "Индексируемая структура категорий/товаров и метаданные."],
      ],
      steps: [
        [en ? "Week 1-2" : "Недели 1-2", en ? "Requirements, catalog architecture and UX." : "Требования, архитектура каталога и UX."],
        [en ? "Week 3-6" : "Недели 3-6", en ? "Development of catalog, checkout, admin flows." : "Разработка каталога, checkout и админ-сценариев."],
        [en ? "Week 7-8" : "Недели 7-8", en ? "Testing, SEO, integrations and launch." : "Тестирование, SEO, интеграции и запуск."],
      ],
      pricing: [
        [en ? "Simple store" : "Простой магазин", en ? "from 500,000 KZT" : "от 500 000 KZT", en ? "Up to 100 products and basic order flow." : "До 100 товаров и базовый сценарий заказа."],
        [en ? "Standard" : "Стандартный", en ? "from 800,000 KZT" : "от 800 000 KZT", en ? "100-500 products, stronger filters and integrations." : "100-500 товаров, более сильные фильтры и интеграции."],
        [en ? "Complex" : "Сложный", en ? "from 1,200,000 KZT" : "от 1 200 000 KZT", en ? "500+ products, advanced integrations and custom flows." : "500+ товаров, продвинутые интеграции и кастомные сценарии."],
      ],
      result: [
        [en ? "Catalog users can scan" : "Каталог легко просматривать", en ? "Categories, filters and product cards help users narrow choice without asking support." : "Категории, фильтры и карточки помогают выбрать товар без обращения в поддержку."],
        [en ? "Order flow is visible" : "Заказ прозрачен", en ? "Cart, checkout and notifications make the buying path predictable." : "Корзина, оформление и уведомления делают покупку понятной."],
        [en ? "SEO base for products" : "SEO-база для товаров", en ? "Category and product pages are ready for indexing and future content growth." : "Категории и карточки готовы к индексации и дальнейшему росту."],
      ],
    },
    corporate: {
      facts: [
        { title: en ? "Best for" : "Лучше всего", text: en ? "B2B, services, company presentation" : "B2B, услуги, презентация компании" },
        { title: en ? "Scope" : "Объём", text: en ? "5-15+ pages" : "5-15+ страниц" },
        { title: en ? "Focus" : "Фокус", text: en ? "trust, structure and lead paths" : "доверие, структура и заявки" },
      ],
      included: [
        [en ? "Information architecture" : "Архитектура", en ? "Sitemap, services, cases, FAQ and conversion paths." : "Карта страниц, услуги, кейсы, FAQ и пути конверсии."],
        [en ? "Brand trust" : "Доверие к бренду", en ? "Proof, expertise, team, process and project signals." : "Доказательства, экспертиза, команда, процесс и сигналы проектов."],
        [en ? "Content system" : "Контентная система", en ? "Blog, portfolio and service pages ready for SEO growth." : "Блог, портфолио и страницы услуг для SEO-роста."],
        [en ? "Integrations" : "Интеграции", en ? "Forms, Telegram/CRM, analytics and legal pages." : "Формы, Telegram/CRM, аналитика и служебные страницы."],
      ],
      steps: [
        [en ? "Discovery" : "Исследование", en ? "Business goals, audience, competitors and content inventory." : "Цели бизнеса, аудитория, конкуренты и инвентаризация контента."],
        [en ? "Architecture" : "Архитектура", en ? "Page map, blocks, navigation and conversion paths." : "Карта страниц, блоки, навигация и пути конверсии."],
        [en ? "Production" : "Производство", en ? "Design, development, content adaptation and integrations." : "Дизайн, разработка, адаптация контента и интеграции."],
        [en ? "Launch" : "Запуск", en ? "QA, analytics, SEO checks and support plan." : "QA, аналитика, SEO-проверки и план поддержки."],
      ],
      pricing: [
        [en ? "Basic" : "Базовый", en ? "from 300,000 KZT" : "от 300 000 KZT", en ? "5-7 pages and essential lead flow." : "5-7 страниц и базовый сценарий заявки."],
        [en ? "Standard" : "Стандартный", en ? "from 500,000 KZT" : "от 500 000 KZT", en ? "8-12 pages plus blog, portfolio, FAQ and integrations." : "8-12 страниц + блог, портфолио, FAQ и интеграции."],
        [en ? "Enterprise" : "Премиум", en ? "from 800,000 KZT" : "от 800 000 KZT", en ? "15+ pages, multilingual flows and advanced forms." : "15+ страниц, мультиязычность и расширенные формы."],
      ],
      result: [
        [en ? "Company is easier to trust" : "Компании проще доверять", en ? "Services, cases, process and proof are connected into a calm decision path." : "Услуги, кейсы, процесс и доказательства собраны в спокойный путь к решению."],
        [en ? "Navigation supports sales" : "Навигация помогает продажам", en ? "Users can move from service pages to cases, FAQ and contact without guessing." : "Пользователь переходит от услуг к кейсам, FAQ и заявке без лишних поисков."],
        [en ? "Ready for growth" : "Готовность к росту", en ? "Blog, service pages and portfolio can expand without rebuilding the site." : "Блог, услуги и портфолио можно расширять без переделки сайта."],
      ],
    },
    ios: {
      facts: [
        { title: "MVP", text: en ? "6-8 weeks for first version" : "6-8 недель на первую версию" },
        { title: "Stack", text: "Swift · SwiftUI · MVVM · Firebase" },
        { title: "Release", text: en ? "App Store support included" : "поддержка публикации в App Store" },
      ],
      included: [
        [en ? "Product analytics" : "Продуктовая аналитика", en ? "Screens, scenarios, MVP borders and release priorities." : "Экраны, сценарии, границы MVP и приоритеты релиза."],
        [en ? "Native development" : "Нативная разработка", en ? "SwiftUI, UIKit where needed, MVVM and clean data flow." : "SwiftUI, UIKit при необходимости, MVVM и чистый поток данных."],
        [en ? "Backend integrations" : "Интеграции", en ? "REST API, JSON, Firebase, auth and synchronization." : "REST API, JSON, Firebase, авторизация и синхронизация."],
        [en ? "Testing and release" : "Тестирование и релиз", en ? "Performance checks, QA, TestFlight and App Store support." : "Проверка производительности, QA, TestFlight и App Store."],
      ],
      steps: [
        [en ? "Estimate" : "Оценка", en ? "We clarify functionality, risks and MVP scope within 24 hours." : "Уточняем функциональность, риски и MVP-объём за 24 часа."],
        [en ? "Prototype" : "Прототип", en ? "Navigation, key screens and user scenarios." : "Навигация, ключевые экраны и пользовательские сценарии."],
        [en ? "Development" : "Разработка", en ? "Swift/SwiftUI implementation, integrations and testing." : "Реализация на Swift/SwiftUI, интеграции и тестирование."],
        [en ? "Release" : "Релиз", en ? "TestFlight, App Store preparation and support." : "TestFlight, подготовка App Store и поддержка."],
      ],
      pricing: [
        [en ? "MVP app" : "MVP приложение", en ? "project estimate" : "оценка проекта", en ? "First version focused on core business scenario." : "Первая версия вокруг ключевого бизнес-сценария."],
        [en ? "Business app" : "Бизнес-приложение", en ? "custom quote" : "индивидуально", en ? "CRM, ERP, logistics, dashboards or internal workflows." : "CRM, ERP, логистика, кабинеты или внутренние процессы."],
        [en ? "Complex solution" : "Сложное решение", en ? "custom quote" : "индивидуально", en ? "Subscriptions, marketplace, fintech, realtime or scaling." : "Подписки, marketplace, fintech, realtime или масштабирование."],
      ],
      result: [
        [en ? "MVP scope is clear" : "Понятный объём MVP", en ? "The first version focuses on the core scenario instead of trying to include everything." : "Первая версия фокусируется на главном сценарии, а не пытается включить всё сразу."],
        [en ? "App can be tested early" : "Приложение можно тестировать рано", en ? "Prototype and TestFlight help check logic before expensive scaling." : "Прототип и TestFlight помогают проверить логику до дорогого масштабирования."],
        [en ? "Release path is prepared" : "Путь к релизу подготовлен", en ? "Testing, account preparation and App Store requirements are included in the launch flow." : "Тестирование, подготовка аккаунта и требования App Store входят в сценарий запуска."],
      ],
    },
  }[type];

  return [
    {
      title: en ? "Quick facts" : "Коротко о проекте",
      variant: "featureBand",
      facts: data.facts,
    },
    {
      title: en ? "The important part before design" : "Важное до дизайна",
      variant: "plain",
      body: en
        ? "A page starts working when the offer, audience, proof and next action are aligned. We define these points before polishing visuals, so the interface is not just beautiful but understandable."
        : "Страница начинает работать, когда совпадают оффер, аудитория, доказательства и следующий шаг. Мы фиксируем это до визуальной полировки, чтобы интерфейс был не просто красивым, а понятным.",
      list: [
        en ? "What should a visitor understand in the first 8 seconds?" : "Что посетитель должен понять за первые 8 секунд?",
        en ? "Which objections block a request?" : "Какие возражения мешают заявке?",
        en ? "Which proof makes the company feel real?" : "Какие доказательства делают компанию живой?",
      ],
    },
    {
      title: en ? "What is included" : "Что входит в работу",
      variant: "mosaic",
      cards: data.included.map(([title, text]) => ({ title, text })),
    },
    {
      title: en ? "Delivery process" : "Этапы работы",
      variant: "timeline",
      steps: data.steps.map(([title, text]) => ({ title, text })),
    },
    {
      title: en ? "Example outcome" : "Пример результата",
      variant: "featureBand",
      body: en
        ? "The page should make the next action obvious: what the user understands, where they click and what the business can measure after launch."
        : "Страница должна делать следующий шаг очевидным: что пользователь понял, куда нажал и что бизнес может измерить после запуска.",
      cards: data.result.map(([title, text]) => ({ title, text })),
    },
    {
      title: en ? "Scope and launch notes" : "Объём и запуск",
      variant: "split",
      faq: [
        { title: en ? "Can the scope change?" : "Может ли измениться объём?", text: en ? "Yes, if integrations, content or business logic become more complex during discovery." : "Да, если на этапе исследования усложняются интеграции, контент или бизнес-логика." },
        { title: en ? "Can we start with a small version?" : "Можно начать с маленькой версии?", text: en ? "Yes. We often launch MVP first, then expand pages, features and automation." : "Да. Часто запускаем MVP, а затем расширяем страницы, функции и автоматизацию." },
      ],
      cta: {
        title: en ? "Want a clear launch plan?" : "Нужен понятный план запуска?",
        text: en ? "Send your task and references. We will clarify scope, timing and launch sequence." : "Отправьте задачу и референсы. Мы уточним объём, сроки и последовательность запуска.",
        href: "/contact",
        label: en ? "Discuss scope" : "Обсудить объём",
      },
    },
  ];
}

function getSupportExtras(locale: MarketingLocale, pageKey: MarketingPageKey): MarketingSection[] {
  const en = locale === "en";

  if (pageKey === "contact") {
    return [
      {
        title: en ? "What to send for a faster estimate" : "Что отправить для быстрой оценки",
        variant: "plain",
        body: en
          ? "A perfect brief is not required. A few concrete details are enough for us to answer with a useful next step instead of generic questions."
          : "Идеальный бриф не нужен. Достаточно нескольких конкретных деталей, чтобы мы ответили по делу, а не списком шаблонных вопросов.",
        list: [
          en ? "Current website or references you like." : "Текущий сайт или референсы, которые вам нравятся.",
          en ? "Main service, product or direction you want to grow." : "Главная услуга, продукт или направление роста.",
          en ? "Desired launch window and decision context." : "Желаемый срок запуска и контекст задачи.",
        ],
      },
      {
        title: en ? "Project request" : "Заявка на проект",
        variant: "split",
        body: en ? "Use the form if you want a structured answer with format, timing and next steps." : "Заполните форму, если хотите получить структурированный ответ по формату, срокам и следующему шагу.",
        form: "contact",
      },
    ];
  }

  if (pageKey === "about") {
    return [
      {
        title: en ? "A studio that stays close to the numbers" : "Студия, которая держится рядом с цифрами",
        variant: "editorial",
        body: en
          ? "We like clean interfaces, but we judge work by what happens after launch: whether people understand the offer, whether forms work, whether traffic becomes requests and whether the next improvement is obvious."
          : "Мы любим чистые интерфейсы, но оцениваем работу по тому, что происходит после запуска: понятно ли предложение, работают ли формы, превращается ли трафик в заявки и видно ли следующий шаг роста.",
      },
      {
        title: en ? "Why clients choose us" : "Почему выбирают нас",
        variant: "quote",
        cards: [
          { title: en ? "Business-first thinking" : "Сначала бизнес", text: en ? "We start from leads, sales, trust and measurable growth." : "Начинаем с заявок, продаж, доверия и измеримого роста." },
          { title: en ? "Full funnel" : "Полная воронка", text: en ? "Website, SEO, ads, forms and analytics work together." : "Сайт, SEO, реклама, формы и аналитика работают вместе." },
          { title: en ? "Premium execution" : "Premium-исполнение", text: en ? "Modern design, fast interfaces and careful content hierarchy." : "Современный дизайн, быстрые интерфейсы и аккуратная иерархия." },
          { title: en ? "Long-term support" : "Поддержка", text: en ? "We keep improving pages and channels after release." : "Продолжаем улучшать страницы и каналы после релиза." },
        ],
        cta: {
          title: en ? "Let’s build your growth system" : "Построим вашу систему роста",
          text: en ? "Tell us about your niche, current website and goals." : "Расскажите о нише, текущем сайте и целях.",
          href: "/contact",
          label: en ? "Start conversation" : "Начать разговор",
        },
      },
    ];
  }

  if (pageKey === "faq") {
    return [
      {
        title: en ? "Launch and support" : "Запуск и поддержка",
        faq: [
          { title: en ? "Do you keep old PHP URLs?" : "Вы сохраняете старые PHP URL?", text: en ? "Yes. Important URLs are preserved and legacy routes receive redirects." : "Да. Важные URL сохраняются, а legacy-маршруты получают редиректы." },
          { title: en ? "Will Russian be default?" : "Русский будет по умолчанию?", text: en ? "Yes. RU is the default locale, EN remains available through the switch." : "Да. RU — язык по умолчанию, EN доступен через переключатель." },
          { title: en ? "Can pages be expanded later?" : "Можно расширять страницы дальше?", text: en ? "Yes. The section model supports cards, facts, steps, FAQ and CTA blocks." : "Да. Модель секций поддерживает карточки, факты, этапы, FAQ и CTA." },
        ],
        cta: {
          title: en ? "Still have questions?" : "Остались вопросы?",
          text: en ? "Send a short message and we will answer in detail." : "Отправьте короткое сообщение, и мы подробно ответим.",
          href: "/contact",
          label: en ? "Ask question" : "Задать вопрос",
        },
      },
    ];
  }

  if (pageKey === "vacancies") {
    return [
      {
        title: en ? "We care about calm production" : "Нам важно спокойное производство",
        variant: "plain",
        body: en
          ? "The best collaborators are not the loudest. They communicate early, show risks honestly and ship small finished parts without drama."
          : "Лучшие исполнители не самые громкие. Они заранее говорят о рисках, честно показывают ограничения и спокойно доводят небольшие части до результата.",
      },
      {
        title: en ? "How collaboration starts" : "Как начинается сотрудничество",
        variant: "timeline",
        steps: [
          { title: en ? "Application" : "Отклик", text: en ? "Send your specialization, portfolio and preferred workload." : "Отправьте специализацию, портфолио и желаемую загрузку." },
          { title: en ? "Intro call" : "Знакомство", text: en ? "We discuss experience, communication and project types." : "Обсуждаем опыт, коммуникацию и типы проектов." },
          { title: en ? "Test or pilot" : "Тест или пилот", text: en ? "Small task or pilot sprint with clear expectations." : "Небольшая задача или пилотный спринт с понятными ожиданиями." },
          { title: en ? "Long-term work" : "Долгая работа", text: en ? "If it works, we move to recurring projects." : "Если совпадаем, переходим к регулярным проектам." },
        ],
      },
    ];
  }

  if (pageKey === "privacy") {
    return [
      {
        title: en ? "Plain language first" : "Сначала простым языком",
        variant: "editorial",
        body: en
          ? "We only ask for data that helps us process a request, answer a message, measure website performance or prepare future client functionality."
          : "Мы запрашиваем только данные, которые помогают обработать заявку, ответить на сообщение, измерить работу сайта или подготовить будущие клиентские функции.",
      },
      {
        title: en ? "Data categories" : "Категории данных",
        variant: "plain",
        cards: [
          { title: en ? "Lead forms" : "Формы заявок", text: en ? "Name, phone, email, service and message." : "Имя, телефон, email, услуга и сообщение." },
          { title: en ? "Analytics" : "Аналитика", text: en ? "Events, page visits and conversion signals." : "События, посещения страниц и сигналы конверсии." },
          { title: en ? "Authentication" : "Авторизация", text: en ? "Future cabinet may use third-party sign-in services." : "Будущий кабинет может использовать сторонние сервисы входа." },
        ],
      },
    ];
  }

  if (pageKey === "calculator") {
    return [
      {
        title: en ? "Why estimates are ranges" : "Почему оценка диапазоном",
        variant: "featureBand",
        body: en
          ? "The same page can be simple or complex depending on integrations, content quality, design depth and launch risks. The calculator gives a starting range, then we clarify details after a short brief."
          : "Одна и та же страница может быть простой или сложной из-за интеграций, качества контента, глубины дизайна и рисков запуска. Калькулятор даёт стартовый диапазон, детали уточняем после короткого брифа.",
      },
      {
        title: en ? "Calculator preview" : "Как будет работать калькулятор",
        variant: "timeline",
        steps: [
          { title: en ? "Choose service" : "Выбор услуги", text: en ? "SEO, ads, landing, store, corporate site or iOS." : "SEO, реклама, лендинг, магазин, корпоративный сайт или iOS." },
          { title: en ? "Set complexity" : "Сложность", text: en ? "Pages, integrations, design level, content and timeline." : "Страницы, интеграции, уровень дизайна, контент и сроки." },
          { title: en ? "Get direction" : "Понять направление", text: en ? "The result explains complexity and the right next step." : "Результат объясняет сложность и правильный следующий шаг." },
          { title: en ? "Send request" : "Заявка", text: en ? "Final estimate is clarified after the brief." : "Финальная оценка уточняется после брифа." },
        ],
        cta: {
          title: en ? "Need calculation now?" : "Нужен расчёт сейчас?",
          text: en ? "Send project details and we will estimate manually." : "Отправьте детали проекта, и мы оценим вручную.",
          href: "/contact",
          label: en ? "Request estimate" : "Запросить расчёт",
        },
      },
    ];
  }

  if (pageKey === "blog") {
    return [
      {
        title: en ? "Written from practice" : "Пишем из практики",
        variant: "plain",
        body: en
          ? "The blog is not a set of abstract marketing notes. Each topic is tied to questions clients ask during SEO, ads, website and analytics work."
          : "Блог — не набор абстрактных заметок про маркетинг. Каждая тема связана с вопросами, которые клиенты задают во время SEO, рекламы, разработки и аналитики.",
      },
      {
        title: en ? "More growth topics" : "Больше тем про digital-рост",
        variant: "mosaic",
        cards: [
          { title: en ? "Local SEO for Kazakhstan" : "Локальное SEO для бизнеса в Казахстане", text: en ? "How city demand and maps affect leads." : "Как городской спрос и карты влияют на заявки.", meta: en ? "SEO · 2025-10-15" : "SEO · 2025-10-15" },
          { title: en ? "Google Analytics 4 setup" : "Настройка Google Analytics 4", text: en ? "Events, conversions and reports for business decisions." : "События, конверсии и отчёты для решений бизнеса.", meta: en ? "Analytics · 2025-10-20" : "Аналитика · 2025-10-20" },
          { title: en ? "Website speed improvements" : "Как ускорить загрузку сайта", text: en ? "Performance improvements that affect SEO and conversion." : "Улучшения скорости, влияющие на SEO и конверсию.", meta: en ? "Development · 2025-09-30" : "Разработка · 2025-09-30" },
          { title: en ? "Retargeting" : "Ретаргетинг", text: en ? "How to bring back lost customers." : "Как возвращать потерянных клиентов.", meta: "Google Ads · 2025-09-15" },
        ],
      },
    ];
  }

  if (pageKey === "portfolio") {
    return [
      {
        title: en ? "Cases are not decoration" : "Кейсы не для декорации",
        variant: "editorial",
        body: en
          ? "A good portfolio should explain what changed in the business: the offer became clearer, the flow became shorter, the website started supporting ads, SEO or sales conversations."
          : "Хорошее портфолио должно объяснять, что изменилось в бизнесе: оффер стал понятнее, путь короче, сайт начал поддерживать рекламу, SEO или продажи.",
      },
      {
        title: en ? "What each case shows" : "Что показывают кейсы",
        variant: "split",
        cards: [
          { title: en ? "Challenge" : "Задача", text: en ? "Business context and the user problem behind the project." : "Контекст бизнеса и пользовательская проблема проекта." },
          { title: en ? "Solution" : "Решение", text: en ? "Structure, design, technology and integrations used." : "Структура, дизайн, технологии и использованные интеграции." },
          { title: en ? "Outcome" : "Результат", text: en ? "What changed for the client and where the project can grow." : "Что изменилось для клиента и куда проект можно развивать." },
        ],
        cta: {
          title: en ? "Want a similar case?" : "Хотите похожий кейс?",
          text: en ? "Tell us about your niche and current digital system." : "Расскажите о нише и текущей digital-системе.",
          href: "/contact",
          label: en ? "Discuss case" : "Обсудить кейс",
        },
      },
    ];
  }

  return [];
}
