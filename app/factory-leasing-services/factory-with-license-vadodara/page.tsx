import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "factory with license in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional factory with license services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/factory-with-license-vadodara" },
  openGraph: {
    title: "factory with license in Vadodara | VadodaraExperts",
    description: "Professional factory with license services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/factory-with-license-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-with-license-vadodara" />;
}
