"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="container-page flex min-h-screen flex-col items-center justify-center text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-semantic-error">
        Error
      </p>
      <h1 className="mt-4 font-radio text-4xl font-black">
        Что-то пошло не так
      </h1>
      <p className="mt-4 max-w-xl text-text-secondary">{error.message}</p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-neon-purple px-6 py-3 font-semibold text-white"
      >
        Повторить
      </button>
    </main>
  );
}
