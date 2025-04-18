
// components/icons/HouseIcons.tsx
// v2 – refinados para mayor expresividad y elegancia
import React from 'react';

/**
 * Degradado compartido – ajusta aquí para cambiar todo el set
 */
const GradientDefs = () => (
  <defs>
    <linearGradient id="houseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#4c6ef5" stopOpacity="0.9" />
      <stop offset="100%" stopColor="#7aa3ff" stopOpacity="0.9" />
    </linearGradient>
  </defs>
);

const stroke = { stroke: 'url(#houseGrad)', strokeWidth: 1.25, fill: 'none' } as const;

/* ---------- MUSIC ---------- */
export const MusicIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={44} height={44} viewBox="0 0 24 24" {...stroke} {...props}>
    <GradientDefs />
    {/* Vinilo */}
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2" />
    {/* Brazo aguja */}
    <line x1="15" y1="6" x2="20" y2="2" />
  </svg>
);

/* ---------- ART ---------- */
export const ArtIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={44} height={44} viewBox="0 0 24 24" {...stroke} {...props}>
    <GradientDefs />
    {/* Paleta circular con hueco */}
    <path d="M12 3a9 9 0 1 0 6 2.3" />
    {/* Huecos de pintura */}
    <circle cx="9" cy="9" r="1" />
    <circle cx="15" cy="9" r="1" />
    <circle cx="10" cy="15" r="1" />
  </svg>
);

/* ---------- FOOD (Gastronomía) ---------- */
export const FoodIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={44} height={44} viewBox="0 0 24 24" {...stroke} {...props}>
    <GradientDefs />
    {/* Plato */}
    <circle cx="10" cy="12" r="6" />
    <circle cx="10" cy="12" r="2" />
    {/* Cubiertos */}
    <line x1="18" y1="6" x2="18" y2="18" strokeLinecap="round" />
    <path d="M20 6v12" strokeLinecap="round" />
  </svg>
);

/* ---------- A/V (Audiovisual) ---------- */
export const AVIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={44} height={44} viewBox="0 0 24 24" {...stroke} {...props}>
    <GradientDefs />
    {/* Marco circular */}
    <circle cx="12" cy="12" r="9" />
    {/* Play */}
    <polygon points="10,9 16,12 10,15" fill="url(#houseGrad)" stroke="none" />
    {/* Ondas */}
    <path d="M18 10a3 3 0 0 1 0 4" />
  </svg>
);

export default { MusicIcon, ArtIcon, FoodIcon, AVIcon };
