import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("calibration-services")!;

export const metadata: Metadata = {
  title: "Emergency Calibration Services in Vadodara | Calibration Services | VadodaraExperts",
  description: "Professional emergency calibration services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/calibration-services/emergency-calibration-services-vadodara" },
  openGraph: {
    title: "Emergency Calibration Services in Vadodara | VadodaraExperts",
    description: "Professional emergency calibration services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/calibration-services/emergency-calibration-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="emergency-calibration-services-vadodara" />;
}
