import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "vacuum circuit breaker in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional vacuum circuit breaker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/vacuum-circuit-breaker-vadodara" },
  openGraph: {
    title: "vacuum circuit breaker in Vadodara | VadodaraExperts",
    description: "Professional vacuum circuit breaker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/vacuum-circuit-breaker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vacuum-circuit-breaker-vadodara" />;
}
