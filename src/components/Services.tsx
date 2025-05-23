
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-brand-darkBlue">{t('services.title')}</h2>
        <div className="w-24 h-1 bg-brand-teal mx-auto mb-16 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white/95 overflow-hidden border-0 shadow-lg hover:shadow-brand-teal/20 transition-shadow duration-300 hover:border-l-4 hover:border-brand-teal">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/50835bd6-aab0-43a9-a708-7f9cd1138e87.png" 
                alt={t('services.processOptimization.title')} 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-brand-darkBlue">{t('services.processOptimization.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-gray-700 leading-relaxed ${i18n.language === 'en' ? 'text-left' : 'text-right'}`}>
                {t('services.processOptimization.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 overflow-hidden border-0 shadow-lg hover:shadow-brand-teal/20 transition-shadow duration-300 hover:border-l-4 hover:border-brand-teal">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                alt={t('services.productManagement.title')} 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-brand-darkBlue">{t('services.productManagement.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-gray-700 leading-relaxed ${i18n.language === 'en' ? 'text-left' : 'text-right'}`}>
                {t('services.productManagement.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 overflow-hidden border-0 shadow-lg hover:shadow-brand-teal/20 transition-shadow duration-300 hover:border-l-4 hover:border-brand-teal">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/da9003fb-92a7-48b8-99e4-e7c1fe88c48b.png" 
                alt={t('services.strategicPlanning.title')} 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-brand-darkBlue">{t('services.strategicPlanning.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-gray-700 leading-relaxed ${i18n.language === 'en' ? 'text-left' : 'text-right'}`}>
                {t('services.strategicPlanning.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
