import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Blum wardrobe fittings in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional blum wardrobe fittings services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/blum-wardrobe-fittings-vadodara" },
  openGraph: {
    title: "Blum wardrobe fittings in Vadodara | VadodaraExperts",
    description: "Professional blum wardrobe fittings services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/blum-wardrobe-fittings-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="blum-wardrobe-fittings-vadodara" />;
}
