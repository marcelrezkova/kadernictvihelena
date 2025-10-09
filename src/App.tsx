import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 font-inter">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Pricing />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;