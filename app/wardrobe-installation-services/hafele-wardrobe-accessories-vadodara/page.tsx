import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Hafele wardrobe accessories in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional hafele wardrobe accessories services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/hafele-wardrobe-accessories-vadodara" },
  openGraph: {
    title: "Hafele wardrobe accessories in Vadodara | VadodaraExperts",
    description: "Professional hafele wardrobe accessories services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/hafele-wardrobe-accessories-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hafele-wardrobe-accessories-vadodara" />;
}
