"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cambiar el estado cuando el scroll pasa de 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Añadir event listener
    window.addEventListener("scroll", handleScroll);
    
    // Ejecutar una vez para establecer el estado inicial
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para manejar el desplazamiento suave a las secciones
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Calcular la posición de desplazamiento teniendo en cuenta el header
      const offset = 100; // Ajusta este valor según la altura de tu header
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`
        fixed z-50 transition-all duration-300 py-4
        ${scrolled 
          ? 'top-4 left-4 right-4 rounded-xl shadow-lg bg-black/70 backdrop-blur-md' 
          : 'top-0 left-0 right-0 w-full bg-transparent'
        }
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className={`drop-shadow-md relative w-40 h-14 transition-transform duration-300 ${scrolled ? 'scale-95' : ''}`}>
          <Link href="/">
            <Image 
              src="/images/LogoBlanco.png" 
              alt="House Journey" 
              width={400} 
              height={400} 
              className="object-contain absolute top-1/2 -translate-y-1/2 -left-8"
              priority
            />
          </Link>
        </div>
        
        {/* Navegación */}
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#inicio" 
            onClick={scrollToSection('inicio')}
            className="text-white font-monument font-regular uppercase tracking-wide text-sm hover:text-blue-300 transition-colors drop-shadow-sm cursor-pointer"
          >
            Inicio
          </a>
          <a 
            href="#nosotros" 
            onClick={scrollToSection('nosotros')}
            className="text-white font-monument font-light uppercase tracking-wide text-sm hover:text-blue-300 transition-colors drop-shadow-sm cursor-pointer"
          >
            Sobre Nosotros
          </a>
          <a 
            href="#formatos" 
            onClick={scrollToSection('formatos')}
            className="text-white font-monument font-light uppercase tracking-wide text-sm hover:text-blue-300 transition-colors drop-shadow-sm cursor-pointer"
          >
            Formatos
          </a>
          <a 
            href="#artistas" 
            onClick={scrollToSection('artistas')}
            className="text-white font-monument font-light uppercase tracking-wide text-sm hover:text-blue-300 transition-colors drop-shadow-sm cursor-pointer"
          >
            Artistas
          </a>
          <a 
            href="#media" 
            onClick={scrollToSection('media')}
            className="text-white font-monument font-light uppercase tracking-wide text-sm hover:text-blue-300 transition-colors drop-shadow-sm cursor-pointer"
          >
            Media
          </a>
        </nav>
        
        {/* Botón de tickets */}
        <Link 
          href="/tickets"
          className="
            bg-transparent border border-white 
            hover:bg-white/20 text-white 
            px-6 py-2 rounded-md 
            font-monument font-light uppercase tracking-wide text-sm
            transition-colors
            drop-shadow-sm
          "
        >
          Tickets
        </Link>
        
        {/* Menú móvil (hamburguesa) - Solo se mostraría en versión móvil */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;