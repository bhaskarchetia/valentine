
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'landing' | 'main'>('landing');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnter = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('main');
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <div className={`min-h-screen text-[#ffd1dc] relative overflow-x-hidden transition-all duration-1000 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      {/* Dramatic Background elements */}
      <div className="fixed top-[-20%] left-[-10%] w-[80%] h-[80%] bg-red-900/20 blur-[150px] rounded-full animate-pulse"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-rose-950/30 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      {currentPage === 'landing' ? (
        <LandingPage onEnter={handleEnter} />
      ) : (
        <MainPage />
      )}
    </div>
  );
};

export default App;
