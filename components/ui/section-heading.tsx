import { cn } from "@/lib/utils";

type Props = {
  /** Use cream color for dark backgrounds */
  light?: boolean;
  /** Override or extend the default classes */
  className?: string;
  children: React.ReactNode;
};

/**
 * H2 section heading — Fraunces, fluid clamp, light weight, tight letter-spacing.
 * The single source of truth for the "big editorial title" pattern across sections.
 */
export function SectionHeading({ light = false, className, children }: Props) {
  return (
    <h2
      className={cn(
        "font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em]",
        light && "text-cream",
        className,
      )}
    >
      {children}
    </h2>
  );
}
