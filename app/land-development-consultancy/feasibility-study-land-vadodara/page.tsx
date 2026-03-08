import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "feasibility study land in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional feasibility study land services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/feasibility-study-land-vadodara" },
  openGraph: {
    title: "feasibility study land in Vadodara | VadodaraExperts",
    description: "Professional feasibility study land services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/feasibility-study-land-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="feasibility-study-land-vadodara" />;
}
