import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "automatic boom barrier in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional automatic boom barrier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/automatic-boom-barrier-vadodara" },
  openGraph: {
    title: "automatic boom barrier in Vadodara | VadodaraExperts",
    description: "Professional automatic boom barrier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/automatic-boom-barrier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automatic-boom-barrier-vadodara" />;
}
