import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "data centre cooling in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional data centre cooling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/data-centre-cooling-vadodara" },
  openGraph: {
    title: "data centre cooling in Vadodara | VadodaraExperts",
    description: "Professional data centre cooling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/data-centre-cooling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="data-centre-cooling-vadodara" />;
}
