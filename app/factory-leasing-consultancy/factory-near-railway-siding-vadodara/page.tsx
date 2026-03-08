import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "factory near railway siding in Vadodara | Factory Leasing Consultancy | VadodaraExperts",
  description: "Professional factory near railway siding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-consultancy/factory-near-railway-siding-vadodara" },
  openGraph: {
    title: "factory near railway siding in Vadodara | VadodaraExperts",
    description: "Professional factory near railway siding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-consultancy/factory-near-railway-siding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-near-railway-siding-vadodara" />;
}
