import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "steel structure shed for rent in Vadodara | Factory Leasing Consultancy | VadodaraExperts",
  description: "Professional steel structure shed for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-consultancy/steel-structure-shed-for-rent-vadodara" },
  openGraph: {
    title: "steel structure shed for rent in Vadodara | VadodaraExperts",
    description: "Professional steel structure shed for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-consultancy/steel-structure-shed-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steel-structure-shed-for-rent-vadodara" />;
}
