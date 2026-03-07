import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "water conservation building in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional water conservation building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/water-conservation-building-vadodara" },
  openGraph: {
    title: "water conservation building in Vadodara | VadodaraExperts",
    description: "Professional water conservation building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/water-conservation-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-conservation-building-vadodara" />;
}
