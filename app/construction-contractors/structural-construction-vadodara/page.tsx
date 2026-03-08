import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Structural construction in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional structural construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/structural-construction-vadodara" },
  openGraph: {
    title: "Structural construction in Vadodara | VadodaraExperts",
    description: "Professional structural construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/structural-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structural-construction-vadodara" />;
}
