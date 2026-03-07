import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Wardrobe laundry bin in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional wardrobe laundry bin services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/wardrobe-laundry-bin-vadodara" },
  openGraph: {
    title: "Wardrobe laundry bin in Vadodara | VadodaraExperts",
    description: "Professional wardrobe laundry bin services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/wardrobe-laundry-bin-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wardrobe-laundry-bin-vadodara" />;
}
