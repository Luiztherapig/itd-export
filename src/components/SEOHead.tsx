import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "/og-image.png",
  ogType = "website",
  noindex = false,
}: SEOHeadProps) => {
  const fullTitle = title.includes("Interdental") 
    ? title 
    : `${title} | Interdental`;
  
  const truncatedDescription = description.length > 160 
    ? description.substring(0, 157) + "..." 
    : description;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={truncatedDescription} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={truncatedDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={truncatedDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;
