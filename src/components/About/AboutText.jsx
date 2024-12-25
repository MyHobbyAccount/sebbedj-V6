import React from "react";
import { motion } from "framer-motion";
import MetaTags from "../SEO/MetaTags";
import SchemaMarkup from "../SEO/SchemaMarkup";
import { PAGE_META } from "../../config/seo";

const AboutText = () => {
  const paragraphs = [
    {
      text: `Välkommen till en värld där musiken sätter stämningen och varje fest blir unik! Jag är sebbedj – en engagerad, underhållande och erfaren DJ som brinner för att skapa oförglömliga stunder på dansgolvet. Mina spelningar är oftast personliga och jag upplevs som en del av festen. Jag utgår några mil söder om Växjö och kan enkelt ta mig runt i södra Sverige.`,
      keywords: [
        "DJ",
        "Växjö DJ",
        "södra Sverige",
        "fest",
        "underhållning",
        "bröllop DJ",
        "event DJ",
        "sebbedj",
        "DJ sebbe",
        "sebbe dj",
      ],
    },
    {
      text: `Med en naturlig känsla för att läsa av publiken och en bred musikalisk repertoar levererar jag precis det som behövs för att din kväll ska bli magisk. Oavsett om det handlar om att sätta takten på ett bröllop, arrangera ett underhållande musikquiz, eller skapa en kväll full av energi och glädje, så är mitt mål att ge dig och dina gäster en upplevelse ni sent kommer glömma.`,
      keywords: [
        "DJ bröllop",
        "musikquiz",
        "DJ tjänster",
        "underhållning",
        "DJ nattklubb",
        "boka DJ",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Schema.org structured data
  const professionalServiceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "sebbedj",
    description:
      "Professionell DJ-tjänst för bröllop, fester och events i södra Sverige",
    areaServed: "Södra Sverige",
    serviceType: "DJ",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Växjö",
      addressCountry: "SE",
    },
  };

  return (
    <motion.article
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <MetaTags
        title={PAGE_META.about.title}
        description={PAGE_META.about.description}
        keywords={PAGE_META.about.keywords}
      />

      <SchemaMarkup type="professionalService" data={professionalServiceData} />

      {paragraphs.map((paragraph, index) => (
        <motion.div key={index} variants={itemVariants}>
          <p
            className="text-white opacity-90 leading-relaxed"
            itemProp="description"
          >
            {paragraph.text}
          </p>
          <meta name="keywords" content={paragraph.keywords.join(", ")} />
        </motion.div>
      ))}

      {/* Hidden semantic elements for SEO */}
      <div className="hidden">
        <h2 itemProp="name">sebbedj - Professionell DJ i Södra Sverige</h2>
        <p itemProp="serviceArea">Växjö och södra Sverige</p>
        <p itemProp="serviceType">
          DJ tjänster för bröllop, fester, företagsfest, privatfest, nattklubb
          och events
        </p>
      </div>
    </motion.article>
  );
};

export default AboutText;
