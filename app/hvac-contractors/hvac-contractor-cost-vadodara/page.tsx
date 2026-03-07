import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "HVAC contractor cost in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional hvac contractor cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/hvac-contractor-cost-vadodara" },
  openGraph: {
    title: "HVAC contractor cost in Vadodara | VadodaraExperts",
    description: "Professional hvac contractor cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/hvac-contractor-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hvac-contractor-cost-vadodara" />;
}
