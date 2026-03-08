import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "safety induction training in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional safety induction training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/safety-induction-training-vadodara" },
  openGraph: {
    title: "safety induction training in Vadodara | VadodaraExperts",
    description: "Professional safety induction training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/safety-induction-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="safety-induction-training-vadodara" />;
}
