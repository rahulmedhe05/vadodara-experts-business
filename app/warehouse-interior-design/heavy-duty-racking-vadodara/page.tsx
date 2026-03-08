import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "heavy duty racking in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional heavy duty racking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/heavy-duty-racking-vadodara" },
  openGraph: {
    title: "heavy duty racking in Vadodara | VadodaraExperts",
    description: "Professional heavy duty racking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/heavy-duty-racking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heavy-duty-racking-vadodara" />;
}
