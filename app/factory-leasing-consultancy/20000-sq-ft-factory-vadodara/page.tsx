import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "20000 sq ft factory in Vadodara | Factory Leasing Consultancy | VadodaraExperts",
  description: "Professional 20000 sq ft factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-consultancy/20000-sq-ft-factory-vadodara" },
  openGraph: {
    title: "20000 sq ft factory in Vadodara | VadodaraExperts",
    description: "Professional 20000 sq ft factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-consultancy/20000-sq-ft-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="20000-sq-ft-factory-vadodara" />;
}
