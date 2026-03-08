import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Product animation in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional product animation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/product-animation-vadodara" },
  openGraph: {
    title: "Product animation in Vadodara | VadodaraExperts",
    description: "Professional product animation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/product-animation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="product-animation-vadodara" />;
}
