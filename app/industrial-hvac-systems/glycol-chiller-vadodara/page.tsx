import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "glycol chiller in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional glycol chiller services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/glycol-chiller-vadodara" },
  openGraph: {
    title: "glycol chiller in Vadodara | VadodaraExperts",
    description: "Professional glycol chiller services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/glycol-chiller-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="glycol-chiller-vadodara" />;
}
