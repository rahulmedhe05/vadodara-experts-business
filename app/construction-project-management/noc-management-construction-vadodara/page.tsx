import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "NOC management construction in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional noc management construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/noc-management-construction-vadodara" },
  openGraph: {
    title: "NOC management construction in Vadodara | VadodaraExperts",
    description: "Professional noc management construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/noc-management-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="noc-management-construction-vadodara" />;
}
