import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "factory legal verification in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional factory legal verification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/factory-legal-verification-vadodara" },
  openGraph: {
    title: "factory legal verification in Vadodara | VadodaraExperts",
    description: "Professional factory legal verification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/factory-legal-verification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-legal-verification-vadodara" />;
}
