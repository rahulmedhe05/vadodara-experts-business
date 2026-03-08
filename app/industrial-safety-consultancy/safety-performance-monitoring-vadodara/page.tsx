import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "safety performance monitoring in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional safety performance monitoring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/safety-performance-monitoring-vadodara" },
  openGraph: {
    title: "safety performance monitoring in Vadodara | VadodaraExperts",
    description: "Professional safety performance monitoring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/safety-performance-monitoring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="safety-performance-monitoring-vadodara" />;
}
