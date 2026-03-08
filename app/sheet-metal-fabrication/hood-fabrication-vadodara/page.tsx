import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "hood fabrication in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional hood fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/hood-fabrication-vadodara" },
  openGraph: {
    title: "hood fabrication in Vadodara | VadodaraExperts",
    description: "Professional hood fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/hood-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hood-fabrication-vadodara" />;
}
