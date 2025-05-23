
import React from 'react';
import { Linkedin, Twitter, Facebook } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { trackClick } from "../../hooks/useTracking";

const SocialSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-brightBlue/30 to-brand-teal/30 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
      <div className="relative h-full p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-white/10 transition-all duration-300 group-hover:bg-white/20">
        <div className="flex flex-col items-center text-center space-y-4">
          <h3 className="text-xl font-semibold text-white">{t('contact.socialMedia')}</h3>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/dinaneishtadt/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('linkedin_link')}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group/icon hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-brand-brightBlue group-hover/icon:text-white" />
            </a>
            <a 
              href="https://x.com/DinkaMe"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('twitter_link')}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group/icon hover:scale-110"
            >
              <Twitter className="w-6 h-6 text-brand-brightBlue group-hover/icon:text-white" />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61571270376286"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('facebook_link')}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group/icon hover:scale-110"
            >
              <Facebook className="w-6 h-6 text-brand-brightBlue group-hover/icon:text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
