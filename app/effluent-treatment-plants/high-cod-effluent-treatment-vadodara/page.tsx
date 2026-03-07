import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "high COD effluent treatment in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional high cod effluent treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/high-cod-effluent-treatment-vadodara" },
  openGraph: {
    title: "high COD effluent treatment in Vadodara | VadodaraExperts",
    description: "Professional high cod effluent treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/high-cod-effluent-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="high-cod-effluent-treatment-vadodara" />;
}
