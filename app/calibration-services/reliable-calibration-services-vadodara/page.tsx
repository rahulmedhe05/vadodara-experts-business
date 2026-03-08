import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("calibration-services")!;

export const metadata: Metadata = {
  title: "Reliable Calibration Services in Vadodara | Calibration Services | VadodaraExperts",
  description: "Professional reliable calibration services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/calibration-services/reliable-calibration-services-vadodara" },
  openGraph: {
    title: "Reliable Calibration Services in Vadodara | VadodaraExperts",
    description: "Professional reliable calibration services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/calibration-services/reliable-calibration-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="reliable-calibration-services-vadodara" />;
}
