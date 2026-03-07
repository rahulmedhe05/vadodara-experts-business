import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "chilled water piping industrial in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional chilled water piping industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/chilled-water-piping-industrial-vadodara" },
  openGraph: {
    title: "chilled water piping industrial in Vadodara | VadodaraExperts",
    description: "Professional chilled water piping industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/chilled-water-piping-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chilled-water-piping-industrial-vadodara" />;
}
