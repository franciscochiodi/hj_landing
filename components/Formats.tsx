'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

// Componente PlayIcon simple para no depender del archivo externo
const PlayIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const Formats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [activeFormat, setActiveFormat] = useState<'club' | 'studio' | 'onroad' | 'byday'>('club');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Definir el tipo de los formatos
  type FormatoKey = 'club' | 'studio' | 'onroad' | 'byday';
  
  // Animación al entrar en viewport
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Los formatos con sus detalles
  const formatos: Record<FormatoKey, {
    title: string;
    description: string;
    image: string;
    features: string[];
    color: string;
    icon: string;
  }> = {
    club: {
      title: "CLUB",
      description: "Experiencia de club underground con DJs de house de primer nivel. Inmersión total en un ambiente íntimo donde la música, el sonido y la comunidad son protagonistas.",
      image: "/images/formato-club.jpg",
      features: [
        "Line-up curado con DJs nacionales e internacionales",
        "Sistema de sonido de alta fidelidad",
        "Escenografía y visuales inmersivos",
        "Comunidad apasionada por el house"
      ],
      color: "from-indigo-600 to-blue-900",
      icon: "🎧"
    },
    studio: {
      title: "STUDIO",
      description: "Espacio íntimo para sets filmados y shows en vivo. Una experiencia audiovisual que captura la esencia de la música house en un formato de estudio profesional.",
      image: "/images/formato-studio.jpg",
      features: [
        "Grabaciones profesionales de alta calidad",
        "Transmisiones en vivo para audiencia global",
        "Entrevistas y contenido exclusivo con artistas",
        "Producción audiovisual de primer nivel"
      ],
      color: "from-purple-600 to-indigo-900",
      icon: "🎬"
    },
    onroad: {
      title: "ON ROAD",
      description: "Formato itinerante que lleva la marca por el mundo. House Journey se adapta a diferentes espacios y culturas, manteniendo su esencia mientras explora nuevos horizontes.",
      image: "/images/formato-onroad.jpg",
      features: [
        "Presencia en festivales internacionales",
        "Colaboraciones con colectivos locales",
        "Adaptabilidad a diferentes venues y contextos",
        "Experiencia cultural expandida"
      ],
      color: "from-teal-600 to-blue-900",
      icon: "🌍"
    },
    byday: {
      title: "BY DAY",
      description: "Experiencias al atardecer que fusionan naturaleza, música, arte y comida. Un formato que celebra la conexión con el entorno natural mientras disfrutamos del mejor house.",
      image: "/images/formato-byday.jpg",
      features: [
        "Locaciones en entornos naturales impresionantes",
        "Propuesta gastronómica de alta calidad",
        "Música seleccionada para el atardecer",
        "Experiencia multisensorial completa"
      ],
      color: "from-orange-500 to-pink-800",
      icon: "🌅"
    }
  };

  // Manejar el cambio de formato con transición suave
  const handleFormatChange = (format: FormatoKey) => {
    if (format === activeFormat || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFormat(format);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-azul-profundo text-white"
      id="formatos"
    >
      {/* Imagen de fondo con gradiente */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full relative">
          <Image 
            src="/images/background-formatos.jpg" 
            alt="Formatos Background" 
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          
          {/* Gradiente principal para mayor legibilidad - ajustado para no tener transición superior */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent mix-blend-multiply"></div>
          
          {/* Se eliminó el gradiente superior que causaba el problema */}
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
          <h2 className="font-monument text-3xl md:text-5xl mb-4">NUESTROS FORMATOS</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            House Journey se expresa a través de diferentes formatos, cada uno con su propia identidad pero manteniendo la esencia que nos caracteriza.
          </p>
        </motion.div>

        {/* Navegación entre formatos */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] } }
          }}
        >
          {(Object.keys(formatos) as FormatoKey[]).map((formato, index) => (
            <motion.button
              key={formato}
              className={`px-6 py-3 rounded-full text-lg font-monument transition-all duration-300 border ${
                activeFormat === formato
                ? 'bg-white/10 border-white backdrop-blur-sm shadow-lg scale-105'
                : 'bg-transparent border-white/30 hover:border-white/70'
              }`}
              onClick={() => handleFormatChange(formato)}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.5, 
                    delay: 0.3 + (index * 0.1),
                    ease: [0.22, 1, 0.36, 1]
                  } 
                }
              }}
              whileHover={{ scale: activeFormat !== formato ? 1.05 : 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-2">{formatos[formato].icon}</span>
              {formatos[formato].title}
            </motion.button>
          ))}
        </motion.div>

        {/* Contenido del formato activo */}
        <motion.div 
          className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Imagen del formato */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  transition: { 
                    duration: 1,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  } 
                }
              }}
            >
              <div className="aspect-video relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                <div className="w-full h-full bg-azul-profundo/20 backdrop-blur-sm relative">
                  <Image
                    src={formatos[activeFormat].image}
                    alt={`${formatos[activeFormat].title} - House Journey`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={true}
                    quality={85}
                    className="object-cover"
                  />
                </div>
                
                {/* Overlay con gradiente */}
                <div className={`absolute inset-0 bg-gradient-to-r ${formatos[activeFormat].color} opacity-30`}></div>
                
                {/* Badge en la esquina superior */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                  <span className="font-monument text-lg">{formatos[activeFormat].title}</span>
                </div>
                
                {/* Botón de play para video simulado */}
                <div className="absolute inset-0 flex items-center justify-center group">
                  <motion.button 
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PlayIcon className="w-6 h-6 text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
            
            {/* Descripción y características */}
            <motion.div 
              className="lg:w-1/2 text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              <h3 className="font-monument text-3xl md:text-4xl mb-4">{formatos[activeFormat].title}</h3>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {formatos[activeFormat].description}
              </p>
              
              {/* Características del formato */}
              <div className="space-y-4">
                <h4 className="font-monument text-xl mb-3">CARACTERÍSTICAS</h4>
                {formatos[activeFormat].features.map((feature: string, index: number) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={controls}
                    variants={{
                      visible: { 
                        opacity: 1, 
                        x: 0, 
                        transition: { 
                          duration: 0.6, 
                          delay: 0.8 + (index * 0.1),
                          ease: [0.22, 1, 0.36, 1]
                        } 
                      }
                    }}
                  >
                    <div className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r ${formatos[activeFormat].color}`}></div>
                    <p className="text-gray-200">{feature}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA Button */}
              <motion.div 
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      duration: 0.6, 
                      delay: 1.2,
                      ease: [0.22, 1, 0.36, 1]
                    } 
                  }
                }}
              >
                <button className={`px-8 py-3 rounded-full bg-gradient-to-r ${formatos[activeFormat].color} hover:shadow-lg transition-all duration-300 font-monument text-lg`}>
                  CONOCE MÁS
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Galería de imágenes pequeñas en la parte inferior */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] } }
          }}
        >
          {(Object.keys(formatos) as FormatoKey[]).map((formato, index) => (
            <motion.div
              key={`gallery-${formato}`}
              className={`aspect-square overflow-hidden rounded-lg border border-white/10 cursor-pointer ${
                activeFormat === formato ? 'ring-2 ring-white' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => handleFormatChange(formato)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.6, 
                    delay: 1.1 + (index * 0.1),
                    ease: [0.22, 1, 0.36, 1]
                  } 
                }
              }}
            >
              <div className="w-full h-full relative">
                <Image 
                  src={formatos[formato].image}
                  alt={formatos[formato].title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={75}
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${formatos[formato].color} opacity-40`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h4 className="font-monument text-2xl text-white drop-shadow-lg">{formatos[formato].title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-24 h-24 rounded-full bg-indigo-500/20 blur-xl animate-float-slow"></div>
        <div className="absolute top-[60%] left-[15%] w-32 h-32 rounded-full bg-teal-500/10 blur-xl animate-float-medium"></div>
        <div className="absolute bottom-[15%] right-[20%] w-28 h-28 rounded-full bg-purple-500/20 blur-xl animate-float-fast"></div>
      </div>
    </section>
  );
};

export default Formats;
