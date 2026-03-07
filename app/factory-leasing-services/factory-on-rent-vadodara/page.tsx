import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "factory on rent in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional factory on rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/factory-on-rent-vadodara" },
  openGraph: {
    title: "factory on rent in Vadodara | VadodaraExperts",
    description: "Professional factory on rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/factory-on-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-on-rent-vadodara" />;
}
