import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "project scheduling consultancy in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional project scheduling consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/project-scheduling-consultancy-vadodara" },
  openGraph: {
    title: "project scheduling consultancy in Vadodara | VadodaraExperts",
    description: "Professional project scheduling consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/project-scheduling-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="project-scheduling-consultancy-vadodara" />;
}
