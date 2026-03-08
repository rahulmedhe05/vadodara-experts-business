import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "tertiary treatment ETP in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional tertiary treatment etp services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/tertiary-treatment-etp-vadodara" },
  openGraph: {
    title: "tertiary treatment ETP in Vadodara | VadodaraExperts",
    description: "Professional tertiary treatment etp services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/tertiary-treatment-etp-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tertiary-treatment-etp-vadodara" />;
}
