
import React, { useState, useEffect } from 'react';
import LoveLetter from './LoveLetter';
import Gallery from './Gallery';

const MainPage: React.FC = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [isSurpriseActive, setIsSurpriseActive] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const triggerSurprise = () => {
    setIsSurpriseActive(true);
    const container = document.body;
    for (let i = 0; i < 45; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart text-red-600';
        heart.innerHTML = ['❤️', '💋', '💖', '🌹', '🍷'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 25 + 20) + 'px';
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
      }, i * 80);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-12 px-5 space-y-16 animate-fade-up">
      <LoveLetter />
      
      <div className="w-full max-w-2xl flex flex-col items-center">
        {!showGallery ? (
          <button
            onClick={() => setShowGallery(true)}
            className="glass-dark px-10 py-4 rounded-full shadow-2xl text-pink-200 font-medium hover:bg-red-950/40 transition-all flex items-center gap-3 active:scale-95 border border-red-500/30"
          >
            <span>Open Our Scrapbook</span>
            <span className="text-xl">💋</span>
          </button>
        ) : (
          <div className="w-full flex flex-col items-center space-y-12">
            <Gallery />
            
            <button
              onClick={triggerSurprise}
              className="relative kiss-gradient text-white px-12 py-5 rounded-full shadow-[0_15px_45px_rgba(255,0,0,0.3)] hover:scale-105 active:scale-95 transition-all font-bold tracking-[0.2em] overflow-hidden group"
            >
              <div className="absolute inset-0 animate-shimmer pointer-events-none"></div>
              <span className="relative z-10 flex items-center gap-3">
                HAPPY VALENTINE'S DAY! 💋
              </span>
            </button>
          </div>
        )}
      </div>
      
      {isSurpriseActive && (
        <div 
          className="fixed inset-0 z-[200] bg-[#1a0005]/95 backdrop-blur-2xl flex flex-col items-center justify-center animate-fade-up"
          onClick={() => setIsSurpriseActive(false)}
        >
          <div className="text-center z-10 px-6 max-w-md">
            <div className="text-7xl mb-6 animate-bounce">💋</div>
            <h2 className="text-5xl md:text-7xl font-elegant text-white mb-6 drop-shadow-[0_0_15px_rgba(255,51,102,0.5)]">
              My Whole Heart
            </h2>
            <p className="text-xl text-pink-300 font-light italic mb-10 leading-relaxed">
              "Every single day with you is a gift I never expected, but will always cherish."
            </p>
            <div className="h-[1px] w-24 bg-red-800 mx-auto mb-10"></div>
            <button className="text-red-400 text-xs tracking-[0.3em] uppercase hover:text-white transition-colors">
              Tap to continue the dream
            </button>
          </div>
        </div>
      )}

      <footer className="pt-20 pb-10 text-red-900/60 text-xs italic tracking-widest text-center font-light uppercase">
        Est. June 9, 2022 • Forever to go 💋
      </footer>
    </div>
  );
};

export default MainPage;
