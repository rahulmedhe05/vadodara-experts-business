import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "emergency evacuation plan in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional emergency evacuation plan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/emergency-evacuation-plan-vadodara" },
  openGraph: {
    title: "emergency evacuation plan in Vadodara | VadodaraExperts",
    description: "Professional emergency evacuation plan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/emergency-evacuation-plan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="emergency-evacuation-plan-vadodara" />;
}
