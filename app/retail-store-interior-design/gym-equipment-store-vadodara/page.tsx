import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("retail-store-interior-design")!;

export const metadata: Metadata = {
  title: "gym equipment store in Vadodara | Retail Store Interior Design | VadodaraExperts",
  description: "Professional gym equipment store services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/retail-store-interior-design/gym-equipment-store-vadodara" },
  openGraph: {
    title: "gym equipment store in Vadodara | VadodaraExperts",
    description: "Professional gym equipment store services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/retail-store-interior-design/gym-equipment-store-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gym-equipment-store-vadodara" />;
}
