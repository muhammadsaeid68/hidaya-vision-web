
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ImpactNumbers from '@/components/ImpactNumbers';
import PropheticQuote from '@/components/PropheticQuote';
import Departments from '@/components/Departments';
import FeaturesAccordion from '@/components/FeaturesAccordion';
import GlobalReach from '@/components/GlobalReach';
import VisionMissionGoals from '@/components/VisionMissionGoals';
import PerformanceIndicators from '@/components/PerformanceIndicators';
import Footer from '@/components/Footer';

const Index = () => {
  // Adding directionality for Arabic content
  React.useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.body.classList.add('font-scheherazade');
    
    return () => {
      document.documentElement.dir = 'ltr';
      document.body.classList.remove('font-scheherazade');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ImpactNumbers />
      <PropheticQuote />
      <Departments />
      <FeaturesAccordion />
      <GlobalReach />
      <VisionMissionGoals />
      <PerformanceIndicators />
      <Footer />
    </div>
  );
};

export default Index;
