import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Basement excavation in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional basement excavation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/basement-excavation-vadodara" },
  openGraph: {
    title: "Basement excavation in Vadodara | VadodaraExperts",
    description: "Professional basement excavation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/basement-excavation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="basement-excavation-vadodara" />;
}
