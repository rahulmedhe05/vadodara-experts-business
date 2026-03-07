import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "LED parking display in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional led parking display services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/led-parking-display-vadodara" },
  openGraph: {
    title: "LED parking display in Vadodara | VadodaraExperts",
    description: "Professional led parking display services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/led-parking-display-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="led-parking-display-vadodara" />;
}
