import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Wardrobe repair in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional wardrobe repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/wardrobe-repair-vadodara" },
  openGraph: {
    title: "Wardrobe repair in Vadodara | VadodaraExperts",
    description: "Professional wardrobe repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/wardrobe-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wardrobe-repair-vadodara" />;
}
