"use client";
import Image from "next/image";
import { useState } from "react";

export default function CaseImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
        <span className="text-gray-500 text-sm text-center px-2">{alt}</span>
      </div>
    );
  }

  return (
    <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 relative">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, 33vw"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
