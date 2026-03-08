import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Concrete casting in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional concrete casting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/concrete-casting-vadodara" },
  openGraph: {
    title: "Concrete casting in Vadodara | VadodaraExperts",
    description: "Professional concrete casting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/concrete-casting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="concrete-casting-vadodara" />;
}
