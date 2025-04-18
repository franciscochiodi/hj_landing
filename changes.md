'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Artists = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Animación al entrar en viewport
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-azul-profundo text-white"
      id="artistas"
    >
      {/* Imagen de fondo con gradiente */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full">
          <img 
            src="/images/background-artists.jpg" 
            alt="Artistas Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent mix-blend-multiply"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Encabezado de la sección */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
          }}
        >
          <h2 className="font-monument text-3xl md:text-5xl mb-4">ARTISTAS</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Próximamente anunciaremos los artistas que formarán parte de nuestros próximos eventos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Artists;
