# Roadmap — House Journey Landing Page (v 2.1)
*Versión actualizada con la sección Artistas como media‑gallery y ajustes de look & feel acordados*

---

## 1. Objetivos
1. **Convertir** visitantes en asistentes y seguidores fieles de la marca.  
2. **Atraer** sponsors interesados en experiencias culturales premium.  
3. **Demostrar** capacidad de producción audiovisual para planners y partners.

---

## 2. Estructura de la página

| # | Sección | Propósito | Puntos clave de diseño / contenido |
|---|---------|-----------|------------------------------------|
| 1 | **Hero** | Impacto inicial y conversión | • Video loop oscuro + blaze azul (poster en mobile)<br>• H1 – “Somos el arte y la cultura que amamos” (Monument)<br>• CTAs: **Reservar** (solid #4F7DFF) · **Artistas** (outline blanco)<br>• Shrink navbar al hacer scroll |
| 2 | **About Us** | Relato de marca | • Layout split texto + video vertical<br>• Chips animados de los 4 pilares (🎶 🎨 🍽️ 🌅) |
| 3 | **Formatos** | Mostrar oferta | • Grid 2×2 en “glass cards” translúcidas<br>• Cada card: título, copy breve y CTA “Ver Aftermovie” |
| 4 | **Artistas** | Credibilidad & emoción | **Media‑Gallery** masonry: thumbs 1:1 con overlay nombre (hover)<br>• Click → modal con vídeo embed (lite‑YouTube) y detalles<br>• **Ticker** continuo de nombres (Monument 14 px) debajo de la galería |
| 5 | **Media Wall** | Portfolio visual | Masonry mixto (fotos + reels) con filtro tipo (📸/🎥)<br>• Reproduce videos mute on‑view |
| 6 | **CTA Newsletter** | Capturar leads | Bloque contraste (#111) con glitch sutil; input + btn “Sumate al próximo viaje” |
| 7 | **Contacto** | Conversión | Form breve (motivo) + íconos sociales Lucide |
| 8 | **Footer** | Navegación final | Logo invertido, menú reducido, copyright |

---

## 3. Guía de diseño resumida

| Categoría | Lineamiento |
|-----------|-------------|
| **Paleta** | Base #0F2F45 → degradado a #050C14 · Acciónrgb(18, 44, 115) · Blanco #FFF |
| **Tipografía** | **Monument Extended**: H1/H2 · **Helvetica Neue / Inter**: resto |
| **Botones** | Radios 8 px · Sombra `0 2px 6px rgba(0,0,0,.4)` · Hover `translateY(-1px)` |
| **Imágenes** | `next/image` con blur‑placeholder · ratio 1:1 para gallery |
| **Animaciones** | Scroll‑reveal (`translateY(20px)`, opacity) · micro‑parallax · ticker automático pausable al hover |

---

## 4. Arquitectura de componentes (Next.js / TypeScript)

\`\`\`
components/
└─ Artists/
   ├─ ArtistsSection.tsx   // wrapper + intro + ticker
   ├─ GalleryGrid.tsx      // masonry + lazy load
   ├─ ArtistCard.tsx       // thumbnail + overlay
   └─ ArtistModal.tsx      // video + info (HeadlessUI + framer-motion)
data/
└─ artists.ts              // array tipado de artistas
\`\`\`

---

## 5. Riesgos principales & mitigaciones

| Riesgo | Impacto | Acción |
|--------|---------|--------|
| Hero pesado | LCP alto | Poster estático + video diferido (`preload="none"`) |
| Demasiados embeds | JS bundle grande | Cargar video solo al abrir modal (`react-lite-youtube-embed`) |
| Fatiga por fondos oscuros | Legibilidad | Alternar bloques claros / glass cards translúcidas |
| CTAs poco visibles | Conversión | Botón “Tickets” sticky en mobile + repetir newsletter CTA |

---

## 6. Próximos pasos

1. Definir lista inicial de artistas en `data/artists.ts`.  
2. Configurar paleta/typography en `tailwind.config.js`.  
3. Montar componentes ArtistsSection (PR en Git).  
4. Pruebas Lighthouse (≥90 Performance, ≥95 Accesibilidad).  
5. Contenido final: copiar copy corto y subir media optimizada (≤300 KB/th).

---
