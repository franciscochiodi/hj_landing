export default function Loading() {
  return (
    <div className="fixed inset-0 bg-azul-profundo z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Simple pulsing logo or loading animation */}
        <div className="w-24 h-24 relative animate-pulse">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
            <path d="M50 10 L50 90" stroke="white" strokeWidth="2" />
            <path d="M10 50 L90 50" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <p className="text-white font-monument mt-4 text-lg">CARGANDO</p>
        
        {/* Loading progress bar */}
        <div className="w-48 h-1 mt-4 bg-white/20 rounded overflow-hidden">
          <div className="h-full bg-white animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}

// Add this animation to your globals.css
/*
@keyframes loading-bar {
  0% { width: 0%; }
  50% { width: 70%; }
  100% { width: 100%; }
}

.animate-loading-bar {
  animation: loading-bar 2s ease-in-out infinite;
}
*/ 