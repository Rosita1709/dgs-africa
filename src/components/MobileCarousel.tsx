import { useRef, useState, useEffect, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileCarouselProps {
  children: ReactNode;
  className?: string;
  /** Tailwind classes for the inner flex/grid container on desktop (md+) */
  desktopClassName?: string;
}

/**
 * Horizontal snap scroller with left/right arrow controls (mobile only).
 * On md+ screens, falls back to the desktop layout via `desktopClassName`.
 */
const MobileCarousel = ({
  children,
  className,
  desktopClassName = "lg:grid lg:grid-cols-3 lg:gap-8",
}: MobileCarouselProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={scrollerRef}
        className={cn(
          "flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4",
          "lg:overflow-x-visible lg:snap-none lg:pb-0 lg:mx-0 lg:px-0",
          desktopClassName,
        )}
      >
        {children}
      </div>

      {/* Mobile arrows */}
      <button
        type="button"
        aria-label="Précédent"
        onClick={() => scrollBy(-1)}
        disabled={!canPrev}
        className={cn(
          "lg:hidden absolute left-1 top-1/2 -translate-y-1/2 z-20",
          "w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg",
          "flex items-center justify-center transition-all duration-300",
          canPrev ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        aria-label="Suivant"
        onClick={() => scrollBy(1)}
        disabled={!canNext}
        className={cn(
          "lg:hidden absolute right-1 top-1/2 -translate-y-1/2 z-20",
          "w-10 h-10 rounded-full bg-accent text-accent-foreground shadow-lg",
          "flex items-center justify-center transition-all duration-300",
          canNext ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default MobileCarousel;
