import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Civil construction company in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional civil construction company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/civil-construction-company-vadodara" },
  openGraph: {
    title: "Civil construction company in Vadodara | VadodaraExperts",
    description: "Professional civil construction company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/civil-construction-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="civil-construction-company-vadodara" />;
}
