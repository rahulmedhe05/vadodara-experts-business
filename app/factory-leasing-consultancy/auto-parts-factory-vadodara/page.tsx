import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "auto parts factory in Vadodara | Factory Leasing Consultancy | VadodaraExperts",
  description: "Professional auto parts factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-consultancy/auto-parts-factory-vadodara" },
  openGraph: {
    title: "auto parts factory in Vadodara | VadodaraExperts",
    description: "Professional auto parts factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-consultancy/auto-parts-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="auto-parts-factory-vadodara" />;
}
