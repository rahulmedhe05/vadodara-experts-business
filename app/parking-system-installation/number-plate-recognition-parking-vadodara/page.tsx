import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "number plate recognition parking in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional number plate recognition parking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/number-plate-recognition-parking-vadodara" },
  openGraph: {
    title: "number plate recognition parking in Vadodara | VadodaraExperts",
    description: "Professional number plate recognition parking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/number-plate-recognition-parking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="number-plate-recognition-parking-vadodara" />;
}
