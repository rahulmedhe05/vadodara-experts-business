import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "HVAC energy optimization in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional hvac energy optimization services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/hvac-energy-optimization-vadodara" },
  openGraph: {
    title: "HVAC energy optimization in Vadodara | VadodaraExperts",
    description: "Professional hvac energy optimization services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/hvac-energy-optimization-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hvac-energy-optimization-vadodara" />;
}
