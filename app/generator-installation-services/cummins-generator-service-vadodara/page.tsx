import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Cummins generator service in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional cummins generator service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/cummins-generator-service-vadodara" },
  openGraph: {
    title: "Cummins generator service in Vadodara | VadodaraExperts",
    description: "Professional cummins generator service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/cummins-generator-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cummins-generator-service-vadodara" />;
}
