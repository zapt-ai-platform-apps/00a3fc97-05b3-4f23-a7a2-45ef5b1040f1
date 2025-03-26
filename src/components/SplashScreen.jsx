import React, { useState, useEffect } from 'react';

const SplashScreen = () => {
  const [animationStage, setAnimationStage] = useState(0);
  
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 500);
    const timer2 = setTimeout(() => setAnimationStage(2), 1000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-primary-900 to-primary-600 text-white">
      <div className="text-center">
        <div className={`transition-all duration-700 ${
          animationStage >= 1 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
            <circle cx="60" cy="60" r="50" fill="white" />
            <path d="M40 50 L50 70 L80 40" 
                  stroke="#8f47f0" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  fill="none" />
          </svg>
        </div>
        
        <h1 className={`text-4xl font-bold mt-6 transition-all duration-700 ${
          animationStage >= 1 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          FYNE
        </h1>
        
        <p className={`mt-2 text-lg text-white/90 transition-all duration-700 delay-300 ${
          animationStage >= 2 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}>
          Fine Clothes for You
        </p>
      </div>
      
      <div className={`absolute bottom-12 transition-all duration-700 delay-500 ${
        animationStage >= 2 ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="w-12 h-1.5 bg-white/30 rounded-full">
          <div className="w-1/3 h-full bg-white rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;