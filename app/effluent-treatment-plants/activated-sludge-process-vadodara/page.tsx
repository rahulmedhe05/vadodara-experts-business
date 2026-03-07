import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "activated sludge process in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional activated sludge process services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/activated-sludge-process-vadodara" },
  openGraph: {
    title: "activated sludge process in Vadodara | VadodaraExperts",
    description: "Professional activated sludge process services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/activated-sludge-process-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="activated-sludge-process-vadodara" />;
}
