import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "STAAD Pro design in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional staad pro design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/staad-pro-design-vadodara" },
  openGraph: {
    title: "STAAD Pro design in Vadodara | VadodaraExperts",
    description: "Professional staad pro design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/staad-pro-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="staad-pro-design-vadodara" />;
}
