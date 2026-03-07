import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "real time tracking in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional real time tracking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/real-time-tracking-vadodara" },
  openGraph: {
    title: "real time tracking in Vadodara | VadodaraExperts",
    description: "Professional real time tracking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/real-time-tracking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="real-time-tracking-vadodara" />;
}
