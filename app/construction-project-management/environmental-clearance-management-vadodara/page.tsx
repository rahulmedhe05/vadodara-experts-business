import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "environmental clearance management in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional environmental clearance management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/environmental-clearance-management-vadodara" },
  openGraph: {
    title: "environmental clearance management in Vadodara | VadodaraExperts",
    description: "Professional environmental clearance management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/environmental-clearance-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="environmental-clearance-management-vadodara" />;
}
