import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  lang?: string
  image?: string
  url?: string
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  lang = 'fr',
  image = 'https://dgsafrica.com/logo-dgs.png',
  url = 'https://dgsafrica.com'
}: SEOProps) {
  return (
    <Helmet>
      <html lang={lang} />
      <meta name="google-site-verification" content="i-vu76A6uQagCF9qVdZII82aBCBWTFE0mWfSN9gVod8" />
      <title>{title} | DGS Africa</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="DGS Africa" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={`${title} | DGS Africa`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="fr_SN" />
      <meta property="og:site_name" content="DGS Africa" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | DGS Africa`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}