import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "best sheet metal fabricator in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional best sheet metal fabricator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/best-sheet-metal-fabricator-vadodara" },
  openGraph: {
    title: "best sheet metal fabricator in Vadodara | VadodaraExperts",
    description: "Professional best sheet metal fabricator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/best-sheet-metal-fabricator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-sheet-metal-fabricator-vadodara" />;
}
