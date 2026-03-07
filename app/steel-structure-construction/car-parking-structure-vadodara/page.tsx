import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "car parking structure in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional car parking structure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/car-parking-structure-vadodara" },
  openGraph: {
    title: "car parking structure in Vadodara | VadodaraExperts",
    description: "Professional car parking structure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/car-parking-structure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="car-parking-structure-vadodara" />;
}
