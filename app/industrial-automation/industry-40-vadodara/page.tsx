import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "Industry 4.0 in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional industry 4.0 services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/industry-40-vadodara" },
  openGraph: {
    title: "Industry 4.0 in Vadodara | VadodaraExperts",
    description: "Professional industry 4.0 services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/industry-40-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industry-40-vadodara" />;
}
