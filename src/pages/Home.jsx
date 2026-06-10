import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div style={{ background: '#fcfcfc', minHeight: '100vh' }}>

      <Hero />

      <main>
        <FeaturedProducts />
      </main>

      <Footer />
    </div>
  );
};

export default Home;