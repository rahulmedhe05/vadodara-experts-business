import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Labour contractor in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional labour contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/labour-contractor-vadodara" },
  openGraph: {
    title: "Labour contractor in Vadodara | VadodaraExperts",
    description: "Professional labour contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/labour-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="labour-contractor-vadodara" />;
}
