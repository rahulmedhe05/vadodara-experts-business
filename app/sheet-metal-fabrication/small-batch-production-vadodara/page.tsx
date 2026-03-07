import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "small batch production in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional small batch production services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/small-batch-production-vadodara" },
  openGraph: {
    title: "small batch production in Vadodara | VadodaraExperts",
    description: "Professional small batch production services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/small-batch-production-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="small-batch-production-vadodara" />;
}
