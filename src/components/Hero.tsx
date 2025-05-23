
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/42772dbd-10db-4b1d-8c7a-74a4b0050243.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-10"
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(50, 65, 90, 0.85)' }}></div>
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/da9003fb-92a7-48b8-99e4-e7c1fe88c48b.png" 
              alt="Claudina Logo" 
              className="h-24 w-auto"
              loading="eager"
              decoding="async"
            />
          </div>
          
          <h1 className="text-6xl font-bold mb-6 text-white">
            {t('hero.title')}
          </h1>
          <p className="text-3xl mb-4 font-light" style={{ color: '#78cdeb' }}>
            {t('hero.subtitle')}
          </p>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#78cdeb' }}>
            {t('hero.description')}
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8" style={{ color: '#78cdeb' }} />
      </div>
    </section>
  );
};

export default Hero;
