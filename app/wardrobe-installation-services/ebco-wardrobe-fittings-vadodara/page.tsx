import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Ebco wardrobe fittings in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional ebco wardrobe fittings services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/ebco-wardrobe-fittings-vadodara" },
  openGraph: {
    title: "Ebco wardrobe fittings in Vadodara | VadodaraExperts",
    description: "Professional ebco wardrobe fittings services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/ebco-wardrobe-fittings-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ebco-wardrobe-fittings-vadodara" />;
}
