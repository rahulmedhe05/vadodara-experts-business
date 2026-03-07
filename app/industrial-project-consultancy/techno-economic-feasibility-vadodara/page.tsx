import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "techno economic feasibility in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional techno economic feasibility services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/techno-economic-feasibility-vadodara" },
  openGraph: {
    title: "techno economic feasibility in Vadodara | VadodaraExperts",
    description: "Professional techno economic feasibility services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/techno-economic-feasibility-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="techno-economic-feasibility-vadodara" />;
}
