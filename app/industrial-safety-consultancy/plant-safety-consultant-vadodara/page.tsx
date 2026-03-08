import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "plant safety consultant in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional plant safety consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/plant-safety-consultant-vadodara" },
  openGraph: {
    title: "plant safety consultant in Vadodara | VadodaraExperts",
    description: "Professional plant safety consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/plant-safety-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plant-safety-consultant-vadodara" />;
}
