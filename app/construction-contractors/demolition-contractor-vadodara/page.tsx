import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Demolition contractor in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional demolition contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/demolition-contractor-vadodara" },
  openGraph: {
    title: "Demolition contractor in Vadodara | VadodaraExperts",
    description: "Professional demolition contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/demolition-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="demolition-contractor-vadodara" />;
}
