import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "chimney fabrication sheet metal in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional chimney fabrication sheet metal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/chimney-fabrication-sheet-metal-vadodara" },
  openGraph: {
    title: "chimney fabrication sheet metal in Vadodara | VadodaraExperts",
    description: "Professional chimney fabrication sheet metal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/chimney-fabrication-sheet-metal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chimney-fabrication-sheet-metal-vadodara" />;
}
