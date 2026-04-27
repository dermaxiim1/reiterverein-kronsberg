"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import type { GalleryImage } from "@/lib/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid({ images }: { images: readonly GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div
        className="grid grid-cols-12 gap-3"
        style={{ gridAutoRows: "110px" }}
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Bild öffnen: ${img.alt}`}
            className={cn(
              "group relative overflow-hidden rounded-sm bg-paper-dark transition-transform duration-500 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest",
              img.className,
            )}
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="sr-only">{img.alt}</span>
          </button>
        ))}
      </div>

      <Lightbox
        open={openIndex !== null}
        index={openIndex ?? 0}
        close={() => setOpenIndex(null)}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </>
  );
}
