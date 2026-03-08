import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "machine guard in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional machine guard services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/machine-guard-vadodara" },
  openGraph: {
    title: "machine guard in Vadodara | VadodaraExperts",
    description: "Professional machine guard services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/machine-guard-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="machine-guard-vadodara" />;
}
