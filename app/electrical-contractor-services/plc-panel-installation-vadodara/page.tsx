import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "PLC panel installation in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional plc panel installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/plc-panel-installation-vadodara" },
  openGraph: {
    title: "PLC panel installation in Vadodara | VadodaraExperts",
    description: "Professional plc panel installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/plc-panel-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plc-panel-installation-vadodara" />;
}
