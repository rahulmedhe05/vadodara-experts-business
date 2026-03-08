import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "distribution board enclosure in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional distribution board enclosure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/distribution-board-enclosure-vadodara" },
  openGraph: {
    title: "distribution board enclosure in Vadodara | VadodaraExperts",
    description: "Professional distribution board enclosure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/distribution-board-enclosure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="distribution-board-enclosure-vadodara" />;
}
