type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-neon-blue">
          {eyebrow}
        </p>
      )}
      <h2 className="font-radio text-3xl font-black tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
