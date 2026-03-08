import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "oil and grease ETP in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional oil and grease etp services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/oil-and-grease-etp-vadodara" },
  openGraph: {
    title: "oil and grease ETP in Vadodara | VadodaraExperts",
    description: "Professional oil and grease etp services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/oil-and-grease-etp-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="oil-and-grease-etp-vadodara" />;
}
