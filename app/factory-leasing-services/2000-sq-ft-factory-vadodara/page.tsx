import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "2000 sq ft factory in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional 2000 sq ft factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/2000-sq-ft-factory-vadodara" },
  openGraph: {
    title: "2000 sq ft factory in Vadodara | VadodaraExperts",
    description: "Professional 2000 sq ft factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/2000-sq-ft-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="2000-sq-ft-factory-vadodara" />;
}
