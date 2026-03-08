/**
 * Image Mapping System for VadodaraExperts.com
 * All images are local WebP files served from /images/niches/{slug}/
 */

interface NicheImages {
  hero: string;
  content: string[];
}

export function getNicheImages(nicheSlug: string, _category: string): NicheImages {
  return {
    hero: `/images/niches/${nicheSlug}/hero.webp`,
    content: [
      `/images/niches/${nicheSlug}/content-1.webp`,
      `/images/niches/${nicheSlug}/content-2.webp`,
    ],
  };
}

export function getImageAlt(nicheName: string, keyword: string): string {
  return `${nicheName} - ${keyword} in Vadodara | VadodaraExperts`;
}
