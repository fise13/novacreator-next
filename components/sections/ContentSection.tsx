type ContentSectionProps = {
  title: string;
  description: string;
  label?: string;
};

export function ContentSection({ title, description, label }: ContentSectionProps) {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="glass-panel mx-auto max-w-4xl rounded-[2rem] p-8 sm:p-12">
          {label && (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-neon-blue">
              {label}
            </p>
          )}
          <h1 className="font-radio text-4xl font-black tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-secondary">{description}</p>
        </div>
      </div>
    </section>
  );
}
