import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "PLC automation in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional plc automation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/plc-automation-vadodara" },
  openGraph: {
    title: "PLC automation in Vadodara | VadodaraExperts",
    description: "Professional plc automation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/plc-automation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plc-automation-vadodara" />;
}
