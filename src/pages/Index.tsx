import React from 'react';
import { useTracking } from "../hooks/useTracking";
import { useTranslation } from 'react-i18next';
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";

const Index = () => {
  const { i18n } = useTranslation();
  useTracking(); // Initialize scroll tracking

  return (
    <div dir={i18n.language === 'en' ? 'ltr' : 'rtl'} className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default Index;