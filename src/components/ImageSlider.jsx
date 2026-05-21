"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://images.unsplash.com/photo-1696395050055-eb7a315bb1cb?q=80&w=870&auto=format&fit=crop" },
  { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=822&auto=format&fit=crop" },
  { url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=870&auto=format&fit=crop" },
];

const ImageSlider = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(Math.min(window.innerWidth - 20, 1200));
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="w-full flex justify-center py-6">
      
      {/* Slider wrapper */}
      <div className="relative">
        
        <SimpleImageSlider
          width={width}
          height={Math.round(width * 0.42)}
          images={images}
          showBullets={true}
          showNavs={true}
        />

        {/* 🔥 Overlay Button */}
        <Link href={"/tutors"}>
        <button
          
          className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 
                     bg-black/70 text-white rounded-full 
                     hover:bg-black transition"
        >
          Browse More
        </button></Link>

      </div>
    </div>
  );
};

export default ImageSlider;