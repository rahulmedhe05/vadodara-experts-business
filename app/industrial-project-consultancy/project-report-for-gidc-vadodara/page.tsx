import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "project report for GIDC in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional project report for gidc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/project-report-for-gidc-vadodara" },
  openGraph: {
    title: "project report for GIDC in Vadodara | VadodaraExperts",
    description: "Professional project report for gidc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/project-report-for-gidc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="project-report-for-gidc-vadodara" />;
}
