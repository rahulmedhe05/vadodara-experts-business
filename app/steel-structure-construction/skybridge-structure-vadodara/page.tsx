import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "skybridge structure in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional skybridge structure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/skybridge-structure-vadodara" },
  openGraph: {
    title: "skybridge structure in Vadodara | VadodaraExperts",
    description: "Professional skybridge structure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/skybridge-structure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="skybridge-structure-vadodara" />;
}
