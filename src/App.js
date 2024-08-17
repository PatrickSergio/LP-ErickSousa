import React from 'react';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import EbookSection from './components/EbookSection';
import EbookFeaturesSection from './components/EbookFeaturesSection';
import BonusSection from './components/BonusSection';
import ComboSection from './components/ComboSection';
import ComboDetailsSection from './components/ComboDetailsSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import LimitedOfferSection from './components/LimitedOfferSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <StorySection />
      <EbookSection />
      <EbookFeaturesSection />
      <BonusSection />
      <ComboSection />
      <ComboDetailsSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <LimitedOfferSection />
      <FAQSection />
      <Footer/>
    </div>
  );
}

export default App;
