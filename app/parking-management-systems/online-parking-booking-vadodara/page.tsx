import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "online parking booking in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional online parking booking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/online-parking-booking-vadodara" },
  openGraph: {
    title: "online parking booking in Vadodara | VadodaraExperts",
    description: "Professional online parking booking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/online-parking-booking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="online-parking-booking-vadodara" />;
}
