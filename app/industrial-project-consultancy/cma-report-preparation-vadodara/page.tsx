import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "CMA report preparation in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional cma report preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/cma-report-preparation-vadodara" },
  openGraph: {
    title: "CMA report preparation in Vadodara | VadodaraExperts",
    description: "Professional cma report preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/cma-report-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cma-report-preparation-vadodara" />;
}
