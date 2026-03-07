import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "painting robot in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional painting robot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/painting-robot-vadodara" },
  openGraph: {
    title: "painting robot in Vadodara | VadodaraExperts",
    description: "Professional painting robot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/painting-robot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="painting-robot-vadodara" />;
}
