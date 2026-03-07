import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "labelling automation in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional labelling automation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/labelling-automation-vadodara" },
  openGraph: {
    title: "labelling automation in Vadodara | VadodaraExperts",
    description: "Professional labelling automation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/labelling-automation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="labelling-automation-vadodara" />;
}
