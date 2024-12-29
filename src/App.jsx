import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Hero from "./components/Hero";
import About from "./components/About/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import { ContactForm } from "./components/Contact";
import Venues from "./components/Venues";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer/Footer";
import SiteMap from "./components/SEO/SiteMap";
import { DEFAULT_SEO } from "./config/seo";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>{DEFAULT_SEO.title}</title>
        <meta name="description" content={DEFAULT_SEO.description} />
        <meta name="keywords" content={DEFAULT_SEO.keywords} />
        {/* Add structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "#sebbedj",
            description:
              "Professionell DJ för bröllop, fester och event runt Växjö och södra Sverige",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Växjö",
              addressCountry: "SE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "56.8790",
              longitude: "14.8059",
            },
            url: "https://www.sebbedj.se",
            telephone: "072-157 14 39",
            email: "boka@sebbedj.se",
            priceRange: "$$$",
            openingHours: "Mo-Su",
            image: "/media/images/disco dude.jpeg",
          })}
        </script>
      </Helmet>
      <SiteMap />
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
    </>
  );
}

export default App;
