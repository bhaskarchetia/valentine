
import React, { useEffect } from 'react';

interface ImagePopupProps {
  imageUrl: string;
  onClose: () => void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ imageUrl, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[100] bg-[#2a1f20]/95 flex items-center justify-center p-6 backdrop-blur-xl transition-all duration-500"
      onClick={onClose}
    >
      {/* Ambient warm glow */}
      <div className="absolute w-[60%] h-[60%] bg-rose-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <button 
        className="fixed top-8 right-8 text-white/50 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all z-[110]"
        onClick={onClose}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div 
        className="relative max-w-full max-h-full animate-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white p-3 md:p-4 rounded-sm shadow-2xl">
           <img
            src={imageUrl}
            alt="Memory Enlarged"
            className="max-h-[75vh] md:max-h-[85vh] w-auto rounded-sm object-contain"
          />
        </div>
      </div>

      <style>{`
        @keyframes pop-in {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-pop-in {
          animation: pop-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default ImagePopup;
