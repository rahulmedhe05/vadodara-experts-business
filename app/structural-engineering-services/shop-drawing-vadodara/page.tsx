import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Shop drawing in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional shop drawing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/shop-drawing-vadodara" },
  openGraph: {
    title: "Shop drawing in Vadodara | VadodaraExperts",
    description: "Professional shop drawing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/shop-drawing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shop-drawing-vadodara" />;
}
