# Roadmap de la Landing Page de House Journey

## Resumen General
Esta landing page tiene tres objetivos principales:
1. Atraer al público general a nuestros eventos y fortalecer el reconocimiento de la marca.  
2. Captar el interés de marcas que buscan patrocinar eventos culturales de alta calidad.  
3. Mostrar nuestra experiencia en producción audiovisual a productores y colaboradores potenciales.

---

## Estructura de la Página

### 1. Sección Hero
- **Visual:** Collage dinámico de eventos.  
- **Título Principal:** “Más que eventos – Creamos viajes.”  
- **Subtítulo:** Fusionamos música, arte, gastronomía y experiencias inolvidables.  
- **CTAs (llamados a la acción):**
  - Explorá Nuestro Mundo  
  - Mirá a Nuestros Artistas  
  - Sumate Como Partner

---

### 2. About Us
- **Introducción a la Marca:** Quiénes somos y qué representamos.  
- **Visión:** Nuestra misión a largo plazo y propósito creativo.  
- **Cuatro Pilares:**
  - 🎶 Música  
  - 🎨 Arte  
  - 🍽️ Gastronomía  
  - 🌅 Experiencias

---

### 3. Formatos
Mostramos los formatos a través de los cuales House Journey se expresa:

- **Club:** Experiencia de club underground con DJs de house de primer nivel.  
- **Studio:** Espacio íntimo para sets filmados y shows en vivo.  
- **On Road:** Formato itinerante que lleva la marca por el mundo.  
- **By Day:** Experiencias al atardecer que fusionan naturaleza, música, arte y comida.

---

### 4. Artistas
- **Galería:** Artistas que han colaborado con House Journey.  
- **Media:** Sets de DJ y presentaciones en vivo integrados desde YouTube.  
- **Opcional:** Logos, enlaces a SoundCloud/Spotify.

---

### 5. Media
- **Galería de Fotos:** Visualización tipo lightbox con fotos profesionales de eventos.  
- **Videos Destacados:** Aftermovies y reels promocionales.  
- **Datos Opcionales:** (ej. 30+ eventos, 10K+ asistentes)

---

### 6. Contacto
- **Redes Sociales:** Íconos con interfaz fluida.  
- **Formulario de Contacto:** Con opciones desplegables:
  - Consulta General  
  - Patrocinios  
  - Colaboración para Eventos  
- **Opcional:** Registro al newsletter.
-------

# 🎨 Guía de Diseño – House Journey Landing Page (Versión alineada al Manual de Marca)

## 1. Identidad Visual
- **Estilo general:** Moderno, elegante, con una fusión de elementos primitivos y tecnológicos.
- **Inspiración:** Cultura electrónica, humanidad esencial, evolución, naturaleza + tecnología.
- **Paleta de colores oficial:**
  - **Azul profundo:** #0F2F45 (RGB 15,47,69)
  - **Azul grisáceo:** #3A657B (RGB 58,101,123)
  - **Gris claro:** #D2D2D2
  - **Blanco:** #FFFFFF
  - **Terracota:** #C57156 (RGB 197,113,86)
  - Posibles negros y azules oscuros para fondo.

## 2. Tipografía
- **Display principal (titulares):** Monument Extended (Light, Regular, Black, RegularItalic) – Uso en mayúsculas, gran presencia visual.
- **Texto y descripciones:** Helvetica Neue (Light, Medium, Bold, Heavy)
- **Uso:**
  - Títulos: Monument Extended Regular
  - Subtítulos: Helvetica Neue Medium
  - Textos largos: Helvetica Neue Light

## 3. Layout y Composición
- **Grid system:** 12 columnas responsive.
- **Espaciado:** Área de respeto definida según la proporción del logotipo ('a' como unidad base).
- **Composición:**
  - Alternancia entre fondos claros y oscuros
  - Transiciones suaves y contenido jerarquizado

## 4. Imagen y Video
- **Tratamiento visual:**
  - Filtros cálidos, texturas naturales
  - Contrastes suaves con look cinematográfico

- **Galería:** Curaduría visual orientada a atmósfera y emoción

## 5. Iconografía y Elementos UI
- **Estilo:** Íconos simples, geométricos, sin sombras
- **Librería sugerida:** Lucide / Heroicons
- **CTAs:** Botones limpios, redondeados, con microinteracciones (hover, pulse)

## 6. Animaciones y Transiciones
- **Usos sugeridos:**
  - Scroll reveal, fade-in
  - Hover con escala o desplazamiento leve
  - Parallax ligero entre secciones

## 7. Accesibilidad y Performance
- Contraste de color garantizado (revisión WCAG)
- Texto escalable, navegación accesible
- Imágenes optimizadas con lazy loading (`next/image`)
-------

# ⚠️ Riesgos y Consideraciones – House Journey Landing Page

## 1. Carga inicial pesada en Hero
- **Problema:** Video loop o collage dinámico puede ralentizar carga en móviles.
- **Solución:** Usar `next/video` con autoplay sin sonido y optimización, o fallback a imagen + animación ligera en mobile.

## 2. Solapamiento entre Media y Artistas
- **Problema:** Ambas secciones muestran fotos/videos y pueden parecer redundantes.
- **Solución:**
  - "Artistas" = quiénes somos → bio, logos, sets destacados
  - "Media" = qué hacemos → aftermovies, reels, fotos de eventos

## 5. Newsletter poco visible
- **Problema:** Oculto dentro del formulario de contacto = menor conversión.
- **Solución:** Agregar bloque visual intermedio o final para captar suscriptores (“Viví el próximo viaje con nosotros”).

## 6. Media pesada sin control
- **Problema:** Muchas imágenes/videos pueden afectar el rendimiento general.
- **Solución:** Lazy load, paginación o infinite scroll. Para YouTube, usar embeds ligeros (`react-lite-youtube-embed`).
-----

house-journey-main/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AboutUs.tsx
│   ├── Artists.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── Hero.tsx
├── public/
├── .next/
├── node_modules/
├── roadmap.md
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.mjs
├── eslint.config.mjs
├── next-env.d.ts
└── README.md