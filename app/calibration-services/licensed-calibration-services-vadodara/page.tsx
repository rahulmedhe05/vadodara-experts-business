import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("calibration-services")!;

export const metadata: Metadata = {
  title: "Licensed Calibration Services in Vadodara | Calibration Services | VadodaraExperts",
  description: "Professional licensed calibration services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/calibration-services/licensed-calibration-services-vadodara" },
  openGraph: {
    title: "Licensed Calibration Services in Vadodara | VadodaraExperts",
    description: "Professional licensed calibration services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/calibration-services/licensed-calibration-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="licensed-calibration-services-vadodara" />;
}
