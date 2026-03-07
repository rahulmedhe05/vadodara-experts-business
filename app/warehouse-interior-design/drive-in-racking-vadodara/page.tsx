import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "drive-in racking in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional drive-in racking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/drive-in-racking-vadodara" },
  openGraph: {
    title: "drive-in racking in Vadodara | VadodaraExperts",
    description: "Professional drive-in racking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/drive-in-racking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="drive-in-racking-vadodara" />;
}
