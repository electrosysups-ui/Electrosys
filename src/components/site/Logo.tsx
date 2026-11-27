import { cn } from "@/lib/utils";

export function LogoMark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10 shrink-0", className)}
      aria-hidden="true"
    >
      {/* Outer rounded square container matching website theme */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="12"
        className={tone === "light" ? "fill-white/10 stroke-primary/40" : "fill-primary-soft stroke-primary/25"}
        strokeWidth="1.5"
      />
      {/* Dynamic dual energy swoosh / sine wave mark */}
      <path
        d="M9 26C12.5 14 18 14 21.5 24C25 34 30.5 34 34 22C35.8 16 37.8 15 39.5 18"
        stroke="var(--primary)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 32C15.5 22 20 22 23.5 29C27 36 32 35 36 25"
        stroke={tone === "light" ? "#ffffff" : "var(--primary-deep)"}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}

export function Logo({
  className,
  tone = "dark",
  size = "md",
}: {
  className?: string;
  imageClassName?: string;
  tone?: "dark" | "light";
  size?: "md" | "lg";
}) {
  const isLarge = size === "lg";

  return (
    <span
      className={cn(
        "inline-flex items-center transition-transform duration-200 hover:scale-[1.015] select-none",
        className,
      )}
    >
      <span
        className="flex flex-col items-center text-center leading-none"
        style={{ fontFamily: "'Candara', ui-sans-serif, system-ui, sans-serif" }}
      >
        <span
          className={cn(
            "font-extrabold tracking-tight",
            isLarge
              ? "text-4xl sm:text-6xl md:text-7xl"
              : "text-3xl sm:text-4xl md:text-[2.65rem]",
            tone === "light" ? "text-white" : "text-ink",
          )}
        >
          <span className="text-[#3592CD]">Electro</span>
          <span className="text-primary">sys</span>
        </span>
        <span
          className={cn(
            "font-bold tracking-[0.12em]",
            isLarge
              ? "mt-2 text-sm sm:text-base md:text-lg"
              : "mt-1 text-[0.72rem] sm:text-[0.8rem]",
            tone === "light" ? "text-primary" : "text-primary-deep",
          )}
        >
          *Sine Wave *No Break
        </span>
      </span>
    </span>
  );
}
