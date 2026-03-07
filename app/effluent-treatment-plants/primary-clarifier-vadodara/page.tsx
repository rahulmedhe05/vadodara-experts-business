import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "primary clarifier in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional primary clarifier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/primary-clarifier-vadodara" },
  openGraph: {
    title: "primary clarifier in Vadodara | VadodaraExperts",
    description: "Professional primary clarifier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/primary-clarifier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="primary-clarifier-vadodara" />;
}
