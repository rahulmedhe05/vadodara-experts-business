import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "solar building design in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional solar building design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/solar-building-design-vadodara" },
  openGraph: {
    title: "solar building design in Vadodara | VadodaraExperts",
    description: "Professional solar building design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/solar-building-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-building-design-vadodara" />;
}
