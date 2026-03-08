import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "Manjusar GIDC factory in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional manjusar gidc factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/manjusar-gidc-factory-vadodara" },
  openGraph: {
    title: "Manjusar GIDC factory in Vadodara | VadodaraExperts",
    description: "Professional manjusar gidc factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/manjusar-gidc-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="manjusar-gidc-factory-vadodara" />;
}
