import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "factory space for rent in Vadodara | Factory Leasing Consultancy | VadodaraExperts",
  description: "Professional factory space for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-consultancy/factory-space-for-rent-vadodara" },
  openGraph: {
    title: "factory space for rent in Vadodara | VadodaraExperts",
    description: "Professional factory space for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-consultancy/factory-space-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-space-for-rent-vadodara" />;
}
