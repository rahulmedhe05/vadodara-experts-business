import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "factory dealer in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional factory dealer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/factory-dealer-vadodara" },
  openGraph: {
    title: "factory dealer in Vadodara | VadodaraExperts",
    description: "Professional factory dealer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/factory-dealer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-dealer-vadodara" />;
}
