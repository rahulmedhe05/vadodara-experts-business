import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "powder coating sheet metal in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional powder coating sheet metal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/powder-coating-sheet-metal-vadodara" },
  openGraph: {
    title: "powder coating sheet metal in Vadodara | VadodaraExperts",
    description: "Professional powder coating sheet metal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/powder-coating-sheet-metal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="powder-coating-sheet-metal-vadodara" />;
}
