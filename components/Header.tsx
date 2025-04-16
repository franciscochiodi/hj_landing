"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-azul-profundo text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            House Journey
          </Link>
        </div>

        {/* Menu para móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú de navegación para desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-terracota transition-colors">
            Inicio
          </Link>
          <Link
            href="#about"
            className="hover:text-terracota transition-colors"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="#artists"
            className="hover:text-terracota transition-colors"
          >
            Artistas
          </Link>
          <Link
            href="#contact"
            className="bg-terracota hover:bg-azul-grisaceo text-white px-4 py-2 rounded transition-colors"
          >
            Contacto
          </Link>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-azul-grisaceo">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="hover:text-terracota transition-colors">
              Inicio
            </Link>
            <Link
              href="#about"
              className="hover:text-terracota transition-colors"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="#artists"
              className="hover:text-terracota transition-colors"
            >
              Artistas
            </Link>
            <Link
              href="#contact"
              className="bg-terracota hover:bg-azul-profundo text-white px-4 py-2 rounded transition-colors text-center"
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
