import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "working capital assessment in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional working capital assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/working-capital-assessment-vadodara" },
  openGraph: {
    title: "working capital assessment in Vadodara | VadodaraExperts",
    description: "Professional working capital assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/working-capital-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="working-capital-assessment-vadodara" />;
}
