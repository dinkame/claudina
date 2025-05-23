
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24" style={{ backgroundColor: '#32415a' }}>
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">{t('testimonials.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgba(120, 205, 235, 0.1)' }}>
            <CardContent className="pt-8">
              <div className="flex flex-col items-center mb-6">
                <h3 className="font-semibold text-xl text-white">{t('testimonials.testimonial1.name')}</h3>
                <p className="text-sm mt-1" style={{ color: '#78cdeb' }}>{t('testimonials.testimonial1.role')}</p>
              </div>
              <p className="text-center leading-relaxed" style={{ color: '#78cdeb' }}>{t('testimonials.testimonial1.text')}</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgba(0, 130, 140, 0.1)' }}>
            <CardContent className="pt-8">
              <div className="flex flex-col items-center mb-6">
                <h3 className="font-semibold text-xl text-white">{t('testimonials.testimonial2.name')}</h3>
                <p className="text-sm mt-1" style={{ color: '#00828c' }}>{t('testimonials.testimonial2.role')}</p>
              </div>
              <p className="text-center leading-relaxed" style={{ color: '#00828c' }}>{t('testimonials.testimonial2.text')}</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgba(120, 205, 235, 0.1)' }}>
            <CardContent className="pt-8">
              <div className="flex flex-col items-center mb-6">
                <h3 className="font-semibold text-xl text-white">{t('testimonials.testimonial3.name')}</h3>
                <p className="text-sm mt-1" style={{ color: '#78cdeb' }}>{t('testimonials.testimonial3.role')}</p>
              </div>
              <p className="text-center leading-relaxed" style={{ color: '#78cdeb' }}>{t('testimonials.testimonial3.text')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
