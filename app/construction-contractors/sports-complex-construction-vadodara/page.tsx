import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Sports complex construction in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional sports complex construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/sports-complex-construction-vadodara" },
  openGraph: {
    title: "Sports complex construction in Vadodara | VadodaraExperts",
    description: "Professional sports complex construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/sports-complex-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sports-complex-construction-vadodara" />;
}
