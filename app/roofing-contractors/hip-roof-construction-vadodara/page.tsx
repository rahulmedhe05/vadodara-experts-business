import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "hip roof construction in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional hip roof construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/hip-roof-construction-vadodara" },
  openGraph: {
    title: "hip roof construction in Vadodara | VadodaraExperts",
    description: "Professional hip roof construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/hip-roof-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hip-roof-construction-vadodara" />;
}
