"use client";

import { Calculator, Check, Clock, Layers3, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

type Locale = "ru" | "en";
type ServiceKey = "landing" | "ecommerce" | "corporate" | "seo" | "ads" | "ios";
type ComplexityKey = "base" | "standard" | "premium";

const serviceData: Record<ServiceKey, {
  ru: string;
  en: string;
  formatRu: string;
  formatEn: string;
  timelineRu: string;
  timelineEn: string;
}> = {
  landing: { ru: "Лендинг", en: "Landing page", formatRu: "одна сильная посадочная", formatEn: "one focused lead page", timelineRu: "10-14 рабочих дней", timelineEn: "10-14 business days" },
  ecommerce: { ru: "Интернет-магазин", en: "E-commerce", formatRu: "каталог + checkout", formatEn: "catalog + checkout", timelineRu: "6-12 недель", timelineEn: "6-12 weeks" },
  corporate: { ru: "Корпоративный сайт", en: "Corporate website", formatRu: "структура компании", formatEn: "company structure", timelineRu: "4-8 недель", timelineEn: "4-8 weeks" },
  seo: { ru: "SEO-продвижение", en: "SEO", formatRu: "ежемесячный growth-цикл", formatEn: "monthly growth cycle", timelineRu: "первые сигналы 3-4 месяца", timelineEn: "first signals in 3-4 months" },
  ads: { ru: "Google Ads", en: "Google Ads", formatRu: "быстрый тест спроса", formatEn: "fast demand test", timelineRu: "запуск после настройки", timelineEn: "launch after setup" },
  ios: { ru: "iOS-приложение", en: "iOS app", formatRu: "MVP или бизнес-приложение", formatEn: "MVP or business app", timelineRu: "MVP 6-8 недель", timelineEn: "MVP 6-8 weeks" },
};

const complexityMultipliers: Record<ComplexityKey, {
  ru: string;
  en: string;
  points: number;
  detailRu: string;
  detailEn: string;
}> = {
  base: { ru: "Базовый", en: "Base", points: 1, detailRu: "минимальный набор функций", detailEn: "essential scope" },
  standard: { ru: "Стандарт", en: "Standard", points: 2, detailRu: "больше секций, контента и интеграций", detailEn: "more sections, content and integrations" },
  premium: { ru: "Премиум", en: "Premium", points: 3, detailRu: "сложная логика, анимации и расширенная аналитика", detailEn: "advanced logic, motion and analytics" },
};

const addOns = [
  { key: "copy", ru: "Копирайтинг", en: "Copywriting" },
  { key: "analytics", ru: "Расширенная аналитика", en: "Advanced analytics" },
  { key: "crm", ru: "CRM / Telegram интеграция", en: "CRM / Telegram integration" },
  { key: "motion", ru: "Premium-анимации", en: "Premium motion" },
] as const;

export function CostCalculator({ locale }: { locale: Locale }) {
  const [service, setService] = useState<ServiceKey>("landing");
  const [complexity, setComplexity] = useState<ComplexityKey>("standard");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["analytics"]);
  const isEn = locale === "en";

  const scope = useMemo(() => {
    const points = complexityMultipliers[complexity].points + selectedAddOns.length;
    if (points <= 2) {
      return {
        label: isEn ? "Compact launch" : "Компактный запуск",
        note: isEn ? "Good for testing one offer quickly." : "Подходит, чтобы быстро проверить один оффер.",
      };
    }

    if (points <= 4) {
      return {
        label: isEn ? "Balanced project" : "Сбалансированный проект",
        note: isEn ? "Enough depth for content, analytics and conversion." : "Достаточно глубины для контента, аналитики и конверсии.",
      };
    }

    return {
      label: isEn ? "Expanded system" : "Расширенная система",
      note: isEn ? "Best when the project has many flows, integrations or launch risks." : "Лучше для проектов с несколькими сценариями, интеграциями или рисками запуска.",
    };
  }, [complexity, isEn, selectedAddOns]);

  const toggleAddOn = (key: string) => {
    setSelectedAddOns((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );
  };

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
                {isEn ? "Interactive planner" : "Интерактивный планер"}
              </p>
              <h2 className="font-radio text-4xl font-black tracking-[-0.07em]">
                {isEn ? "Configure the project" : "Настройте проект"}
              </h2>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            <div>
              <p className="mb-3 text-sm font-bold text-black/55 dark:text-white/55">
                {isEn ? "Service" : "Услуга"}
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
                        : "border-black/10 bg-white text-black dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
                    }`}
                  >
                    <span className="text-sm font-black">{isEn ? serviceData[key].en : serviceData[key].ru}</span>
                    <span className="mt-1 block text-xs font-semibold opacity-65">
                      {isEn ? serviceData[key].formatEn : serviceData[key].formatRu}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold text-black/55 dark:text-white/55">
                {isEn ? "Complexity" : "Сложность"}
              </p>
              <div className="grid gap-3 md:grid-cols-3">
                {(Object.keys(complexityMultipliers) as ComplexityKey[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setComplexity(key)}
                    className={`rounded-2xl border p-4 text-left transition duration-300 hover:-translate-y-1 ${
                      complexity === key
                        ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                        : "border-black/10 bg-white text-black dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
                    }`}
                  >
                    <span className="text-sm font-black">{isEn ? complexityMultipliers[key].en : complexityMultipliers[key].ru}</span>
                    <span className="mt-1 block text-xs font-semibold opacity-65">
                      {isEn ? complexityMultipliers[key].detailEn : complexityMultipliers[key].detailRu}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold text-black/55 dark:text-white/55">
                {isEn ? "Add-ons" : "Дополнительно"}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {addOns.map((item) => {
                  const active = selectedAddOns.includes(item.key);
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => toggleAddOn(item.key)}
                      className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-4 text-left transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.05]"
                    >
                      <span>
                        <span className="block text-sm font-black">{isEn ? item.en : item.ru}</span>
                        <span className="mt-1 block text-xs font-semibold text-black/45 dark:text-white/45">
                          {isEn ? "adds scope" : "добавляет объём"}
                        </span>
                      </span>
                      <span className={`grid h-7 w-7 place-items-center rounded-full ${active ? "bg-[#ff5a45] text-white" : "bg-black/5 text-black/30 dark:bg-white/10 dark:text-white/30"}`}>
                        {active && <Check className="h-4 w-4" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <aside data-gsap="soft-scale" className="rounded-[2.25rem] bg-black p-7 text-white shadow-[0_24px_90px_rgba(0,0,0,0.16)] dark:bg-white dark:text-black sm:p-9">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff5a45]">
                {isEn ? "Recommended format" : "Рекомендуемый формат"}
              </p>
              <h2 className="mt-3 font-radio text-5xl font-black tracking-[-0.08em] sm:text-6xl">
                {scope.label}
              </h2>
              <p className="mt-3 max-w-lg text-lg font-bold leading-7 opacity-60">
                {scope.note}
              </p>
            </div>
            <Sparkles className="h-10 w-10 text-[#ff5a45]" />
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
                {isEn ? "Selected add-ons" : "Выбранные опции"}
              </p>
              <p className="mt-2 flex items-center gap-2 text-lg font-black">
                <Layers3 className="h-4 w-4 text-[#ff5a45]" />
                {selectedAddOns.length === 0
                  ? isEn ? "No extras" : "Без дополнительных опций"
                  : selectedAddOns.length}
              </p>
            </div>
          </div>

          <a
            href="#contact-form"
            className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-[#ff5a45] px-6 py-4 text-sm font-black text-white transition hover:scale-[1.01]"
          >
            {isEn ? "Send request with this scope" : "Отправить заявку с этим объёмом"}
          </a>
          <p className="mt-4 text-center text-xs font-medium opacity-45">
            {isEn
              ? "We clarify the final scope after a short brief and project review."
              : "Финальный объём уточняется после короткого брифа и разбора проекта."}
          </p>
        </aside>
      </div>
    </section>
  );
}
