import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white/95 overflow-hidden border-0 shadow-lg">
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
              <CardTitle className="text-2xl text-gray-900">{t('services.processOptimization.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{t('services.processOptimization.description')}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 overflow-hidden border-0 shadow-lg">
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
              <CardTitle className="text-2xl text-gray-900">{t('services.productManagement.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{t('services.productManagement.description')}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 overflow-hidden border-0 shadow-lg">
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
              <CardTitle className="text-2xl text-gray-900">{t('services.strategicPlanning.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{t('services.strategicPlanning.description')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;