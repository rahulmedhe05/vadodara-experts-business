import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Logistics park construction in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional logistics park construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/logistics-park-construction-vadodara" },
  openGraph: {
    title: "Logistics park construction in Vadodara | VadodaraExperts",
    description: "Professional logistics park construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/logistics-park-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="logistics-park-construction-vadodara" />;
}
