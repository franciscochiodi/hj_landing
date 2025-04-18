'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { MusicIcon, ArtIcon, FoodIcon, AVIcon } from '../public/icons/Icons';

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [videoError, setVideoError] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isInView && mounted) {
      controls.start('visible');
    }
  }, [isInView, controls, mounted]);

  useEffect(() => {
    if (!mounted) return;
    setVideoError(false);
    
    const videoTimeout = setTimeout(() => {
      if (!videoRef.current || !videoRef.current.readyState || videoRef.current.readyState < 2) {
        setVideoError(true);
      }
    }, 5000);
    
    const videoTest = document.createElement('video');
    const canPlayMP4 = videoTest.canPlayType('video/mp4');
    
    fetch('/videos/about-video.mp4', { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          setVideoError(true);
        }
      })
      .catch(() => {
        setVideoError(true);
      });
    
    return () => {
      clearTimeout(videoTimeout);
    };
  }, [mounted]);

  const pillars = [
    { icon: <MusicIcon />, label: 'MÚSICA', description: 'Que nos mantiene en marcha' },
    { icon: <ArtIcon />, label: 'ARTE', description: 'Como filosofía de vida' },
    { icon: <FoodIcon />, label: 'GASTRONOMÍA', description: 'Para involucrar cada sentido' },
    { icon: <AVIcon />, label: 'REGISTRO A/V', description: 'Para recordar cada momento' },
  ];

  const galleryImages = [
    { src: '/images/about-gallery-1.jpg', alt: 'Evento musical', title: 'CALIDEZ' },
    { src: '/images/about-gallery-2.jpg', alt: 'DJ en acción', title: 'CONEXIÓN' },
    { src: '/images/about-gallery-3.jpg', alt: 'Público disfrutando', title: 'EXPRESIÓN' },
    { src: '/images/about-gallery-4.jpg', alt: 'Escenario/venue', title: 'VIBRACIÓN' },
    { src: '/images/about-gallery-5.jpg', alt: 'Experiencia gastronómica', title: 'COMUNIDAD' },
    { src: '/images/about-gallery-6.jpg', alt: 'Detalle artístico', title: 'RITMO' },
  ];

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    setVideoError(false);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-azul-profundo text-white"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full relative">
          <Image 
            src="/images/background-about.jpg" 
            alt="About Us Background" 
            fill
            sizes="100vw"
            priority
            className="object-cover object-center brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent mix-blend-multiply"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 text-white"
            initial="hidden"
            animate={mounted ? controls : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            <h2 className="font-monument text-3xl md:text-4xl mb-6">DONDE LA MÚSICA Y EL ARTE SE VUELVEN HOGAR</h2>
            <p className="text-lg text-gray-200 mb-10 leading-relaxed">
            Nuestras experiencias trascienden lo musical. La estética, el desarrollo técnico y la curaduría artística se fusionan con la calidez de nuestra comunidad y brindan un viaje a su interior. Cada vez que nos reunimos, celebramos re-conectar; con el cuerpo, con la pista, con el otro.
            </p>
            
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
          
          <motion.div 
            className="lg:w-1/2 aspect-[9/16] relative"
            initial="hidden"
            animate={mounted ? controls : "hidden"}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
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
                    preload="metadata"
                    key="video-player"
                  >
                    <source src="/videos/about-video.mp4" type="video/mp4" />
                    <source src="/videos/about-video.webm" type="video/webm" />
                    <Image 
                      src="/images/about-video-poster.jpg"
                      alt="Video fallback"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </video>
                  
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
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/about-video-poster.jpg" 
                    alt="Video placeholder"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a 
                      href="/videos/about-video.mp4" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg text-white flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      Ver video
                    </a>
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary-darker/60 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>

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
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    className={`object-cover ${imagesLoaded > index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
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

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
              <div className="relative w-full h-full">
                <Image 
                  src={selectedImage} 
                  alt="Imagen ampliada" 
                  fill
                  sizes="100vw"
                  quality={85}
                  className="object-contain"
                />
              </div>
              <button 
                className="absolute top-4 right-4 text-white text-xl bg-black/50 w-10 h-10 rounded-full flex items-center justify-center z-10"
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
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[30%] right-[15%] w-20 h-20 rounded-full bg-white/20 blur-xl animate-float-slow"></div>
        <div className="absolute top-[70%] left-[10%] w-32 h-32 rounded-full bg-white/10 blur-xl animate-float-medium"></div>
        <div className="absolute bottom-[20%] right-[25%] w-24 h-24 rounded-full bg-azul-claro/20 blur-xl animate-float-fast"></div>
      </div>
    </section>
  );
};

export default AboutUs;