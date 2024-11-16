"use client";

import Image from "next/image";
import { useState } from "react";

type ImageCardProps = {
  name: string;
  imageUrl: string;
};

export const ImageCard = ({ name, imageUrl }: ImageCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-[300px]">
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-gray-200 z-10 transition-opacity duration-300 ${
            isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-8 h-8 border-4 border-gray-400 border-t-transparent rounded-full animate-spin mb-2" />
          <span className="text-gray-500">Loading...</span>
        </div>
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          onLoadingComplete={() => setIsLoading(false)}
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
};
