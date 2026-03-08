import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "living wall design in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional living wall design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/living-wall-design-vadodara" },
  openGraph: {
    title: "living wall design in Vadodara | VadodaraExperts",
    description: "Professional living wall design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/living-wall-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="living-wall-design-vadodara" />;
}
