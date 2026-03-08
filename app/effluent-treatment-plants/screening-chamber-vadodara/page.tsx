import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "screening chamber in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional screening chamber services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/screening-chamber-vadodara" },
  openGraph: {
    title: "screening chamber in Vadodara | VadodaraExperts",
    description: "Professional screening chamber services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/screening-chamber-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="screening-chamber-vadodara" />;
}
