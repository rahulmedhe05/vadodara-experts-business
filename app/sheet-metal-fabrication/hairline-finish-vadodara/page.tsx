import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "hairline finish in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional hairline finish services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/hairline-finish-vadodara" },
  openGraph: {
    title: "hairline finish in Vadodara | VadodaraExperts",
    description: "Professional hairline finish services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/hairline-finish-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hairline-finish-vadodara" />;
}
