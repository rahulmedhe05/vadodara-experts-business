import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "factory leasing consultancy in Vadodara | Factory Leasing Consultancy | VadodaraExperts",
  description: "Professional factory leasing consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-consultancy/factory-leasing-consultancy-vadodara" },
  openGraph: {
    title: "factory leasing consultancy in Vadodara | VadodaraExperts",
    description: "Professional factory leasing consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-consultancy/factory-leasing-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-leasing-consultancy-vadodara" />;
}
