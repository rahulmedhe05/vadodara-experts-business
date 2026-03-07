import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "automation maintenance in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional automation maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/automation-maintenance-vadodara" },
  openGraph: {
    title: "automation maintenance in Vadodara | VadodaraExperts",
    description: "Professional automation maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/automation-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automation-maintenance-vadodara" />;
}
