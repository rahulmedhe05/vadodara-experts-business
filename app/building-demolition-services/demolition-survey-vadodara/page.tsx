import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "demolition survey in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional demolition survey services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/demolition-survey-vadodara" },
  openGraph: {
    title: "demolition survey in Vadodara | VadodaraExperts",
    description: "Professional demolition survey services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/demolition-survey-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="demolition-survey-vadodara" />;
}
