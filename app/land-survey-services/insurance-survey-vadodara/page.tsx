import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "insurance survey in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional insurance survey services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/insurance-survey-vadodara" },
  openGraph: {
    title: "insurance survey in Vadodara | VadodaraExperts",
    description: "Professional insurance survey services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/insurance-survey-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="insurance-survey-vadodara" />;
}
