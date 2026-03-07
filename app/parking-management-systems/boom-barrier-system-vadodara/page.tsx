import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "boom barrier system in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional boom barrier system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/boom-barrier-system-vadodara" },
  openGraph: {
    title: "boom barrier system in Vadodara | VadodaraExperts",
    description: "Professional boom barrier system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/boom-barrier-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boom-barrier-system-vadodara" />;
}
