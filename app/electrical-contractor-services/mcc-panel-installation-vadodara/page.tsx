import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "MCC panel installation in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional mcc panel installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/mcc-panel-installation-vadodara" },
  openGraph: {
    title: "MCC panel installation in Vadodara | VadodaraExperts",
    description: "Professional mcc panel installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/mcc-panel-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mcc-panel-installation-vadodara" />;
}
