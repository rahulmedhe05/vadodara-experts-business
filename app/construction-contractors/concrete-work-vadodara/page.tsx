import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Concrete work in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional concrete work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/concrete-work-vadodara" },
  openGraph: {
    title: "Concrete work in Vadodara | VadodaraExperts",
    description: "Professional concrete work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/concrete-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="concrete-work-vadodara" />;
}
