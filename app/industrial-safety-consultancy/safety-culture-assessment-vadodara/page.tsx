import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "safety culture assessment in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional safety culture assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/safety-culture-assessment-vadodara" },
  openGraph: {
    title: "safety culture assessment in Vadodara | VadodaraExperts",
    description: "Professional safety culture assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/safety-culture-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="safety-culture-assessment-vadodara" />;
}
