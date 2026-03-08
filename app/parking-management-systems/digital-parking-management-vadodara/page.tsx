import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "digital parking management in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional digital parking management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/digital-parking-management-vadodara" },
  openGraph: {
    title: "digital parking management in Vadodara | VadodaraExperts",
    description: "Professional digital parking management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/digital-parking-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="digital-parking-management-vadodara" />;
}
