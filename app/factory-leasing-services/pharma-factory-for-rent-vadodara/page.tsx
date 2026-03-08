import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "pharma factory for rent in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional pharma factory for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/pharma-factory-for-rent-vadodara" },
  openGraph: {
    title: "pharma factory for rent in Vadodara | VadodaraExperts",
    description: "Professional pharma factory for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/pharma-factory-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pharma-factory-for-rent-vadodara" />;
}
