import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  locale: "ru",
  path: "/not-found",
  title: "Страница не найдена (404)",
  description: "Страница удалена или перемещена. Перейдите в нужный раздел NovaCreator.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main className="container-page flex min-h-screen flex-col items-center justify-center text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-neon-blue">
        404
      </p>
      <h1 className="mt-4 font-radio text-4xl font-black">Страница не найдена</h1>
      <p className="mt-4 max-w-xl text-text-secondary">
        Раздел временно недоступен или был перенесён на новый адрес.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-neon-purple px-6 py-3 font-semibold text-white"
      >
        На главную
      </Link>
    </main>
  );
}
