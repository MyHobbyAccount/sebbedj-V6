import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import Hero from './components/Hero';
import About from './components/About/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials/Testimonials';
import { ContactForm } from './components/Contact';
import Venues from './components/Venues';
import FAQ from './components/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="bg-custom-gray-100 text-custom-gray-900">
      <main>
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <ErrorBoundary>
          <Testimonials />
        </ErrorBoundary>
        <ErrorBoundary>
          <Services />
        </ErrorBoundary>
        <ErrorBoundary>
          <FAQ />
        </ErrorBoundary>
        <ErrorBoundary>
          <ContactForm />
        </ErrorBoundary>
        <ErrorBoundary>
          <Venues />
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;