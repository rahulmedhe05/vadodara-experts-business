import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "5 acre factory in Vadodara | Factory Leasing Consultancy | VadodaraExperts",
  description: "Professional 5 acre factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-consultancy/5-acre-factory-vadodara" },
  openGraph: {
    title: "5 acre factory in Vadodara | VadodaraExperts",
    description: "Professional 5 acre factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-consultancy/5-acre-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="5-acre-factory-vadodara" />;
}
