import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "water cooled chiller in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional water cooled chiller services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/water-cooled-chiller-vadodara" },
  openGraph: {
    title: "water cooled chiller in Vadodara | VadodaraExperts",
    description: "Professional water cooled chiller services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/water-cooled-chiller-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-cooled-chiller-vadodara" />;
}
