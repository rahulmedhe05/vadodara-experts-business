import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "SF6 circuit breaker in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional sf6 circuit breaker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/sf6-circuit-breaker-vadodara" },
  openGraph: {
    title: "SF6 circuit breaker in Vadodara | VadodaraExperts",
    description: "Professional sf6 circuit breaker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/sf6-circuit-breaker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sf6-circuit-breaker-vadodara" />;
}
