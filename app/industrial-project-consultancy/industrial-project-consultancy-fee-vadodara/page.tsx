import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "industrial project consultancy fee in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional industrial project consultancy fee services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/industrial-project-consultancy-fee-vadodara" },
  openGraph: {
    title: "industrial project consultancy fee in Vadodara | VadodaraExperts",
    description: "Professional industrial project consultancy fee services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/industrial-project-consultancy-fee-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-project-consultancy-fee-vadodara" />;
}
