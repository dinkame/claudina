import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from '@/hooks/useLocalStorage';

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

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md" dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
        <div className="text-center space-y-4 p-4">
          <h2 className="text-xl font-semibold">
            {i18n.language === 'en' ? 'Why bilingual?' : '?למה דו לשוני'}
          </h2>
          <p className="text-muted-foreground">
            {i18n.language === 'en' ? (
              <>
                Because tech speaks English,<br />
                but our heart beats in Hebrew.
              </>
            ) : (
              'כי חדשנות היא באנגלית'
            )}
          </p>
          <Button
            onClick={switchLanguage}
            className="mt-4 w-full"
          >
            {i18n.language === 'en' ? (
              <>Ready to switch? Click here to continue in עברית</>
            ) : (
              'Click here to continue in English'
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LanguagePrompt;