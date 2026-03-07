import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "residential project management in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional residential project management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/residential-project-management-vadodara" },
  openGraph: {
    title: "residential project management in Vadodara | VadodaraExperts",
    description: "Professional residential project management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/residential-project-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="residential-project-management-vadodara" />;
}
