import React from 'react';

const Hero = () => (
  <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="/lovable-uploads/42772dbd-10db-4b1d-8c7a-74a4b0050243.png" 
        alt="Background" 
        className="w-full h-full object-cover opacity-15"
        loading="eager"
        decoding="async"
      />
    </div>
    <div className="absolute inset-0 bg-blue-950/80"></div>
    <div className="container px-4 mx-auto text-center relative z-10">
      <div className="space-y-6">
        <h1 className="text-6xl font-bold mb-6 text-white">
          קלודינה
        </h1>
        <p className="text-3xl mb-4 text-white font-light">
          תומכת בעסקים של מחר
        </p>
        <p className="text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed">
          ליווי העסק במסע אל העתיד, יד ביד עם האנשים בדרך
        </p>
      </div>
    </div>
  </section>
);

export default Hero;