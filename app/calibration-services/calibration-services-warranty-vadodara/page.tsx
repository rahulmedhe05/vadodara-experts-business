import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("calibration-services")!;

export const metadata: Metadata = {
  title: "Calibration Services Warranty in Vadodara | Calibration Services | VadodaraExperts",
  description: "Professional calibration services warranty services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/calibration-services/calibration-services-warranty-vadodara" },
  openGraph: {
    title: "Calibration Services Warranty in Vadodara | VadodaraExperts",
    description: "Professional calibration services warranty services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/calibration-services/calibration-services-warranty-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="calibration-services-warranty-vadodara" />;
}
