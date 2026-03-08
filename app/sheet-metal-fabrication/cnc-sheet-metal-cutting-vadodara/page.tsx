import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "CNC sheet metal cutting in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional cnc sheet metal cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/cnc-sheet-metal-cutting-vadodara" },
  openGraph: {
    title: "CNC sheet metal cutting in Vadodara | VadodaraExperts",
    description: "Professional cnc sheet metal cutting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/cnc-sheet-metal-cutting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cnc-sheet-metal-cutting-vadodara" />;
}
