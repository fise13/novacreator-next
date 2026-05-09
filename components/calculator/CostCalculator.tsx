"use client";

import { Calculator, Clock, CreditCard, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

type Locale = "ru" | "en";
type ServiceKey = "seo" | "development" | "ads" | "ios";
type Currency = "KZT" | "RUB" | "USD";
type SiteType = "small" | "medium" | "large" | "shop";
type Region = "local" | "regional" | "national" | "international";
type Competition = "low" | "medium" | "high";
type Niche = "general" | "restaurant" | "fitness" | "ecommerce" | "hotel" | "medical" | "education";
type DevType = "landing" | "corporate" | "shop" | "webapp";
type Platform = "google" | "yandex" | "both";
type IosType = "mvp" | "business" | "complex";
type IosIntegrations = "basic" | "extended" | "enterprise";

const serviceData: Record<ServiceKey, { ru: string; en: string; noteRu: string; noteEn: string; timelineRu: string; timelineEn: string }> = {
  seo: {
    ru: "SEO",
    en: "SEO",
    noteRu: "продвижение сайта в поиске",
    noteEn: "organic search growth",
    timelineRu: "3-6 месяцев до заметной динамики",
    timelineEn: "3-6 months to visible movement",
  },
  development: {
    ru: "Разработка",
    en: "Development",
    noteRu: "лендинг, сайт, магазин или веб-приложение",
    noteEn: "landing, website, store or web app",
    timelineRu: "10 дней - 12 недель",
    timelineEn: "10 days - 12 weeks",
  },
  ads: {
    ru: "Google / Яндекс Ads",
    en: "Google / Yandex Ads",
    noteRu: "ведение рекламы от бюджета",
    noteEn: "management fee from media budget",
    timelineRu: "запуск после настройки",
    timelineEn: "launch after setup",
  },
  ios: {
    ru: "iOS",
    en: "iOS",
    noteRu: "MVP, бизнес-приложение или сложная система",
    noteEn: "MVP, business app or complex system",
    timelineRu: "MVP 6-8 недель",
    timelineEn: "MVP 6-8 weeks",
  },
};

const currencies: Record<Currency, { rate: number; symbol: string; locale: string }> = {
  KZT: { rate: 1, symbol: "₸", locale: "ru-RU" },
  RUB: { rate: 1 / 5.5, symbol: "₽", locale: "ru-RU" },
  USD: { rate: 1 / 480, symbol: "$", locale: "en-US" },
};

const siteTypes: Record<SiteType, { ru: string; en: string; base: number }> = {
  small: { ru: "Визитка", en: "Small website", base: 90_000 },
  medium: { ru: "Корпоративный", en: "Corporate", base: 150_000 },
  large: { ru: "Крупный сайт", en: "Large website", base: 250_000 },
  shop: { ru: "Магазин", en: "Store", base: 220_000 },
};

const regionMultipliers: Record<Region, { ru: string; en: string; value: number }> = {
  local: { ru: "Город", en: "City", value: 0.8 },
  regional: { ru: "Область", en: "Region", value: 1 },
  national: { ru: "Вся страна", en: "Country", value: 1 },
  international: { ru: "Несколько стран", en: "International", value: 1.3 },
};

const competitionMultipliers: Record<Competition, { ru: string; en: string; value: number }> = {
  low: { ru: "Низкая", en: "Low", value: 0.9 },
  medium: { ru: "Средняя", en: "Medium", value: 1 },
  high: { ru: "Высокая", en: "High", value: 1.2 },
};

const devTypes: Record<DevType, { ru: string; en: string; base: number }> = {
  landing: { ru: "Лендинг", en: "Landing page", base: 180_000 },
  corporate: { ru: "Корпоративный сайт", en: "Corporate website", base: 300_000 },
  shop: { ru: "Интернет-магазин", en: "Online store", base: 500_000 },
  webapp: { ru: "Веб-приложение", en: "Web app", base: 750_000 },
};

const niches: Record<Niche, { ru: string; en: string; exampleRu: string; exampleEn: string; multiplier: Record<DevType, number> }> = {
  general: {
    ru: "Общая",
    en: "General",
    exampleRu: "Базовая оценка без отраслевого множителя",
    exampleEn: "Base estimate without industry multiplier",
    multiplier: { landing: 1, corporate: 1, shop: 1, webapp: 1 },
  },
  restaurant: {
    ru: "Ресторан / кафе",
    en: "Restaurant / cafe",
    exampleRu: "Кофейня на Абая - современный сайт с онлайн-меню",
    exampleEn: "Coffee shop on Abay - modern site with online menu",
    multiplier: { landing: 1, corporate: 0.9, shop: 0.85, webapp: 1 },
  },
  fitness: {
    ru: "Фитнес",
    en: "Fitness",
    exampleRu: "FlexFit - приложение для трекинга тренировок",
    exampleEn: "FlexFit - workout tracking app",
    multiplier: { landing: 1, corporate: 1.1, shop: 1, webapp: 1.2 },
  },
  ecommerce: {
    ru: "E-commerce",
    en: "E-commerce",
    exampleRu: "StyleKZ - онлайн-магазин одежды",
    exampleEn: "StyleKZ - online fashion store",
    multiplier: { landing: 0.9, corporate: 1, shop: 1, webapp: 1.1 },
  },
  hotel: {
    ru: "Отель",
    en: "Hotel",
    exampleRu: "Lakeview Hotel - сайт отеля с бронированием",
    exampleEn: "Lakeview Hotel - hotel site with booking",
    multiplier: { landing: 1, corporate: 1, shop: 1, webapp: 1.3 },
  },
  medical: {
    ru: "Медицина",
    en: "Medical",
    exampleRu: "Dental Care - клиника с записью онлайн",
    exampleEn: "Dental Care - clinic with online booking",
    multiplier: { landing: 0.95, corporate: 1, shop: 0.9, webapp: 1 },
  },
  education: {
    ru: "Образование",
    en: "Education",
    exampleRu: "StudyKZ - образовательная платформа",
    exampleEn: "StudyKZ - educational platform",
    multiplier: { landing: 1, corporate: 1, shop: 0.9, webapp: 1.4 },
  },
};

const platforms: Record<Platform, { ru: string; en: string; percent: number }> = {
  google: { ru: "Google", en: "Google", percent: 0.12 },
  yandex: { ru: "Яндекс", en: "Yandex", percent: 0.12 },
  both: { ru: "Google + Яндекс", en: "Google + Yandex", percent: 0.15 },
};

const iosTypes: Record<IosType, { ru: string; en: string; base: number }> = {
  mvp: { ru: "MVP", en: "MVP", base: 600_000 },
  business: { ru: "Бизнес-приложение", en: "Business app", base: 1_100_000 },
  complex: { ru: "Сложное приложение", en: "Complex app", base: 1_800_000 },
};

const iosIntegrations: Record<IosIntegrations, { ru: string; en: string; value: number }> = {
  basic: { ru: "Базовые", en: "Basic", value: 1 },
  extended: { ru: "Расширенные", en: "Extended", value: 1.12 },
  enterprise: { ru: "Enterprise", en: "Enterprise", value: 1.25 },
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function formatPrice(priceKzt: number, currency: Currency) {
  const rate = currencies[currency];
  const value = Math.round(priceKzt * rate.rate);
  const prefix = currency === "USD" ? rate.symbol : "";
  const suffix = currency === "USD" ? "" : ` ${rate.symbol}`;

  return `${prefix}${value.toLocaleString(rate.locale)}${suffix}`;
}

export function CostCalculator({ locale }: { locale: Locale }) {
  const [service, setService] = useState<ServiceKey>("development");
  const [currency, setCurrency] = useState<Currency>("KZT");
  const [siteType, setSiteType] = useState<SiteType>("medium");
  const [region, setRegion] = useState<Region>("regional");
  const [competition, setCompetition] = useState<Competition>("medium");
  const [niche, setNiche] = useState<Niche>("general");
  const [devType, setDevType] = useState<DevType>("landing");
  const [pages, setPages] = useState(10);
  const [budget, setBudget] = useState(100_000);
  const [platform, setPlatform] = useState<Platform>("google");
  const [iosType, setIosType] = useState<IosType>("mvp");
  const [iosScreens, setIosScreens] = useState(12);
  const [iosIntegration, setIosIntegration] = useState<IosIntegrations>("basic");
  const isEn = locale === "en";

  const price = useMemo(() => {
    if (service === "seo") {
      return Math.round(siteTypes[siteType].base * regionMultipliers[region].value * competitionMultipliers[competition].value);
    }

    if (service === "development") {
      const basePrice = devTypes[devType].base * niches[niche].multiplier[devType];
      return Math.round(basePrice + (clamp(pages, 1, 100) - 5) * 30_000);
    }

    if (service === "ads") {
      return Math.round(Math.max(budget, 50_000) * platforms[platform].percent);
    }

    const screens = clamp(iosScreens, 3, 80);
    const screensAdjustment = screens > 10 ? (screens - 10) * 40_000 : -(10 - screens) * 20_000;
    return Math.round((iosTypes[iosType].base + screensAdjustment) * iosIntegrations[iosIntegration].value);
  }, [budget, competition, devType, iosIntegration, iosScreens, iosType, niche, pages, platform, region, service, siteType]);

  const priceNote = useMemo(() => {
    if (service === "ads") {
      return isEn
        ? "This is the monthly management fee. Media budget is paid separately."
        : "Это стоимость ведения в месяц. Рекламный бюджет оплачивается отдельно.";
    }

    if (service === "seo") {
      return isEn
        ? "Monthly SEO budget estimate. Final scope depends on technical issues, content and competition."
        : "Ориентир ежемесячного бюджета SEO. Финальный объём зависит от техники, контента и конкуренции.";
    }

    return isEn
      ? "Approximate project estimate. The final quote is confirmed after a short brief."
      : "Ориентировочная оценка проекта. Финальная стоимость подтверждается после короткого брифа.";
  }, [isEn, service]);

  return (
    <section data-gsap="slide-stack" className="mx-auto max-w-7xl px-4 pb-24">
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="p-2 sm:p-4">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#ff5a45] text-white">
              <Calculator className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff5a45]">
                {isEn ? "Interactive estimate" : "Интерактивный расчёт"}
              </p>
              <h2 className="font-radio text-4xl font-black tracking-[-0.07em]">
                {isEn ? "Calculate the budget" : "Рассчитайте бюджет"}
              </h2>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            <div>
              <p className="mb-3 text-sm font-bold text-black/64 dark:text-white/90">
                {isEn ? "Service" : "Направление"}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {(Object.keys(serviceData) as ServiceKey[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setService(key)}
                    className={`rounded-2xl border p-4 text-left transition duration-300 hover:-translate-y-1 ${
                      service === key
                        ? "border-[#ff5a45] bg-[#ff5a45] text-white"
                        : "border-black/10 bg-white text-black dark:border-white/10 dark:bg-[#171a22] dark:text-white"
                    }`}
                  >
                    <span className="text-sm font-black">{isEn ? serviceData[key].en : serviceData[key].ru}</span>
                    <span className="mt-1 block text-xs font-semibold opacity-65">
                      {isEn ? serviceData[key].noteEn : serviceData[key].noteRu}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {service === "seo" && (
              <div className="grid gap-4">
                <SelectField label={isEn ? "Website type" : "Тип сайта"} value={siteType} onChange={(value) => setSiteType(value as SiteType)} options={siteTypes} isEn={isEn} />
                <SelectField label={isEn ? "Promotion region" : "Регион продвижения"} value={region} onChange={(value) => setRegion(value as Region)} options={regionMultipliers} isEn={isEn} />
                <SelectField label={isEn ? "Competition" : "Конкуренция"} value={competition} onChange={(value) => setCompetition(value as Competition)} options={competitionMultipliers} isEn={isEn} />
              </div>
            )}

            {service === "development" && (
              <div className="grid gap-4">
                <SelectField label={isEn ? "Project type" : "Тип разработки"} value={devType} onChange={(value) => setDevType(value as DevType)} options={devTypes} isEn={isEn} />
                <SelectField label={isEn ? "Niche" : "Ниша"} value={niche} onChange={(value) => setNiche(value as Niche)} options={niches} isEn={isEn} />
                <NumberField label={isEn ? "Pages / screens" : "Страницы / экраны"} value={pages} min={1} max={100} step={1} onChange={setPages} />
                {niche !== "general" && (
                  <div className="rounded-2xl border border-[#ff5a45]/20 bg-[#ff5a45]/10 p-4 text-sm font-bold text-black/75 dark:text-white/90">
                    {isEn ? niches[niche].exampleEn : niches[niche].exampleRu}
                  </div>
                )}
              </div>
            )}

            {service === "ads" && (
              <div className="grid gap-4">
                <NumberField label={isEn ? "Monthly ad budget, KZT" : "Рекламный бюджет в месяц, KZT"} value={budget} min={50_000} max={5_000_000} step={10_000} onChange={setBudget} />
                <SelectField label={isEn ? "Platform" : "Платформа"} value={platform} onChange={(value) => setPlatform(value as Platform)} options={platforms} isEn={isEn} />
              </div>
            )}

            {service === "ios" && (
              <div className="grid gap-4">
                <SelectField label={isEn ? "App type" : "Тип приложения"} value={iosType} onChange={(value) => setIosType(value as IosType)} options={iosTypes} isEn={isEn} />
                <NumberField label={isEn ? "Screens" : "Экраны"} value={iosScreens} min={3} max={80} step={1} onChange={setIosScreens} />
                <SelectField label={isEn ? "Integrations" : "Интеграции"} value={iosIntegration} onChange={(value) => setIosIntegration(value as IosIntegrations)} options={iosIntegrations} isEn={isEn} />
              </div>
            )}
          </div>
        </div>

        <aside data-gsap="soft-scale" className="rounded-[2.25rem] bg-black p-7 text-white shadow-[0_24px_90px_rgba(0,0,0,0.16)] dark:bg-[#171a22] dark:text-white sm:p-9">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff5a45]">
                {isEn ? "Estimated budget" : "Ориентир бюджета"}
              </p>
              <h2 className="mt-3 font-radio text-5xl font-black tracking-[-0.08em] sm:text-7xl">
                {formatPrice(price, currency)}
              </h2>
              <p className="mt-3 max-w-lg text-lg font-bold leading-7 text-white/80">
                {priceNote}
              </p>
            </div>
            <Sparkles className="h-10 w-10 text-[#ff5a45]" />
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {(Object.keys(currencies) as Currency[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCurrency(item)}
                className={`rounded-full border px-4 py-2 text-xs font-black transition ${
                  currency === item
                    ? "border-[#ff5a45] bg-[#ff5a45] text-white"
                    : "border-white/15 bg-white/10 text-white hover:border-white/30"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-3">
            <div className="rounded-2xl bg-white/10 p-4 dark:bg-black/5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-55">
                {isEn ? "Selected service" : "Выбранная услуга"}
              </p>
              <p className="mt-2 text-lg font-black">{isEn ? serviceData[service].en : serviceData[service].ru}</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 dark:bg-black/5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-55">
                {isEn ? "Timeline" : "Сроки"}
              </p>
              <p className="mt-2 flex items-center gap-2 text-lg font-black">
                <Clock className="h-4 w-4 text-[#ff5a45]" />
                {isEn ? serviceData[service].timelineEn : serviceData[service].timelineRu}
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 dark:bg-black/5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-55">
                {isEn ? "Calculation basis" : "Основа расчёта"}
              </p>
              <p className="mt-2 flex items-center gap-2 text-lg font-black">
                <CreditCard className="h-4 w-4 text-[#ff5a45]" />
                {service === "ads"
                  ? isEn ? `${Math.round(platforms[platform].percent * 100)}% fee` : `${Math.round(platforms[platform].percent * 100)}% от бюджета`
                  : isEn ? "KZT base price" : "базовая цена в KZT"}
              </p>
            </div>
          </div>

          <a
            href="#contact-form"
            className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-[#ff5a45] px-6 py-4 text-sm font-black text-white transition hover:scale-[1.01]"
          >
            {isEn ? "Send request with this estimate" : "Отправить заявку с этим расчётом"}
          </a>
          <p className="mt-4 text-center text-xs font-medium text-white/70">
            {isEn
              ? "The estimate is not a public offer. It helps start the conversation with a realistic range."
              : "Расчёт не является публичной офертой. Он помогает начать разговор с реалистичного диапазона."}
          </p>
        </aside>
      </div>
    </section>
  );
}

function SelectField({
  isEn,
  label,
  onChange,
  options,
  value,
}: {
  isEn: boolean;
  label: string;
  onChange: (value: string) => void;
  options: Record<string, { ru: string; en: string }>;
  value: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold text-black/64 dark:text-white/90">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm font-black text-black outline-none transition focus:border-[#ff5a45] focus:ring-4 focus:ring-[#ff5a45]/20 dark:border-white/10 dark:bg-[#171a22] dark:text-white dark:[color-scheme:dark]"
      >
        {Object.entries(options).map(([key, option]) => (
          <option key={key} value={key}>
            {isEn ? option.en : option.ru}
          </option>
        ))}
      </select>
    </label>
  );
}

function NumberField({
  label,
  max,
  min,
  onChange,
  step,
  value,
}: {
  label: string;
  max: number;
  min: number;
  onChange: (value: number) => void;
  step: number;
  value: number;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold text-black/64 dark:text-white/90">{label}</span>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(clamp(Number(event.target.value), min, max))}
        className="h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm font-black text-black outline-none transition focus:border-[#ff5a45] focus:ring-4 focus:ring-[#ff5a45]/20 dark:border-white/10 dark:bg-[#171a22] dark:text-white"
      />
    </label>
  );
}
