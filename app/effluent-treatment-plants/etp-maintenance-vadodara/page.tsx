import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "ETP maintenance in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional etp maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/etp-maintenance-vadodara" },
  openGraph: {
    title: "ETP maintenance in Vadodara | VadodaraExperts",
    description: "Professional etp maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/etp-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="etp-maintenance-vadodara" />;
}
