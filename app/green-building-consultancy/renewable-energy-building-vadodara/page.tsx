import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "renewable energy building in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional renewable energy building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/renewable-energy-building-vadodara" },
  openGraph: {
    title: "renewable energy building in Vadodara | VadodaraExperts",
    description: "Professional renewable energy building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/renewable-energy-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="renewable-energy-building-vadodara" />;
}
