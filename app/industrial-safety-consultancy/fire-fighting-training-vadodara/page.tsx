import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "fire fighting training in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional fire fighting training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/fire-fighting-training-vadodara" },
  openGraph: {
    title: "fire fighting training in Vadodara | VadodaraExperts",
    description: "Professional fire fighting training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/fire-fighting-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-fighting-training-vadodara" />;
}
