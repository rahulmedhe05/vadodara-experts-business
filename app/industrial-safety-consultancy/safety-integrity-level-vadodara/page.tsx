import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "safety integrity level in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional safety integrity level services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/safety-integrity-level-vadodara" },
  openGraph: {
    title: "safety integrity level in Vadodara | VadodaraExperts",
    description: "Professional safety integrity level services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/safety-integrity-level-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="safety-integrity-level-vadodara" />;
}
