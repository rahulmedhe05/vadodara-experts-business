import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "Safety training in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional safety training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/safety-training-vadodara" },
  openGraph: {
    title: "Safety training in Vadodara | VadodaraExperts",
    description: "Professional safety training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/safety-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="safety-training-vadodara" />;
}
