import React from 'react';
import Hero from '@/components/Hero';
import Technology from '@/components/Technology';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Technology />
      <Features />
      <Solutions />
      <Pricing/>
      <Contact />
    </div>
  );
};

export default Home;
