
import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#32415a' }}>{t('aboutUs.title')}</h2>
        <div className={`max-w-4xl mx-auto space-y-6 text-lg leading-relaxed ${i18n.language === 'en' ? 'text-left' : 'text-right'}`} style={{ color: '#32415a' }}>
          <p>{t('aboutUs.paragraph1')}</p>
          <p>{t('aboutUs.paragraph2')}</p>
          <p>{t('aboutUs.paragraph3')}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
