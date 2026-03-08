import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "capital expenditure planning in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional capital expenditure planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/capital-expenditure-planning-vadodara" },
  openGraph: {
    title: "capital expenditure planning in Vadodara | VadodaraExperts",
    description: "Professional capital expenditure planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/capital-expenditure-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="capital-expenditure-planning-vadodara" />;
}
