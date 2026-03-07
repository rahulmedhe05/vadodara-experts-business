import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Basement seepage treatment in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional basement seepage treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/basement-seepage-treatment-vadodara" },
  openGraph: {
    title: "Basement seepage treatment in Vadodara | VadodaraExperts",
    description: "Professional basement seepage treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/basement-seepage-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="basement-seepage-treatment-vadodara" />;
}
