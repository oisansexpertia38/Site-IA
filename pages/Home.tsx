import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FounderAdvantage from '../components/FounderAdvantage';
import ValueProposition from '../components/ValueProposition';
import ContactCTA from '../components/ContactCTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Services />
      <FounderAdvantage />
      <ContactCTA />
    </>
  );
};

export default Home;