import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Cavity wall construction in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional cavity wall construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/cavity-wall-construction-vadodara" },
  openGraph: {
    title: "Cavity wall construction in Vadodara | VadodaraExperts",
    description: "Professional cavity wall construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/cavity-wall-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cavity-wall-construction-vadodara" />;
}
