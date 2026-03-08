import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "height safety training in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional height safety training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/height-safety-training-vadodara" },
  openGraph: {
    title: "height safety training in Vadodara | VadodaraExperts",
    description: "Professional height safety training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/height-safety-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="height-safety-training-vadodara" />;
}
