import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "project viability land in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional project viability land services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/project-viability-land-vadodara" },
  openGraph: {
    title: "project viability land in Vadodara | VadodaraExperts",
    description: "Professional project viability land services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/project-viability-land-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="project-viability-land-vadodara" />;
}
