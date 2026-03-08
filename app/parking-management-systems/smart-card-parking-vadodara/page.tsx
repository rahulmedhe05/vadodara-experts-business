import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "smart card parking in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional smart card parking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/smart-card-parking-vadodara" },
  openGraph: {
    title: "smart card parking in Vadodara | VadodaraExperts",
    description: "Professional smart card parking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/smart-card-parking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-card-parking-vadodara" />;
}
