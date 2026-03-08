import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "construction material management in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional construction material management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/construction-material-management-vadodara" },
  openGraph: {
    title: "construction material management in Vadodara | VadodaraExperts",
    description: "Professional construction material management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/construction-material-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-material-management-vadodara" />;
}
