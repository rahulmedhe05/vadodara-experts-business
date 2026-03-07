import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("retail-store-interior-design")!;

export const metadata: Metadata = {
  title: "footwear shop interior in Vadodara | Retail Store Interior Design | VadodaraExperts",
  description: "Professional footwear shop interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/retail-store-interior-design/footwear-shop-interior-vadodara" },
  openGraph: {
    title: "footwear shop interior in Vadodara | VadodaraExperts",
    description: "Professional footwear shop interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/retail-store-interior-design/footwear-shop-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="footwear-shop-interior-vadodara" />;
}
