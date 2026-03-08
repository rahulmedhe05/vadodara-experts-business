import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "emergency response plan in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional emergency response plan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/emergency-response-plan-vadodara" },
  openGraph: {
    title: "emergency response plan in Vadodara | VadodaraExperts",
    description: "Professional emergency response plan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/emergency-response-plan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="emergency-response-plan-vadodara" />;
}
