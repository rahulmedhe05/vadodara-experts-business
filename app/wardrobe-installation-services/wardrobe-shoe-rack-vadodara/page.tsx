import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Wardrobe shoe rack in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional wardrobe shoe rack services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/wardrobe-shoe-rack-vadodara" },
  openGraph: {
    title: "Wardrobe shoe rack in Vadodara | VadodaraExperts",
    description: "Professional wardrobe shoe rack services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/wardrobe-shoe-rack-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wardrobe-shoe-rack-vadodara" />;
}
