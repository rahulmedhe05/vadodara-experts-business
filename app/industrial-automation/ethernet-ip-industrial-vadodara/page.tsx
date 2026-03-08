import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "Ethernet IP industrial in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional ethernet ip industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/ethernet-ip-industrial-vadodara" },
  openGraph: {
    title: "Ethernet IP industrial in Vadodara | VadodaraExperts",
    description: "Professional ethernet ip industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/ethernet-ip-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ethernet-ip-industrial-vadodara" />;
}
