import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "resistance welding in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional resistance welding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/resistance-welding-vadodara" },
  openGraph: {
    title: "resistance welding in Vadodara | VadodaraExperts",
    description: "Professional resistance welding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/resistance-welding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="resistance-welding-vadodara" />;
}
