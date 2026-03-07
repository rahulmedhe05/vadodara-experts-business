import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "off-site emergency plan in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional off-site emergency plan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/off-site-emergency-plan-vadodara" },
  openGraph: {
    title: "off-site emergency plan in Vadodara | VadodaraExperts",
    description: "Professional off-site emergency plan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/off-site-emergency-plan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="off-site-emergency-plan-vadodara" />;
}
