import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t('aboutUs.title')}</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>{t('aboutUs.paragraph1')}</p>
          <p>{t('aboutUs.paragraph2')}</p>
          <p>{t('aboutUs.paragraph3')}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;