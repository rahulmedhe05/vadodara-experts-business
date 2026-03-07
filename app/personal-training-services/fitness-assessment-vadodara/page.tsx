import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Fitness assessment in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional fitness assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/fitness-assessment-vadodara" },
  openGraph: {
    title: "Fitness assessment in Vadodara | VadodaraExperts",
    description: "Professional fitness assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/fitness-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fitness-assessment-vadodara" />;
}
