import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "rainwater harvesting system in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional rainwater harvesting system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/rainwater-harvesting-system-vadodara" },
  openGraph: {
    title: "rainwater harvesting system in Vadodara | VadodaraExperts",
    description: "Professional rainwater harvesting system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/rainwater-harvesting-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rainwater-harvesting-system-vadodara" />;
}
