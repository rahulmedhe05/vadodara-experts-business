import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "capital subsidy consultancy in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional capital subsidy consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/capital-subsidy-consultancy-vadodara" },
  openGraph: {
    title: "capital subsidy consultancy in Vadodara | VadodaraExperts",
    description: "Professional capital subsidy consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/capital-subsidy-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="capital-subsidy-consultancy-vadodara" />;
}
