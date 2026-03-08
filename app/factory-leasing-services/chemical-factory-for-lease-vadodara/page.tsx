import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "chemical factory for lease in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional chemical factory for lease services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/chemical-factory-for-lease-vadodara" },
  openGraph: {
    title: "chemical factory for lease in Vadodara | VadodaraExperts",
    description: "Professional chemical factory for lease services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/chemical-factory-for-lease-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chemical-factory-for-lease-vadodara" />;
}
