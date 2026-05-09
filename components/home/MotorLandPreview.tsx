import Image from "next/image";

export function MotorLandPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className="h-full overflow-hidden rounded-[1.35rem] border border-black/10 bg-[#fbfaf6] shadow-[0_18px_60px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#090b10]">
      <div className="flex h-10 items-center gap-2 border-b border-black/10 bg-white px-4 dark:border-white/10 dark:bg-[#171a22]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5a45]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f5c542]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#41c777]" />
        <span className="ml-3 flex h-4 flex-1 items-center rounded-full bg-black/[0.04] px-3 text-[9px] font-bold uppercase tracking-[0.16em] text-black/62 dark:bg-white/[0.08] dark:text-white/90">
          motor-land.kz
        </span>
      </div>

      <div className={`relative h-[calc(100%-2.5rem)] overflow-hidden bg-black ${compact ? "" : "min-h-[390px]"}`}>
        <Image
          src="/motor-land-preview.png"
          alt="Motor-Land.kz website preview"
          fill
          sizes={compact ? "(max-width: 768px) 100vw, 45vw" : "(max-width: 768px) 100vw, 1100px"}
          className="object-cover object-top"
          priority={!compact}
        />
      </div>
    </div>
  );
}
