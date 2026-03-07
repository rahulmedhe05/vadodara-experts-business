import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "number plate recognition in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional number plate recognition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/number-plate-recognition-vadodara" },
  openGraph: {
    title: "number plate recognition in Vadodara | VadodaraExperts",
    description: "Professional number plate recognition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/number-plate-recognition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="number-plate-recognition-vadodara" />;
}
