import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Bored pile foundation in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional bored pile foundation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/bored-pile-foundation-vadodara" },
  openGraph: {
    title: "Bored pile foundation in Vadodara | VadodaraExperts",
    description: "Professional bored pile foundation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/bored-pile-foundation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bored-pile-foundation-vadodara" />;
}
