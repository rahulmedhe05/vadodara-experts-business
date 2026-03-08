import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Civil work in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional civil work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/civil-work-vadodara" },
  openGraph: {
    title: "Civil work in Vadodara | VadodaraExperts",
    description: "Professional civil work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/civil-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="civil-work-vadodara" />;
}
