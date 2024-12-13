import React from "react";
import { Helmet } from "react-helmet-async";

const SchemaMarkup = ({ type, data }) => {
  const schemas = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "#sebbedj",
      description: "Professionella DJ-tjänster i södra Sverige",
      url: "https://sebbedj.se",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "072-157 14 39",
        email: "boka@sebbedj.se",
        contactType: "kundservice",
      },
    },
    professionalService: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "#sebbedj",
      description:
        "Professionella DJ-tjänster för bröllop, privatfester och evenemang",
      priceRange: "$$",
      areaServed: "Sverige",
      ...data,
    },
  };

  const schema = schemas[type] || {};

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SchemaMarkup;
