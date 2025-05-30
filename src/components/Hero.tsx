
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-darkBlue to-brand-darkBlue/80"></div>
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold mb-6 text-white">
            {t('hero.title')}
          </h1>
          <p className="text-3xl mb-4 text-brand-brightBlue font-light">
            {t('hero.subtitle')}
          </p>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
        </div>
      </div>
      
      {/* Positioned at the absolute bottom of the section */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-brand-brightBlue" />
      </div>
    </section>
  );
};

export default Hero;
