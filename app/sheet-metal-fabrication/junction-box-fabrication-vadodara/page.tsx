import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "junction box fabrication in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional junction box fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/junction-box-fabrication-vadodara" },
  openGraph: {
    title: "junction box fabrication in Vadodara | VadodaraExperts",
    description: "Professional junction box fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/junction-box-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="junction-box-fabrication-vadodara" />;
}
