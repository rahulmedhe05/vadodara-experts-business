import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "pressurization system in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional pressurization system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/pressurization-system-vadodara" },
  openGraph: {
    title: "pressurization system in Vadodara | VadodaraExperts",
    description: "Professional pressurization system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/pressurization-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pressurization-system-vadodara" />;
}
