import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "low-e glass building in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional low-e glass building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/low-e-glass-building-vadodara" },
  openGraph: {
    title: "low-e glass building in Vadodara | VadodaraExperts",
    description: "Professional low-e glass building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/low-e-glass-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="low-e-glass-building-vadodara" />;
}
