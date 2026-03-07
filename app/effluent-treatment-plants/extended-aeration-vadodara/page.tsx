import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "extended aeration in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional extended aeration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/extended-aeration-vadodara" },
  openGraph: {
    title: "extended aeration in Vadodara | VadodaraExperts",
    description: "Professional extended aeration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/extended-aeration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="extended-aeration-vadodara" />;
}
