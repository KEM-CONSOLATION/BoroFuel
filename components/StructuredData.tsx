export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://borofuel.org';
  const logoUrl = `${siteUrl}/logo.jpg`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Borofuel',
    legalName: 'Borofuel',
    description:
      'Fuel access and station-partner app that connects approved drivers with designated filling stations for seamless fuel collection',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
      width: 1024,
      height: 1024,
    },
    image: logoUrl,
    foundingDate: '2024',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Borofuel',
    alternateName: 'Borofuel App',
    url: siteUrl,
    description:
      'Connecting approved drivers with designated filling stations for seamless fuel collection',
    publisher: {
      '@type': 'Organization',
      name: 'Borofuel',
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Borofuel',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      ratingCount: '100',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
    </>
  );
}
