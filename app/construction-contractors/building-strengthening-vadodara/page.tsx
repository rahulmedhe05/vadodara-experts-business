import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Building strengthening in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional building strengthening services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/building-strengthening-vadodara" },
  openGraph: {
    title: "Building strengthening in Vadodara | VadodaraExperts",
    description: "Professional building strengthening services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/building-strengthening-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-strengthening-vadodara" />;
}
