import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "flat roof construction in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional flat roof construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/flat-roof-construction-vadodara" },
  openGraph: {
    title: "flat roof construction in Vadodara | VadodaraExperts",
    description: "Professional flat roof construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/flat-roof-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flat-roof-construction-vadodara" />;
}
