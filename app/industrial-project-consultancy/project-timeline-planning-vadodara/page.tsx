import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "project timeline planning in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional project timeline planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/project-timeline-planning-vadodara" },
  openGraph: {
    title: "project timeline planning in Vadodara | VadodaraExperts",
    description: "Professional project timeline planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/project-timeline-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="project-timeline-planning-vadodara" />;
}
