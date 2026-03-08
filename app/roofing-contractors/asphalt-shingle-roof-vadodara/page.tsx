import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "asphalt shingle roof in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional asphalt shingle roof services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/asphalt-shingle-roof-vadodara" },
  openGraph: {
    title: "asphalt shingle roof in Vadodara | VadodaraExperts",
    description: "Professional asphalt shingle roof services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/asphalt-shingle-roof-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="asphalt-shingle-roof-vadodara" />;
}
