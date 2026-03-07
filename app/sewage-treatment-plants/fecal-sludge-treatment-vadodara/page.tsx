import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "fecal sludge treatment in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional fecal sludge treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/fecal-sludge-treatment-vadodara" },
  openGraph: {
    title: "fecal sludge treatment in Vadodara | VadodaraExperts",
    description: "Professional fecal sludge treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/fecal-sludge-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fecal-sludge-treatment-vadodara" />;
}
