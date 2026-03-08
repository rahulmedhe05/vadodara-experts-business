import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "alkaline effluent treatment in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional alkaline effluent treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/alkaline-effluent-treatment-vadodara" },
  openGraph: {
    title: "alkaline effluent treatment in Vadodara | VadodaraExperts",
    description: "Professional alkaline effluent treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/alkaline-effluent-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="alkaline-effluent-treatment-vadodara" />;
}
