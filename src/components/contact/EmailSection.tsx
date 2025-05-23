
import React from 'react';
import { Mail } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { trackClick } from "../../hooks/useTracking";

const EmailSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-brightBlue/30 to-brand-teal/30 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
      <div className="relative h-full p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-white/10 transition-all duration-300 group-hover:bg-white/20">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300">
            <Mail className="w-8 h-8 text-brand-brightBlue" />
          </div>
          <h3 className="text-xl font-semibold text-white">{t('contact.email')}</h3>
          <a 
            href="mailto:dina@claudina.co.il" 
            className="text-brand-brightBlue hover:text-white transition-colors hover:underline"
            onClick={() => trackClick('email_link')}
          >
            dina@claudina.co.il
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
