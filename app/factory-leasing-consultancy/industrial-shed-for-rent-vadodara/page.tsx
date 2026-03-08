import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "industrial shed for rent in Vadodara | Factory Leasing Consultancy | VadodaraExperts",
  description: "Professional industrial shed for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-consultancy/industrial-shed-for-rent-vadodara" },
  openGraph: {
    title: "industrial shed for rent in Vadodara | VadodaraExperts",
    description: "Professional industrial shed for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-consultancy/industrial-shed-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-shed-for-rent-vadodara" />;
}
