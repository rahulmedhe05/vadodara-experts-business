import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "parking shade steel structure in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional parking shade steel structure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/parking-shade-steel-structure-vadodara" },
  openGraph: {
    title: "parking shade steel structure in Vadodara | VadodaraExperts",
    description: "Professional parking shade steel structure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/parking-shade-steel-structure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-shade-steel-structure-vadodara" />;
}
