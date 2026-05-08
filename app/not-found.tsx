import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <main className="container-page flex min-h-screen flex-col items-center justify-center text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-neon-blue">
        404
      </p>
      <h1 className="mt-4 font-radio text-4xl font-black">Страница не найдена</h1>
      <p className="mt-4 max-w-xl text-text-secondary">
        Раздел будет восстановлен в одной из следующих фаз миграции.
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
