import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "progressive stamping in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional progressive stamping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/progressive-stamping-vadodara" },
  openGraph: {
    title: "progressive stamping in Vadodara | VadodaraExperts",
    description: "Professional progressive stamping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/progressive-stamping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="progressive-stamping-vadodara" />;
}
