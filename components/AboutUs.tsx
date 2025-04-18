'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { MusicIcon, ArtIcon, FoodIcon, AVIcon } from '../public/icons/Icons';

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [videoError, setVideoError] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Animación al entrar en viewport
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Efecto para reintentar cargar el video si hay error
  useEffect(() => {
    // Resetear error cuando el componente se monta
    setVideoError(false);
    
    // Log para depuración
    console.log('AboutUs montado, videoError:', videoError);
    
    return () => {
      console.log('AboutUs desmontado');
    };
  }, []);
  
  // Efecto para verificar el video una vez que el componente está montado
  useEffect(() => {
    // Verificar si podemos acceder al video directamente
    const videoTest = document.createElement('video');
    
    // Si soporta el tipo de video MP4, intentaremos cargarlo
    const canPlayMP4 = videoTest.canPlayType('video/mp4');
    console.log('¿Navegador soporta MP4?', canPlayMP4);
    
    // Cargamos la URL del video para verificar si existe
    fetch('/videos/about-video.mp4')
      .then(response => {
        if (response.ok) {
          console.log('El archivo de video existe y es accesible');
        } else {
          console.error('El archivo de video no se pudo encontrar', response.status);
          setVideoError(true);
        }
      })
      .catch(err => {
        console.error('Error verificando el video:', err);
        setVideoError(true);
      });
      
  }, []);

  // Los 4 pilares con sus íconos y textos
  const pillars = [
    { icon: <MusicIcon />, label: 'MÚSICA', description: 'Que nos mantiene en marcha' },
    { icon: <ArtIcon />, label: 'ARTE', description: 'Como filosofía de vida' },
    { icon: <FoodIcon />, label: 'GASTRONOMÍA', description: 'Para involucrar cada sentido' },
    { icon: <AVIcon />, label: 'REGISTRO A/V', description: 'Para recordar cada momento' },
  ];

  // Galería de imágenes
  const galleryImages = [
    { src: '/images/about-gallery-1.jpg', alt: 'Evento musical', title: 'CALIDEZ' },
    { src: '/images/about-gallery-2.jpg', alt: 'DJ en acción', title: 'CONEXIÓN' },
    { src: '/images/about-gallery-3.jpg', alt: 'Público disfrutando', title: 'EXPRESIÓN' },
    { src: '/images/about-gallery-4.jpg', alt: 'Escenario/venue', title: 'VIBRACIÓN' },
    { src: '/images/about-gallery-5.jpg', alt: 'Experiencia gastronómica', title: 'COMUNIDAD' },
    { src: '/images/about-gallery-6.jpg', alt: 'Detalle artístico', title: 'RITMO' },
  ];

  // Manejador de error para el video
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Error cargando video:', e);
    setVideoError(true);
  };

  // Manejador para video cargado correctamente
  const handleVideoLoaded = () => {
    console.log('Video cargado correctamente');
    setVideoError(false);
    
    // Intentar reproducir el video manualmente
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error('Error reproduciendo video:', err);
      });
    }
  };

  // Manejador para carga de imágenes
  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-azul-profundo text-white"
    >
      {/* Imagen de fondo similar al Hero */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full">
          <img 
            src="/images/background-about.jpg" 
            alt="About Us Background" 
            className="w-full h-full object-cover object-center brightness-110"
          />
          {/* Mismo gradiente lateral que usa el Hero */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent mix-blend-multiply"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Columna de texto */}
          <motion.div 
            className="lg:w-1/2 text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            <h2 className="font-monument text-3xl md:text-4xl mb-6">DONDE LA MÚSICA Y EL ARTE SE VUELVEN HOGAR</h2>
            <p className="text-lg text-gray-200 mb-10 leading-relaxed">
            Nuestras experiencias trascienden lo musical. La estética, el desarrollo técnico y la curaduría artística se fusionan con la calidez de nuestra comunidad y brindan un viaje a su interior. Cada vez que nos reunimos, celebramos re-conectar; con el cuerpo, con la pista, con el otro.
            </p>
            
            {/* Contenedor de los pilares */}
            <div className="grid grid-cols-2 gap-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.label}
                  className="glass-card p-5 bg-white/5 border border-white/10 rounded-lg flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { 
                        duration: 0.6, 
                        delay: 0.2 + (index * 0.15),
                        ease: [0.22, 1, 0.36, 1]
                      } 
                    }
                  }}
                >
                  <div className="mb-3 flex justify-center">{pillar.icon}</div>
                  <h3 className="text-xl font-monument font-light uppercase mb-1">{pillar.label}</h3>
                  <p className="text-sm text-gray-300">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Columna de video */}
          <motion.div 
            className="lg:w-1/2 aspect-[9/16] relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                scale: 1, 
                transition: { 
                  duration: 1.2,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                } 
              }
            }}
          >
            <div className="w-full h-full overflow-hidden rounded-2xl shadow-2xl border border-white/10 media-container">
              {!videoError ? (
                <>
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/about-video-poster.jpg"
                    onError={handleVideoError}
                    onCanPlay={handleVideoLoaded}
                    preload="auto"
                    key="video-player"
                  >
                    <source src="/videos/about-video.mp4" type="video/mp4" />
                    <source src="/videos/about-video.webm" type="video/webm" />
                    <p>Tu navegador no soporta videos HTML5.</p>
                  </video>
                  
                  {/* Enlace para la página de diagnóstico */}
                  <div className="absolute bottom-2 right-2 z-10">
                    <a 
                      href="/videos/video.html" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/60 hover:text-white underline"
                    >
                      ¿Problemas con el video?
                    </a>
                  </div>
                </>
              ) : (
                <iframe 
                  src="/videos/about-video.html" 
                  title="Video placeholder"
                  className="w-full h-full border-0 fullheight"
                  allowFullScreen
                ></iframe>
              )}
              
              {/* Overlay con gradiente sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-darker/60 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>

        {/* Galería de imágenes */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] } }
          }}
        >
          <h2 className="font-monument text-3xl md:text-4xl mb-8 text-white text-center">NUESTRA ESENCIA</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                className="gallery-item"
                onClick={() => setSelectedImage(image.src)}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      duration: 0.6, 
                      delay: 0.6 + (index * 0.1),
                      ease: [0.22, 1, 0.36, 1]
                    } 
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="aspect-[4/3] relative bg-azul-profundo/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`lazy-load ${imagesLoaded > index ? 'lazy-loaded' : ''} w-full h-full object-cover`}
                    loading="lazy"
                    onLoad={handleImageLoad}
                  />
                  <div className="gallery-overlay absolute inset-0 bg-azul-profundo/30 hover:bg-azul-profundo/10 transition-all duration-300"></div>
                  <div className="gallery-caption absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-monument font-light text-white uppercase">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal de imagen seleccionada */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh]">
              <img 
                src={selectedImage} 
                alt="Imagen ampliada" 
                className="max-w-full max-h-[90vh] object-contain"
              />
              <button 
                className="absolute top-4 right-4 text-white text-xl bg-black/50 w-10 h-10 rounded-full flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Quitamos los elementos decorativos que teníamos antes ya que ahora usamos el mismo estilo que el Hero */}
      
      {/* Elementos decorativos flotantes como en el Hero */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[30%] right-[15%] w-20 h-20 rounded-full bg-white/20 blur-xl animate-float-slow"></div>
        <div className="absolute top-[70%] left-[10%] w-32 h-32 rounded-full bg-white/10 blur-xl animate-float-medium"></div>
        <div className="absolute bottom-[20%] right-[25%] w-24 h-24 rounded-full bg-azul-claro/20 blur-xl animate-float-fast"></div>
      </div>
    </section>
  );
};

export default AboutUs;