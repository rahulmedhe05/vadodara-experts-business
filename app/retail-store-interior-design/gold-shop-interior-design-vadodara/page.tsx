import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("retail-store-interior-design")!;

export const metadata: Metadata = {
  title: "gold shop interior design in Vadodara | Retail Store Interior Design | VadodaraExperts",
  description: "Professional gold shop interior design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/retail-store-interior-design/gold-shop-interior-design-vadodara" },
  openGraph: {
    title: "gold shop interior design in Vadodara | VadodaraExperts",
    description: "Professional gold shop interior design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/retail-store-interior-design/gold-shop-interior-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gold-shop-interior-design-vadodara" />;
}
