import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "polymer supplier ETP in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional polymer supplier etp services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/polymer-supplier-etp-vadodara" },
  openGraph: {
    title: "polymer supplier ETP in Vadodara | VadodaraExperts",
    description: "Professional polymer supplier etp services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/polymer-supplier-etp-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="polymer-supplier-etp-vadodara" />;
}
