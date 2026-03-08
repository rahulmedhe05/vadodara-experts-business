import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "passive cooling design in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional passive cooling design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/passive-cooling-design-vadodara" },
  openGraph: {
    title: "passive cooling design in Vadodara | VadodaraExperts",
    description: "Professional passive cooling design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/passive-cooling-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="passive-cooling-design-vadodara" />;
}
