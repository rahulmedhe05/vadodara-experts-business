import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "control panel box in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional control panel box services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/control-panel-box-vadodara" },
  openGraph: {
    title: "control panel box in Vadodara | VadodaraExperts",
    description: "Professional control panel box services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/control-panel-box-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="control-panel-box-vadodara" />;
}
