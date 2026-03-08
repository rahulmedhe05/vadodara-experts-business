import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "box bending in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional box bending services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/box-bending-vadodara" },
  openGraph: {
    title: "box bending in Vadodara | VadodaraExperts",
    description: "Professional box bending services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/box-bending-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="box-bending-vadodara" />;
}
