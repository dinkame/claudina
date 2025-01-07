import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">{t('testimonials.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/95 backdrop-blur border-0 shadow-lg">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center mb-6">
                <h3 className="font-semibold text-xl text-gray-900">{t('testimonials.testimonial1.name')}</h3>
                <p className="text-sm text-gray-700 mt-1">{t('testimonials.testimonial1.role')}</p>
              </div>
              <p className="text-center text-gray-700 leading-relaxed">{t('testimonials.testimonial1.text')}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center mb-6">
                <h3 className="font-semibold text-xl text-gray-800">{t('testimonials.testimonial2.name')}</h3>
                <p className="text-sm text-gray-600 mt-1">{t('testimonials.testimonial2.role')}</p>
              </div>
              <p className="text-center text-gray-600 leading-relaxed">{t('testimonials.testimonial2.text')}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center mb-6">
                <h3 className="font-semibold text-xl text-gray-800">{t('testimonials.testimonial3.name')}</h3>
                <p className="text-sm text-gray-600 mt-1">{t('testimonials.testimonial3.role')}</p>
              </div>
              <p className="text-center text-gray-600 leading-relaxed">{t('testimonials.testimonial3.text')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;