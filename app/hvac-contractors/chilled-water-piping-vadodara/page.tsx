import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "chilled water piping in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional chilled water piping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/chilled-water-piping-vadodara" },
  openGraph: {
    title: "chilled water piping in Vadodara | VadodaraExperts",
    description: "Professional chilled water piping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/chilled-water-piping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chilled-water-piping-vadodara" />;
}
