import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Cover meter survey in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional cover meter survey services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/cover-meter-survey-vadodara" },
  openGraph: {
    title: "Cover meter survey in Vadodara | VadodaraExperts",
    description: "Professional cover meter survey services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/cover-meter-survey-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cover-meter-survey-vadodara" />;
}
