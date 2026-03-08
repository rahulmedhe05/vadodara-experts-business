import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "lifecycle assessment building in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional lifecycle assessment building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/lifecycle-assessment-building-vadodara" },
  openGraph: {
    title: "lifecycle assessment building in Vadodara | VadodaraExperts",
    description: "Professional lifecycle assessment building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/lifecycle-assessment-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lifecycle-assessment-building-vadodara" />;
}
