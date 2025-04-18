// components/icons/HouseIcons.tsx
import React from 'react';

/**
 * Gradient definition shared by all House Journey icons.
 * Update colors here to refresh the full icon set.
 */
const GradientDefs = () => (
  <defs>
    <linearGradient id="houseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#4c6ef5" />
      <stop offset="100%" stopColor="#5b9eff" />
    </linearGradient>
  </defs>
);

/* ---------- MUSIC ---------- */
export const MusicIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#houseGrad)"
    strokeWidth={1.5}
    {...props}
  >
    <GradientDefs />
    {/* Vinyl record */}
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2" />
    {/* Sound wave */}
    <path d="M3 12h2M19 12h2" strokeLinecap="round" />
  </svg>
);

/* ---------- ART ---------- */
export const ArtIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#houseGrad)"
    strokeWidth={1.5}
    {...props}
  >
    <GradientDefs />
    {/* Frame */}
    <rect x="3" y="3" width="18" height="18" rx="2" />
    {/* Abstract brush stroke */}
    <path d="M7 15c4-6 6-6 10 0" strokeLinecap="round" />
  </svg>
);

/* ---------- FOOD (Gastronomía) ---------- */
export const FoodIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#houseGrad)"
    strokeWidth={1.5}
    {...props}
  >
    <GradientDefs />
    {/* Stylized glass */}
    <path d="M8 3v12M16 3v12" strokeLinecap="round" />
    <path d="M5 15h14" />
    <path d="M5 15l1 6h12l1-6" />
  </svg>
);

/* ---------- A/V (Audiovisual) ---------- */
export const AVIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#houseGrad)"
    strokeWidth={1.5}
    {...props}
  >
    <GradientDefs />
    {/* 16:9 display */}
    <rect x="3" y="6" width="14" height="12" rx="2" />
    {/* Play button */}
    <polygon points="9,9 13,12 9,15" stroke="none" fill="url(#houseGrad)" />
    {/* Audio waves */}
    <path d="M18 10c1.5 1 1.5 3 0 4" strokeLinecap="round" />
    <path d="M20 9c2.2 1.6 2.2 5.4 0 7" strokeLinecap="round" />
  </svg>
);

/* ---------- EXPORTS ---------- */
export default {
  MusicIcon,
  ArtIcon,
  FoodIcon,
  AVIcon,
};
