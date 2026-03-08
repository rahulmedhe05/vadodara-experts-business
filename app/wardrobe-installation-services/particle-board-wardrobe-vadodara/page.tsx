import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Particle board wardrobe in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional particle board wardrobe services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/particle-board-wardrobe-vadodara" },
  openGraph: {
    title: "Particle board wardrobe in Vadodara | VadodaraExperts",
    description: "Professional particle board wardrobe services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/particle-board-wardrobe-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="particle-board-wardrobe-vadodara" />;
}
