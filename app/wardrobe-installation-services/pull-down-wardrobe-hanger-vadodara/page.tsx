import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Pull down wardrobe hanger in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional pull down wardrobe hanger services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/pull-down-wardrobe-hanger-vadodara" },
  openGraph: {
    title: "Pull down wardrobe hanger in Vadodara | VadodaraExperts",
    description: "Professional pull down wardrobe hanger services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/pull-down-wardrobe-hanger-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pull-down-wardrobe-hanger-vadodara" />;
}
