import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "project report for MSME in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional project report for msme services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/project-report-for-msme-vadodara" },
  openGraph: {
    title: "project report for MSME in Vadodara | VadodaraExperts",
    description: "Professional project report for msme services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/project-report-for-msme-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="project-report-for-msme-vadodara" />;
}
