import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "best ETP company in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional best etp company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/best-etp-company-vadodara" },
  openGraph: {
    title: "best ETP company in Vadodara | VadodaraExperts",
    description: "Professional best etp company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/best-etp-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-etp-company-vadodara" />;
}
