
import React from 'react';
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { trackClick } from "../../hooks/useTracking";

const MessageSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-brightBlue/30 to-brand-brightBlue/20 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
      <div className="relative h-full p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-white/10 transition-all duration-300 group-hover:bg-white/20">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300">
            <MessageCircle className="w-8 h-8 text-brand-brightBlue" />
          </div>
          <h3 className="text-xl font-semibold text-white">{t('contact.instantMessage')}</h3>
          <Button 
            variant="default" 
            onClick={() => {
              trackClick('whatsapp_button');
              window.open('https://wa.me/972547341867', '_blank');
            }} 
            className="transition-all duration-300 backdrop-blur-sm bg-[#25d366] hover:bg-[#128c7e] text-white border-0"
          >
            <MessageCircle className="mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
