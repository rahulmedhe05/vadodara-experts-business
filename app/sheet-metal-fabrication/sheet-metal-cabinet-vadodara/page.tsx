import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "sheet metal cabinet in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional sheet metal cabinet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/sheet-metal-cabinet-vadodara" },
  openGraph: {
    title: "sheet metal cabinet in Vadodara | VadodaraExperts",
    description: "Professional sheet metal cabinet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/sheet-metal-cabinet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sheet-metal-cabinet-vadodara" />;
}
