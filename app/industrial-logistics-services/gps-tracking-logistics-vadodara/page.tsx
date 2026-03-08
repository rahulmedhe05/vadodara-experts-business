import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "GPS tracking logistics in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional gps tracking logistics services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/gps-tracking-logistics-vadodara" },
  openGraph: {
    title: "GPS tracking logistics in Vadodara | VadodaraExperts",
    description: "Professional gps tracking logistics services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/gps-tracking-logistics-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gps-tracking-logistics-vadodara" />;
}
