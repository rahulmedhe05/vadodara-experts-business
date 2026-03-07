import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "inspection automation in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional inspection automation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/inspection-automation-vadodara" },
  openGraph: {
    title: "inspection automation in Vadodara | VadodaraExperts",
    description: "Professional inspection automation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/inspection-automation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="inspection-automation-vadodara" />;
}
