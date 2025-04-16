import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-azul-profundo text-white">
      {/* Overlay de fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-azul-profundo to-azul-grisaceo opacity-90"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Experiencias Inolvidables
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Producimos eventos que transforman momentos en memorias eternas
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-terracota hover:bg-terracota/80 text-white px-6 py-3 rounded text-center font-medium transition-colors"
            >
              Contáctanos
            </a>
            <a
              href="#artists"
              className="border border-white hover:bg-white hover:text-azul-profundo px-6 py-3 rounded text-center font-medium transition-colors"
            >
              Ver Artistas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
