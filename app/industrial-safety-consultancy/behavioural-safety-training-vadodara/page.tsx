import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "behavioural safety training in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional behavioural safety training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/behavioural-safety-training-vadodara" },
  openGraph: {
    title: "behavioural safety training in Vadodara | VadodaraExperts",
    description: "Professional behavioural safety training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/behavioural-safety-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="behavioural-safety-training-vadodara" />;
}
