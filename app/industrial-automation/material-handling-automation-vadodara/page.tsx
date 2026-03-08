import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "material handling automation in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional material handling automation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/material-handling-automation-vadodara" },
  openGraph: {
    title: "material handling automation in Vadodara | VadodaraExperts",
    description: "Professional material handling automation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/material-handling-automation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="material-handling-automation-vadodara" />;
}
