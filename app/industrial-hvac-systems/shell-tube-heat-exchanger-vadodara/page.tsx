import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "shell tube heat exchanger in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional shell tube heat exchanger services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/shell-tube-heat-exchanger-vadodara" },
  openGraph: {
    title: "shell tube heat exchanger in Vadodara | VadodaraExperts",
    description: "Professional shell tube heat exchanger services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/shell-tube-heat-exchanger-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shell-tube-heat-exchanger-vadodara" />;
}
