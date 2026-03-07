import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "process chiller in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional process chiller services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/process-chiller-vadodara" },
  openGraph: {
    title: "process chiller in Vadodara | VadodaraExperts",
    description: "Professional process chiller services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/process-chiller-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="process-chiller-vadodara" />;
}
