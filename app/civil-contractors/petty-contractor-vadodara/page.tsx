import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Petty contractor in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional petty contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/petty-contractor-vadodara" },
  openGraph: {
    title: "Petty contractor in Vadodara | VadodaraExperts",
    description: "Professional petty contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/petty-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="petty-contractor-vadodara" />;
}
