import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "TDR consultation in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional tdr consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/tdr-consultation-vadodara" },
  openGraph: {
    title: "TDR consultation in Vadodara | VadodaraExperts",
    description: "Professional tdr consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/tdr-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tdr-consultation-vadodara" />;
}
