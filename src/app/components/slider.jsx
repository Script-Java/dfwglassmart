"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "../assets/img/slider/1.jpg";
import img2 from "../assets/img/slider/2.jpg";
import img3 from "../assets/img/slider/3.jpg";
import img4 from "../assets/img/slider/4.jpg";
import img5 from "../assets/img/slider/5.png";
import img6 from "../assets/img/slider/6.jpg";
import Link from "next/link";
const slides = [img1, img2, img3, img4, img5, img6];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images with fade */}
      {slides.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          fill
          sizes="100vw"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
          priority={i === 0}
        />
      ))}

      {/* Static Text Content */}
      <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-white text-4xl md:text-6xl max-w-7xl font-bold mb-4">
          Trusted Auto & Residential Glass Repair & Replacement in Dallas
        </h2>
        <p className="text-white text-lg md:text-xl mb-6 max-w-6xl">
          At DFW Glass Mart, we are a full-service auto glass repair company dedicated to providing top-quality solutions. As your trusted source for auto glass repair and windshield replacement services in Dallas, we pride ourselves on delivering exceptional service. We offer a complete range of options, including after-market, premium, and OEM replacements, to meet all your vehicle’s needs. Additionally, our team uses the latest tools and techniques to ensure every job is done right the first time. Whether you need a quick repair or a complete windshield replacement, DFW Glass Mart is here to help. Contact us today for fast, reliable, and affordable auto glass services!
        </p>
        <Link className="btn btn-primary p-4 mt-4" href={'/quote'}>
          GET A QUOTE TODAY
        </Link>
      </div>
    </div>
  );
};

export default Slider;
