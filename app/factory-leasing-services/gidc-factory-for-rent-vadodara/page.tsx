import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "GIDC factory for rent in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional gidc factory for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/gidc-factory-for-rent-vadodara" },
  openGraph: {
    title: "GIDC factory for rent in Vadodara | VadodaraExperts",
    description: "Professional gidc factory for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/gidc-factory-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gidc-factory-for-rent-vadodara" />;
}
