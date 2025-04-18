'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import artistsData from '@/data/artists.json';

const Artists = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  // Animación al entrar en viewport
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Tipos para los artistas
  type ArtistTier = 1 | 2 | 3 | 4 | 5; // 1 es el más importante, 5 el menos

  // Interfaz para los artistas
  interface Artist {
    name: string;
    tier: ArtistTier;
    country: string;
    bio: string;
    socialLink: string;
    initialPosition: {
      x: number; // porcentaje de la pantalla (0-100)
      y: number; // porcentaje de la pantalla (0-100)
    };
    movementSpeed: {
      x: number; // velocidad de movimiento en X (-0.5 a 0.5)
      y: number; // velocidad de movimiento en Y (-0.5 a 0.5)
    };
  }

  // Cargar artistas desde el archivo JSON
  const artists = useMemo(() => artistsData as Artist[], []);

  // Estado para controlar el artista sobre el que se hace hover
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);
  // Estado para las posiciones de los artistas (reemplaza el uso de ref para actualizar la UI)
  const [artistPositions, setArtistPositions] = useState<{[key: string]: {x: number, y: number}}>({});
  
  // Inicializar las posiciones de los artistas
  useEffect(() => {
    const initialPositions: {[key: string]: {x: number, y: number}} = {};
    artists.forEach(artist => {
      initialPositions[artist.name] = {
        x: artist.initialPosition.x,
        y: artist.initialPosition.y
      };
    });
    setArtistPositions(initialPositions);
  }, [artists]);

  // Animar el movimiento de los artistas de manera más eficiente
  useEffect(() => {
    if (Object.keys(artistPositions).length === 0) return;
    
    let prevTimestamp: number;
    let animationFrameId: number;
    const boundaries = { minX: 0, maxX: 100, minY: 0, maxY: 100 };
    const artistSpeeds = new Map(artists.map(artist => [artist.name, {...artist.movementSpeed}]));
    
    const animate = (timestamp: number) => {
      if (prevTimestamp === undefined) {
        prevTimestamp = timestamp;
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      // Calcular delta de tiempo para movimiento consistente
      const deltaTime = timestamp - prevTimestamp;
      const timeMultiplier = deltaTime / 16.67; // 60fps como referencia
      
      setArtistPositions(prevPositions => {
        const newPositions = {...prevPositions};
        
        artists.forEach(artist => {
          if (!newPositions[artist.name]) return;
          
          const currentPos = newPositions[artist.name];
          const speeds = artistSpeeds.get(artist.name)!;
          
          let newX = currentPos.x + speeds.x * timeMultiplier;
          let newY = currentPos.y + speeds.y * timeMultiplier;
          
          // Rebote en los límites
          if (newX <= boundaries.minX || newX >= boundaries.maxX) {
            speeds.x = -speeds.x;
            newX = currentPos.x + speeds.x * timeMultiplier;
          }
          
          if (newY <= boundaries.minY || newY >= boundaries.maxY) {
            speeds.y = -speeds.y;
            newY = currentPos.y + speeds.y * timeMultiplier;
          }
          
          newPositions[artist.name] = { x: newX, y: newY };
        });
        
        return newPositions;
      });
      
      prevTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [artists, artistPositions]);

  // Memoizar las funciones de estilo para evitar recálculos
  const getFontSize = useMemo(() => {
    return (tier: ArtistTier) => {
      switch (tier) {
        case 1: return 'text-4xl md:text-5xl';
        case 2: return 'text-3xl md:text-4xl';
        case 3: return 'text-2xl md:text-3xl';
        case 4: return 'text-xl md:text-2xl';
        case 5: return 'text-lg md:text-xl';
        default: return 'text-lg';
      }
    };
  }, []);

  const getOpacity = useMemo(() => {
    return (tier: ArtistTier) => {
      switch (tier) {
        case 1: return 'opacity-100';
        case 2: return 'opacity-90';
        case 3: return 'opacity-80';
        case 4: return 'opacity-70';
        case 5: return 'opacity-60';
        default: return 'opacity-60';
      }
    };
  }, []);

  const getZIndex = useMemo(() => {
    return (tier: ArtistTier) => {
      return `z-${10 - tier}`;
    };
  }, []);

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
            src="/images/background-artistas.jpg"
            alt="Artistas Background"
            className="w-full h-full object-cover object-center"
          />
          
          {/* Gradiente principal para mayor legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent mix-blend-multiply"></div>
          
          {/* Gradientes para suavizar transiciones entre secciones */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
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
          <h2 className="font-monument text-3xl md:text-5xl mb-4">NUESTROS ARTISTAS</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            House Journey ha recibido a los más destacados talentos de la escena house internacional, creando experiencias sonoras únicas con cada uno de ellos.
          </p>
        </motion.div>

        {/* Área principal con artistas flotantes */}
        <div className="relative w-full aspect-[16/9] mx-auto my-12 border border-white/10 rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm">
          {/* Artistas flotantes */}
          {artists.map((artist, index) => {
            const position = artistPositions[artist.name] || artist.initialPosition;
            
            return (
              <motion.div
                key={artist.name}
                className={`absolute ${getZIndex(artist.tier)} cursor-pointer transition-all duration-300`}
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  willChange: 'transform, opacity', // Mejora rendimiento
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={controls}
                variants={{
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    transition: { 
                      duration: 0.6, 
                      delay: 0.3 + (index * 0.05),
                      ease: [0.22, 1, 0.36, 1]
                    } 
                  }
                }}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredArtist(artist.name)}
                onMouseLeave={() => setHoveredArtist(null)}
              >
                <span className={`font-monument ${getFontSize(artist.tier)} ${getOpacity(artist.tier)} transition-all duration-300 text-white drop-shadow-lg`}>
                  {artist.name}
                </span>
                
                {/* Tarjeta de información en hover - Solo renderizar cuando es necesario */}
                {hoveredArtist === artist.name && (
                  <motion.div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-4 z-50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-900 mr-2"></div>
                      <h4 className="font-monument text-lg">{artist.name}</h4>
                    </div>
                    <p className="text-gray-300 text-sm mb-1">{artist.country}</p>
                    <p className="text-gray-400 text-sm mb-3">{artist.bio}</p>
                    <a 
                      href={artist.socialLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Ver perfil
                    </a>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
          
          {/* Elementos decorativos dentro del área */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-[15%] w-20 h-20 rounded-full bg-indigo-500/10 blur-xl"></div>
            <div className="absolute bottom-[30%] right-[20%] w-24 h-24 rounded-full bg-blue-500/10 blur-xl"></div>
          </div>
        </div>
        
        {/* CTA de la sección */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] } }
          }}
        >
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Conoce a los talentos que han formado parte de la historia de House Journey y los próximos artistas que nos visitarán.
          </p>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-900 hover:shadow-lg transition-all duration-300 font-monument text-lg">
            VER TODOS LOS ARTISTAS
          </button>
        </motion.div>
      </div>
      
      {/* Elementos decorativos flotantes en toda la sección */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] right-[5%] w-24 h-24 rounded-full bg-indigo-500/20 blur-xl animate-float-slow"></div>
        <div className="absolute top-[70%] left-[10%] w-32 h-32 rounded-full bg-teal-500/10 blur-xl animate-float-medium"></div>
        <div className="absolute bottom-[20%] right-[15%] w-28 h-28 rounded-full bg-purple-500/20 blur-xl animate-float-fast"></div>
      </div>
    </section>
  );
};

export default Artists;
