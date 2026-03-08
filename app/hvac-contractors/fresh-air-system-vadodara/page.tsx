import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "fresh air system in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional fresh air system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/fresh-air-system-vadodara" },
  openGraph: {
    title: "fresh air system in Vadodara | VadodaraExperts",
    description: "Professional fresh air system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/fresh-air-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fresh-air-system-vadodara" />;
}
