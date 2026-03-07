import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "MS sheet metal work in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional ms sheet metal work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/ms-sheet-metal-work-vadodara" },
  openGraph: {
    title: "MS sheet metal work in Vadodara | VadodaraExperts",
    description: "Professional ms sheet metal work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/ms-sheet-metal-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ms-sheet-metal-work-vadodara" />;
}
