import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "mock drill in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional mock drill services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/mock-drill-vadodara" },
  openGraph: {
    title: "mock drill in Vadodara | VadodaraExperts",
    description: "Professional mock drill services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/mock-drill-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mock-drill-vadodara" />;
}
