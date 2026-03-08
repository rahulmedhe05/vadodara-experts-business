import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "machine room less lift in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional machine room less lift services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/machine-room-less-lift-vadodara" },
  openGraph: {
    title: "machine room less lift in Vadodara | VadodaraExperts",
    description: "Professional machine room less lift services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/machine-room-less-lift-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="machine-room-less-lift-vadodara" />;
}
