import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "carbon footprint reduction in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional carbon footprint reduction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/carbon-footprint-reduction-vadodara" },
  openGraph: {
    title: "carbon footprint reduction in Vadodara | VadodaraExperts",
    description: "Professional carbon footprint reduction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/carbon-footprint-reduction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="carbon-footprint-reduction-vadodara" />;
}
