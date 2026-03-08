import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "parking payment system in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional parking payment system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/parking-payment-system-vadodara" },
  openGraph: {
    title: "parking payment system in Vadodara | VadodaraExperts",
    description: "Professional parking payment system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/parking-payment-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-payment-system-vadodara" />;
}
