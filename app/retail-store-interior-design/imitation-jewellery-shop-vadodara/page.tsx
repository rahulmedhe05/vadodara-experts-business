import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("retail-store-interior-design")!;

export const metadata: Metadata = {
  title: "imitation jewellery shop in Vadodara | Retail Store Interior Design | VadodaraExperts",
  description: "Professional imitation jewellery shop services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/retail-store-interior-design/imitation-jewellery-shop-vadodara" },
  openGraph: {
    title: "imitation jewellery shop in Vadodara | VadodaraExperts",
    description: "Professional imitation jewellery shop services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/retail-store-interior-design/imitation-jewellery-shop-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="imitation-jewellery-shop-vadodara" />;
}
