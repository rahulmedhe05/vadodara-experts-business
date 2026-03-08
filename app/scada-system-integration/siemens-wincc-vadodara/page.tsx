import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "Siemens WinCC in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional siemens wincc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/siemens-wincc-vadodara" },
  openGraph: {
    title: "Siemens WinCC in Vadodara | VadodaraExperts",
    description: "Professional siemens wincc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/siemens-wincc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="siemens-wincc-vadodara" />;
}
