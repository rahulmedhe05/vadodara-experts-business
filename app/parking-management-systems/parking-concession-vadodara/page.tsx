import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "parking concession in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional parking concession services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/parking-concession-vadodara" },
  openGraph: {
    title: "parking concession in Vadodara | VadodaraExperts",
    description: "Professional parking concession services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/parking-concession-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-concession-vadodara" />;
}
