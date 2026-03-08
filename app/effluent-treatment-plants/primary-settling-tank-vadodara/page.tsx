import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "primary settling tank in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional primary settling tank services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/primary-settling-tank-vadodara" },
  openGraph: {
    title: "primary settling tank in Vadodara | VadodaraExperts",
    description: "Professional primary settling tank services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/primary-settling-tank-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="primary-settling-tank-vadodara" />;
}
