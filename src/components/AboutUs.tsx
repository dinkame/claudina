
import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-brand-darkBlue">{t('aboutUs.title')}</h2>
        <div className="w-24 h-1 bg-brand-teal mx-auto mb-16 rounded-full"></div>
        <div className={`max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed ${i18n.language === 'en' ? 'text-left' : 'text-right'}`}>
          <p className="border-l-4 border-brand-teal pl-4">{t('aboutUs.paragraph1')}</p>
          <p>{t('aboutUs.paragraph2')}</p>
          <p className="bg-gradient-to-r from-white to-brand-teal/10 p-4 rounded-lg">{t('aboutUs.paragraph3')}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
