import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "society parking management in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional society parking management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/society-parking-management-vadodara" },
  openGraph: {
    title: "society parking management in Vadodara | VadodaraExperts",
    description: "Professional society parking management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/society-parking-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="society-parking-management-vadodara" />;
}
