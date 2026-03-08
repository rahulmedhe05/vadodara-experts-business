import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "diffused aeration in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional diffused aeration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/diffused-aeration-vadodara" },
  openGraph: {
    title: "diffused aeration in Vadodara | VadodaraExperts",
    description: "Professional diffused aeration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/diffused-aeration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="diffused-aeration-vadodara" />;
}
