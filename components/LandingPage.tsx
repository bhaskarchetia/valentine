
import React from 'react';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden relative">
      <div className="z-10 animate-fade-up">
        <h1 className="text-7xl md:text-9xl font-elegant mb-4 text-white drop-shadow-[0_0_20px_rgba(255,51,102,0.6)]">
          For You ❤️
        </h1>
        <p className="text-lg md:text-xl text-red-400 mb-16 tracking-[0.5em] font-light uppercase opacity-80">
          Step inside my heart
        </p>
        
        <button
          onClick={onEnter}
          className="glass-dark px-14 py-5 rounded-full shadow-[0_0_40px_rgba(255,0,0,0.2)] text-xl font-bold tracking-[0.2em] text-white hover:bg-red-600 active:scale-95 transition-all duration-500 group overflow-hidden border border-red-500/40"
        >
          <span className="relative z-10 flex items-center gap-3">
            ENTER <span className="group-hover:scale-125 transition-transform inline-block">💋</span>
          </span>
          <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button>
      </div>

      <div className="absolute bottom-12 animate-bounce text-red-500/60">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      {/* Floating Kisses */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i} 
          className="absolute text-red-600/20 pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 30 + 20}px`,
            animation: `float ${Math.random() * 5 + 7}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          💋
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
