import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "hotel elevator maintenance in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional hotel elevator maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/hotel-elevator-maintenance-vadodara" },
  openGraph: {
    title: "hotel elevator maintenance in Vadodara | VadodaraExperts",
    description: "Professional hotel elevator maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/hotel-elevator-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hotel-elevator-maintenance-vadodara" />;
}
