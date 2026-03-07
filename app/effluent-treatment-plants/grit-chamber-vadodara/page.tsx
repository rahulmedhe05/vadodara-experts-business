import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "grit chamber in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional grit chamber services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/grit-chamber-vadodara" },
  openGraph: {
    title: "grit chamber in Vadodara | VadodaraExperts",
    description: "Professional grit chamber services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/grit-chamber-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="grit-chamber-vadodara" />;
}
