import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "GHS classification in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional ghs classification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/ghs-classification-vadodara" },
  openGraph: {
    title: "GHS classification in Vadodara | VadodaraExperts",
    description: "Professional ghs classification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/ghs-classification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ghs-classification-vadodara" />;
}
