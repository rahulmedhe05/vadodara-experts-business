import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "construction claims management in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional construction claims management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/construction-claims-management-vadodara" },
  openGraph: {
    title: "construction claims management in Vadodara | VadodaraExperts",
    description: "Professional construction claims management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/construction-claims-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-claims-management-vadodara" />;
}
