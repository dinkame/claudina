
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ChevronDown } from 'lucide-react';

const LanguagePrompt = () => {
  const { i18n } = useTranslation();
  const [hasSeenPrompt, setHasSeenPrompt] = useLocalStorage('hasSeenLanguagePrompt', false);
  const [isOpen, setIsOpen] = React.useState(!hasSeenPrompt);

  const switchLanguage = () => {
    const newLang = i18n.language === 'en' ? 'he' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'he' ? 'rtl' : 'ltr';
    setHasSeenPrompt(true);
    setIsOpen(false);
  };

  const handleClose = () => {
    setHasSeenPrompt(true);
    setIsOpen(false);
  };

  const scrollIndicator = !isOpen && (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
      <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </div>
  );

  if (!isOpen && !hasSeenPrompt) return scrollIndicator;
  if (!isOpen) return null;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent 
          className="sm:max-w-md border-0 bg-transparent shadow-none" 
          dir={i18n.language === 'en' ? 'ltr' : 'rtl'}
        >
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-white/10 transition-all duration-300 group-hover:bg-white/20">
              <div className="flex flex-col items-center text-center space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  {i18n.language === 'en' ? 'Why bilingual?' : '?למה דו לשוני'}
                </h2>
                <p className="text-lg text-white/80">
                  {i18n.language === 'en' ? (
                    <>
                      Because tech speaks English,<br />
                      but our heart beats in Hebrew
                    </>
                  ) : (
                    'כי חדשנות היא באנגלית'
                  )}
                </p>
                <Button
                  onClick={switchLanguage}
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  {i18n.language === 'en' ? (
                    'המשך לגרסה העברית'
                  ) : (
                    'Click here to continue in English'
                  )}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {scrollIndicator}
    </>
  );
};

export default LanguagePrompt;
