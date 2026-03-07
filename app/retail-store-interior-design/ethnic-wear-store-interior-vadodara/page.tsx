import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("retail-store-interior-design")!;

export const metadata: Metadata = {
  title: "ethnic wear store interior in Vadodara | Retail Store Interior Design | VadodaraExperts",
  description: "Professional ethnic wear store interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/retail-store-interior-design/ethnic-wear-store-interior-vadodara" },
  openGraph: {
    title: "ethnic wear store interior in Vadodara | VadodaraExperts",
    description: "Professional ethnic wear store interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/retail-store-interior-design/ethnic-wear-store-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ethnic-wear-store-interior-vadodara" />;
}
