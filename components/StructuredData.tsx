export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Borofuel',
    description:
      'Fuel access and station-partner app that connects approved drivers with designated filling stations for seamless fuel collection',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://borofuel.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://borofuel.com'}/logo.jpg`,
    sameAs: [],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Borofuel',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://borofuel.com',
    description:
      'Connecting approved drivers with designated filling stations for seamless fuel collection',
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
    </>
  );
}
