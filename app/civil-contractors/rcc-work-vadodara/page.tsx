import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "RCC work in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional rcc work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/rcc-work-vadodara" },
  openGraph: {
    title: "RCC work in Vadodara | VadodaraExperts",
    description: "Professional rcc work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/rcc-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rcc-work-vadodara" />;
}
