import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("calibration-services")!;

export const metadata: Metadata = {
  title: "Calibration Services One Time in Vadodara | Calibration Services | VadodaraExperts",
  description: "Professional calibration services one time services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/calibration-services/calibration-services-one-time-vadodara" },
  openGraph: {
    title: "Calibration Services One Time in Vadodara | VadodaraExperts",
    description: "Professional calibration services one time services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/calibration-services/calibration-services-one-time-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="calibration-services-one-time-vadodara" />;
}
