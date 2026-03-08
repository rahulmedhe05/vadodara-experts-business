import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "effluent discharge norms in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional effluent discharge norms services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/effluent-discharge-norms-vadodara" },
  openGraph: {
    title: "effluent discharge norms in Vadodara | VadodaraExperts",
    description: "Professional effluent discharge norms services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/effluent-discharge-norms-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="effluent-discharge-norms-vadodara" />;
}
