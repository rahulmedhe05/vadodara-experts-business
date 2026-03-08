import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "factory with compound wall in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional factory with compound wall services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/factory-with-compound-wall-vadodara" },
  openGraph: {
    title: "factory with compound wall in Vadodara | VadodaraExperts",
    description: "Professional factory with compound wall services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/factory-with-compound-wall-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-with-compound-wall-vadodara" />;
}
