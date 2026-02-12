
import React, { useState, useEffect } from 'react';
import ImagePopup from './ImagePopup';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  const images = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    url: `images/pic${i + 1}.jpg`,
    height: i % 2 === 0 ? 'h-64' : 'h-80',
    rotation: (Math.random() * 8 - 4).toFixed(1)
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < 9) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-2 max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <h3 className="text-red-500/40 tracking-[0.6em] text-[10px] uppercase mb-4 font-bold">
          Our Secret Memories 💋
        </h3>
        <div className="w-12 h-[1px] bg-red-900 mx-auto"></div>
      </div>
      
      <div className="columns-2 md:columns-3 gap-6 space-y-8">
        {images.map((img, index) => (
          <div
            key={img.id}
            className={`break-inside-avoid scrapbook-photo cursor-pointer group bg-[#fffdfa] p-4 pb-10 transition-all duration-1000 ${
              index < visibleCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ 
              transform: `rotate(${img.rotation}deg)`,
              transitionDelay: `${index * 50}ms`,
            }}
            onClick={() => setSelectedImage(img.url)}
          >
            <div className={`w-full ${img.height} overflow-hidden bg-stone-100 relative shadow-inner`}>
              <img
                src={img.url}
                alt={`Moment ${img.id}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-red-950/10 opacity-40 group-hover:opacity-0 transition-opacity"></div>
            </div>
            
            <div className="mt-4 flex items-center justify-between px-1">
              <span className="font-handwritten text-red-800 text-xl font-bold">
                #{img.id}
              </span>
              <div className="text-red-600 text-lg opacity-30 group-hover:opacity-100 transition-opacity">💋</div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImagePopup imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default Gallery;
