import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "UPI parking payment in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional upi parking payment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/upi-parking-payment-vadodara" },
  openGraph: {
    title: "UPI parking payment in Vadodara | VadodaraExperts",
    description: "Professional upi parking payment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/upi-parking-payment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="upi-parking-payment-vadodara" />;
}
