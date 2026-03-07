import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "SCADA system in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional scada system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/scada-system-vadodara" },
  openGraph: {
    title: "SCADA system in Vadodara | VadodaraExperts",
    description: "Professional scada system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/scada-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scada-system-vadodara" />;
}
