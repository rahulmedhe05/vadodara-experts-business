import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "existing building green certification in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional existing building green certification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/existing-building-green-certification-vadodara" },
  openGraph: {
    title: "existing building green certification in Vadodara | VadodaraExperts",
    description: "Professional existing building green certification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/existing-building-green-certification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="existing-building-green-certification-vadodara" />;
}
