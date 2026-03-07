import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Floor to ceiling wardrobe in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional floor to ceiling wardrobe services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/floor-to-ceiling-wardrobe-vadodara" },
  openGraph: {
    title: "Floor to ceiling wardrobe in Vadodara | VadodaraExperts",
    description: "Professional floor to ceiling wardrobe services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/floor-to-ceiling-wardrobe-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="floor-to-ceiling-wardrobe-vadodara" />;
}
