import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("calibration-services")!;

export const metadata: Metadata = {
  title: "Hire Calibration Services in Vadodara | Calibration Services | VadodaraExperts",
  description: "Professional hire calibration services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/calibration-services/hire-calibration-services-vadodara" },
  openGraph: {
    title: "Hire Calibration Services in Vadodara | VadodaraExperts",
    description: "Professional hire calibration services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/calibration-services/hire-calibration-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hire-calibration-services-vadodara" />;
}
