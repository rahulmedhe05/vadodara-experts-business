import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "factory leasing cost in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional factory leasing cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/factory-leasing-cost-vadodara" },
  openGraph: {
    title: "factory leasing cost in Vadodara | VadodaraExperts",
    description: "Professional factory leasing cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/factory-leasing-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-leasing-cost-vadodara" />;
}
