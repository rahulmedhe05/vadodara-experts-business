import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "break even analysis in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional break even analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/break-even-analysis-vadodara" },
  openGraph: {
    title: "break even analysis in Vadodara | VadodaraExperts",
    description: "Professional break even analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/break-even-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="break-even-analysis-vadodara" />;
}
