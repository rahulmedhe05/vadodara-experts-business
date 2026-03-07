import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Lacquered wardrobe door in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional lacquered wardrobe door services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/lacquered-wardrobe-door-vadodara" },
  openGraph: {
    title: "Lacquered wardrobe door in Vadodara | VadodaraExperts",
    description: "Professional lacquered wardrobe door services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/lacquered-wardrobe-door-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lacquered-wardrobe-door-vadodara" />;
}
