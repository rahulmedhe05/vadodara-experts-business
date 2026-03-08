import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Industrial refrigeration service in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional industrial refrigeration service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/industrial-refrigeration-service-vadodara" },
  openGraph: {
    title: "Industrial refrigeration service in Vadodara | VadodaraExperts",
    description: "Professional industrial refrigeration service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/industrial-refrigeration-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-refrigeration-service-vadodara" />;
}
