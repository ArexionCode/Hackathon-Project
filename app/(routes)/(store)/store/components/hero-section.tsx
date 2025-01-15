"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  const [heroImage, setHeroImage] = useState("/default-hero-image.jpg");

  useEffect(() => {
    // Fetch the hero image URL from the server or local storage
    const savedHeroImage = localStorage.getItem("heroImage");
    if (savedHeroImage) {
      setHeroImage(savedHeroImage);
    }
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-100">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="relative flex items-center justify-center h-full px-4 mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="mb-6 text-6xl font-bold text-gray-900">
            Discover the Latest Trends
          </h1>
          <p className="mb-8 text-xl text-gray-700">
            Shop the newest arrivals and exclusive collections.
          </p>
          <Button size="lg" className="px-8 text-lg">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}