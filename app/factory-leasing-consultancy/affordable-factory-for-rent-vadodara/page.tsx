import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "affordable factory for rent in Vadodara | Factory Leasing Consultancy | VadodaraExperts",
  description: "Professional affordable factory for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-consultancy/affordable-factory-for-rent-vadodara" },
  openGraph: {
    title: "affordable factory for rent in Vadodara | VadodaraExperts",
    description: "Professional affordable factory for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-consultancy/affordable-factory-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="affordable-factory-for-rent-vadodara" />;
}
