
import React from 'react';

const KissMark = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`absolute pointer-events-none opacity-80 ${className}`} 
    style={{ width: '80px', height: '80px', filter: 'drop-shadow(0 0 5px rgba(255,0,0,0.4))', ...style }}
  >
    <path 
      fill="#ff1a4d" 
      d="M20,50 C20,30 40,25 50,25 C60,25 80,30 80,50 C80,65 65,80 50,80 C35,80 20,65 20,50 Z M30,52 C30,62 40,70 50,70 C60,70 70,62 70,52 C70,45 60,40 50,40 C40,40 30,45 30,52 Z" 
      transform="rotate(-15 50 50)"
    />
    <path 
      fill="#ff1a4d" 
      d="M35,48 C35,42 42,38 50,38 C58,38 65,42 65,48 C65,52 58,55 50,55 C42,55 35,52 35,48 Z" 
      opacity="0.8"
    />
  </svg>
);

const LoveLetter: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl animate-fade-up">
      {/* Intense Red Glow Background */}
      <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full -z-10 transform scale-110"></div>
      
      {/* Paper Container - Using a slightly creamier paper to pop against the dark red bg */}
      <div className="relative bg-[#fffdfa] p-10 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] min-h-[600px] flex flex-col letter-cut border border-red-950/20 overflow-hidden">
        {/* Subtle Paper Grain */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]"></div>
        
        {/* Bold Kiss Marks Patch */}
        <KissMark style={{ top: '3%', right: '5%', transform: 'rotate(25deg) scale(0.9)' }} />
        <KissMark style={{ bottom: '10%', left: '2%', transform: 'rotate(-30deg) scale(1.2)' }} />
        <KissMark style={{ top: '45%', right: '-20px', transform: 'rotate(10deg) scale(0.6)', opacity: '0.4' }} />
        <KissMark style={{ bottom: '4%', right: '15%', transform: 'rotate(5deg) scale(0.8)' }} />

        {/* Header */}
        <header className="mb-12 text-center relative">
          <h2 className="font-handwritten text-4xl md:text-5xl text-[#2d000a] tracking-tight">
            To My Favorite Person,
          </h2>
          <div className="w-16 h-[2px] bg-red-100 mx-auto mt-6"></div>
        </header>

        {/* Content */}
        <div className="font-handwritten text-xl md:text-2xl leading-[1.7] text-[#3d000a] space-y-6 whitespace-pre-wrap relative z-10 flex-grow px-2 font-medium">
{`Listen to this—

I cannot promise to bring you the moon above,
But I can give you a mirror that reflects my love.

You are not just someone I love.
You are my comfort.
You are my peace.
You are my safest place in this entire world.

With you, ordinary days feel extraordinary.
With you, silence feels warm.
With you, even my chaos feels calm.

Sometimes I wonder — who would I be without you?
Maybe I would smile… but I wouldn’t truly be happy.
Maybe I would exist… but I wouldn’t really live.

Since 9th June 2022,
I have loved you more with each passing day.
Not loudly.
Not dramatically.
But deeply. Truly. Completely.

When I think about my future,
I don’t first see success or achievements.
I see you standing beside me.
And honestly… I cannot imagine my life without you.

I am just a poet, come listen every day,
For every line I write finds you in its way.
You are the beginning of every story I start,
The sunrise in my mornings, the calm in my heart.

You are my today.
You are my tomorrow.
And if life is kind to me…
you will be my always. ❤️`}
        </div>

        {/* Signature */}
        <footer className="mt-14 font-handwritten text-4xl text-red-600 text-right italic pr-2 relative z-10 drop-shadow-sm">
          Always Yours 💋
        </footer>
      </div>

      <style>{`
        .letter-cut {
          clip-path: polygon(
            0.5% 1%, 99% 0.5%, 100% 99%, 1% 99.5%
          );
        }
      `}</style>
    </div>
  );
};

export default LoveLetter;
