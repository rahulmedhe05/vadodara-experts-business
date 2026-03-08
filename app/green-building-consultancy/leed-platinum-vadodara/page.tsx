import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "LEED platinum in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional leed platinum services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/leed-platinum-vadodara" },
  openGraph: {
    title: "LEED platinum in Vadodara | VadodaraExperts",
    description: "Professional leed platinum services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/leed-platinum-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="leed-platinum-vadodara" />;
}
