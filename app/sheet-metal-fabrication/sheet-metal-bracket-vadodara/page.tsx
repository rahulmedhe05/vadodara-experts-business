import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "sheet metal bracket in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional sheet metal bracket services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/sheet-metal-bracket-vadodara" },
  openGraph: {
    title: "sheet metal bracket in Vadodara | VadodaraExperts",
    description: "Professional sheet metal bracket services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/sheet-metal-bracket-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sheet-metal-bracket-vadodara" />;
}
