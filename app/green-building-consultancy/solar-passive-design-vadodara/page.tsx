import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "solar passive design in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional solar passive design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/solar-passive-design-vadodara" },
  openGraph: {
    title: "solar passive design in Vadodara | VadodaraExperts",
    description: "Professional solar passive design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/solar-passive-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-passive-design-vadodara" />;
}
