import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("retail-store-interior-design")!;

export const metadata: Metadata = {
  title: "car showroom design in Vadodara | Retail Store Interior Design | VadodaraExperts",
  description: "Professional car showroom design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/retail-store-interior-design/car-showroom-design-vadodara" },
  openGraph: {
    title: "car showroom design in Vadodara | VadodaraExperts",
    description: "Professional car showroom design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/retail-store-interior-design/car-showroom-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="car-showroom-design-vadodara" />;
}
