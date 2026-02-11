/**
 * Metadata and SEO utilities for portfolio site
 */

export const siteMetadata = {
  title: 'Senior Backend Engineer - Portfolio',
  description:
    'Portfolio of a Senior Backend Engineer specializing in distributed systems, microservices, and scalable backend architecture.',
  keywords: [
    'Backend Engineer',
    'Java',
    'Spring Boot',
    'Distributed Systems',
    'Microservices',
    'Kafka',
    'System Design',
    'Architecture',
  ],
  author: 'Your Name',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com',
  ogImage: '/og-image.png',
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ''
) {
  return {
    title: `${title} | ${siteMetadata.title}`,
    description,
    openGraph: {
      title,
      description,
      url: `${siteMetadata.url}${path}`,
      type: 'website',
      images: [
        {
          url: siteMetadata.ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
