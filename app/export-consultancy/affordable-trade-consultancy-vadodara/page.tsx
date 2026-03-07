import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Affordable trade consultancy in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional affordable trade consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/affordable-trade-consultancy-vadodara" },
  openGraph: {
    title: "Affordable trade consultancy in Vadodara | VadodaraExperts",
    description: "Professional affordable trade consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/affordable-trade-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="affordable-trade-consultancy-vadodara" />;
}
