import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_SEO } from '../../config/seo';

const MetaTags = ({ 
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  openGraph = DEFAULT_SEO.openGraph,
  twitter = DEFAULT_SEO.twitter,
  canonical,
  children 
}) => {
  const finalOpenGraph = {
    ...DEFAULT_SEO.openGraph,
    ...openGraph,
    title: title,
    description: description
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={finalOpenGraph.title} />
      <meta property="og:description" content={finalOpenGraph.description} />
      <meta property="og:type" content={finalOpenGraph.type} />
      <meta property="og:url" content={finalOpenGraph.url} />
      <meta property="og:site_name" content={finalOpenGraph.site_name} />
      {finalOpenGraph.images?.map((image, index) => (
        <React.Fragment key={index}>
          <meta property="og:image" content={image.url} />
          <meta property="og:image:width" content={image.width} />
          <meta property="og:image:height" content={image.height} />
          <meta property="og:image:alt" content={image.alt} />
        </React.Fragment>
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content={twitter.cardType} />
      <meta name="twitter:site" content={twitter.handle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {finalOpenGraph.images?.[0] && (
        <meta name="twitter:image" content={finalOpenGraph.images[0].url} />
      )}

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Swedish" />
      <meta name="author" content="#sebbedj" />

      {children}
    </Helmet>
  );
};

export default MetaTags;