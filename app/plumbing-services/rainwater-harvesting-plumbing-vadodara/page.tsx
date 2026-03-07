import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Rainwater harvesting plumbing in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional rainwater harvesting plumbing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/rainwater-harvesting-plumbing-vadodara" },
  openGraph: {
    title: "Rainwater harvesting plumbing in Vadodara | VadodaraExperts",
    description: "Professional rainwater harvesting plumbing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/rainwater-harvesting-plumbing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rainwater-harvesting-plumbing-vadodara" />;
}
