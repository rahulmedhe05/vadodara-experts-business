import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "process optimization consultancy in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional process optimization consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/process-optimization-consultancy-vadodara" },
  openGraph: {
    title: "process optimization consultancy in Vadodara | VadodaraExperts",
    description: "Professional process optimization consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/process-optimization-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="process-optimization-consultancy-vadodara" />;
}
