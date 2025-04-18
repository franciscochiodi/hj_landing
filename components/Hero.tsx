"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  
  // Efecto de parallax y animaciones al cargar/scroll
  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Controlar la aparición del contenido basado en scroll
      if (scrollPosition > 50) {  // Umbral bajo para que aparezca casi inmediatamente
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Efecto parallax muy sutil en la imagen de fondo
      if (heroRef.current) {
        const bgImage = heroRef.current.querySelector(".bg-image") as HTMLElement;
        if (bgImage) {
          // Valor muy bajo para hacer el parallax más sutil
          bgImage.style.transform = `translateY(${scrollPosition * 0.008}px)`;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Ejecutar el handleScroll una vez para establecer el estado inicial
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
      {/* Imagen de fondo con efecto parallax sutil */}
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
          {/* Gradiente lateral para mejorar legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent mix-blend-multiply"></div>
        </div>
      </div>
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-20 h-20 rounded-full bg-white/20 blur-xl animate-float-slow"></div>
        <div className="absolute top-[60%] left-[5%] w-32 h-32 rounded-full bg-white/10 blur-xl animate-float-medium"></div>
        <div className="absolute bottom-[15%] right-[20%] w-24 h-24 rounded-full bg-azul-claro/20 blur-xl animate-float-fast"></div>
      </div>
      
      {/* Contenido principal que aparece con animación desde la izquierda */}
      <div className="container mx-auto px-6 lg:px-16 py-20 md:py-28 pb-36 relative z-10">
        <div 
          className={`max-w-8xl mt-[18vh] transition-all duration-1000 ease-out 
            ${scrolled 
              ? 'opacity-100 transform translate-x-0' 
              : 'opacity-0 transform -translate-x-32 pointer-events-none'
            }`}
        >
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-monument font-light mb-8 tracking-tight transition-all duration-700 ease-out"
          >
            SOMOS EL ARTE Y LA CULTURA QUE AMAMOS
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl mb-12 font-light leading-relaxed transition-all duration-700 ease-out delay-100"
          >
            Refugio musical que da lugar a una experiencia donde conviven artistas, creativos y maestros gastronómicos.
          </p>
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out delay-200"
          >
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-center font-medium transition-colors text-lg"
            >
              Reservar
            </a>
            <a
              href="#artists"
              className="border-2 border-white hover:bg-white hover:text-azul-profundo px-8 py-4 rounded-lg text-center font-medium transition-colors text-lg"
            >
              Artistas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Añade estas animaciones a tu archivo global de CSS
/*
@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes float-fast {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 4s ease-in-out infinite;
}
*/

export default Hero;
