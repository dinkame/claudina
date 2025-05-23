
import React from 'react';
import { useTranslation } from 'react-i18next';
import EmailSection from './contact/EmailSection';
import MessageSection from './contact/MessageSection';
import SocialSection from './contact/SocialSection';

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-darkBlue via-brand-darkBlue to-brand-teal">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
      </div>

      <div className="container relative px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 animate-fade-in">{t('contact.title')}</h2>
            <p className="text-brand-brightBlue text-lg animate-fade-in delay-100">{t('contact.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EmailSection />
            <MessageSection />
            <SocialSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
