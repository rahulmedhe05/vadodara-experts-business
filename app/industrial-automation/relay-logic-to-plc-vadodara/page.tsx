import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "relay logic to PLC in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional relay logic to plc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/relay-logic-to-plc-vadodara" },
  openGraph: {
    title: "relay logic to PLC in Vadodara | VadodaraExperts",
    description: "Professional relay logic to plc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/relay-logic-to-plc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="relay-logic-to-plc-vadodara" />;
}
