import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Scalp analysis in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional scalp analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/scalp-analysis-vadodara" },
  openGraph: {
    title: "Scalp analysis in Vadodara | VadodaraExperts",
    description: "Professional scalp analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/scalp-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scalp-analysis-vadodara" />;
}
