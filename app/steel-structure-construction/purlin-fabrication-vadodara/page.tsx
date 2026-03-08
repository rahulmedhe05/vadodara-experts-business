import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "purlin fabrication in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional purlin fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/purlin-fabrication-vadodara" },
  openGraph: {
    title: "purlin fabrication in Vadodara | VadodaraExperts",
    description: "Professional purlin fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/purlin-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="purlin-fabrication-vadodara" />;
}
