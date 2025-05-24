import React from 'react';
import { Linkedin } from "lucide-react";
import { trackClick } from "../hooks/useTracking";
import { useTranslation } from 'react-i18next';
const About = () => {
  const {
    t
  } = useTranslation();
  return <section className="py-24 bg-brand-darkBlue">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">{t('about.title')}</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img src="/lovable-uploads/350ce322-233d-4767-ad46-c75c6692ffd8.png" alt="Black and white portrait in subway station" className="rounded-lg shadow-xl w-full h-auto" loading="lazy" decoding="async" />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <a href="https://www.linkedin.com/in/dinaneishtadt/" target="_blank" rel="noopener noreferrer" onClick={() => trackClick('linkedin_link')} className="hover:text-brand-brightBlue transition-colors inline-flex items-center gap-3 text-white">
                {t('about.name')}
                <Linkedin className="inline h-6 w-6" />
              </a>
            </h3>
            <p className="text-gray-200 leading-relaxed text-lg text-right">
              {t('about.description1')}
            </p>
            <p className="text-gray-200 leading-relaxed text-lg mt-4 text-right">
              {t('about.description2')}
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;