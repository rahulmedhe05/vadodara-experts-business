import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Civil construction cost in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional civil construction cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/civil-construction-cost-vadodara" },
  openGraph: {
    title: "Civil construction cost in Vadodara | VadodaraExperts",
    description: "Professional civil construction cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/civil-construction-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="civil-construction-cost-vadodara" />;
}
