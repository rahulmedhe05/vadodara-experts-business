import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Wardrobe shelf replacement in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional wardrobe shelf replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/wardrobe-shelf-replacement-vadodara" },
  openGraph: {
    title: "Wardrobe shelf replacement in Vadodara | VadodaraExperts",
    description: "Professional wardrobe shelf replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/wardrobe-shelf-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wardrobe-shelf-replacement-vadodara" />;
}
