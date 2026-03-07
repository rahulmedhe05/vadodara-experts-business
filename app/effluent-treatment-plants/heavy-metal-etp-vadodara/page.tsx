import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "heavy metal ETP in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional heavy metal etp services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/heavy-metal-etp-vadodara" },
  openGraph: {
    title: "heavy metal ETP in Vadodara | VadodaraExperts",
    description: "Professional heavy metal etp services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/heavy-metal-etp-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heavy-metal-etp-vadodara" />;
}
