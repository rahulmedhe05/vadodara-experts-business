import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Damp proof course in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional damp proof course services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/damp-proof-course-vadodara" },
  openGraph: {
    title: "Damp proof course in Vadodara | VadodaraExperts",
    description: "Professional damp proof course services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/damp-proof-course-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="damp-proof-course-vadodara" />;
}
