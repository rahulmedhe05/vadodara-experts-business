import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "IAQ monitoring in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional iaq monitoring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/iaq-monitoring-vadodara" },
  openGraph: {
    title: "IAQ monitoring in Vadodara | VadodaraExperts",
    description: "Professional iaq monitoring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/iaq-monitoring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="iaq-monitoring-vadodara" />;
}
