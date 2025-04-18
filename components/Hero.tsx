"use client";
import React, { useEffect, useRef } from "react";
import Image from 'next/image';

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const bgImage = heroRef.current.querySelector<HTMLElement>(".bg-image");
        if (bgImage) {
          bgImage.style.transform = `translateY(${window.scrollY * 0.008}px)`;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative bg-azul-profundo text-white overflow-hidden min-h-[120vh] flex items-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="bg-image w-full h-[135%] transition-transform duration-300 relative">
          <Image 
            src="/images/hero-dj.jpg" 
            alt="House Journey Events" 
            fill
            sizes="100vw"
            priority
            className="object-cover object-center brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent mix-blend-multiply"></div>
        </div>
      </div>
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-20 h-20 rounded-full bg-white/20 blur-xl animate-float-slow"></div>
        <div className="absolute top-[60%] left-[5%] w-32 h-32 rounded-full bg-white/10 blur-xl animate-float-medium"></div>
        <div className="absolute bottom-[15%] right-[20%] w-24 h-24 rounded-full bg-azul-claro/20 blur-xl animate-float-fast"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-16 py-20 md:py-28 pb-36 relative z-10">
        <div 
          className="max-w-8xl mt-[18vh] animate-fade-in"
        >
          <h1 
            className="text-3xl md:text-5xl font-monument font-light mb-6 tracking-tight"
          >
            SOMOS EL ARTE Y LA CULTURA QUE AMAMOS
          </h1>
          <p 
            className="text-lg md:text-xl mb-8 font-light leading-relaxed"
          >
            Refugio musical que da lugar a una experiencia donde conviven artistas, creativos y maestros gastronómicos.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors text-base"
            >
              Reservar
            </a>
            <a
              href="#artists"
              className="border-2 border-white hover:bg-white hover:text-azul-profundo px-6 py-3 rounded-lg text-center font-medium transition-colors text-base"
            >
              Artistas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
