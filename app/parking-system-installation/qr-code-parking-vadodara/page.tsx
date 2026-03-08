import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "QR code parking in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional qr code parking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/qr-code-parking-vadodara" },
  openGraph: {
    title: "QR code parking in Vadodara | VadodaraExperts",
    description: "Professional qr code parking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/qr-code-parking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="qr-code-parking-vadodara" />;
}
