import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "RFID card parking in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional rfid card parking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/rfid-card-parking-vadodara" },
  openGraph: {
    title: "RFID card parking in Vadodara | VadodaraExperts",
    description: "Professional rfid card parking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/rfid-card-parking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rfid-card-parking-vadodara" />;
}
