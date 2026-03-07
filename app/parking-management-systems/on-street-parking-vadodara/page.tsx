import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "on street parking in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional on street parking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/on-street-parking-vadodara" },
  openGraph: {
    title: "on street parking in Vadodara | VadodaraExperts",
    description: "Professional on street parking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/on-street-parking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="on-street-parking-vadodara" />;
}
