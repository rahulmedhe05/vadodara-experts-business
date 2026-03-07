import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "hospital construction PMC in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional hospital construction pmc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/hospital-construction-pmc-vadodara" },
  openGraph: {
    title: "hospital construction PMC in Vadodara | VadodaraExperts",
    description: "Professional hospital construction pmc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/hospital-construction-pmc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hospital-construction-pmc-vadodara" />;
}
