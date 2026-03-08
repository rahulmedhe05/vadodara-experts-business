import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "PMC services in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional pmc services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/pmc-services-vadodara" },
  openGraph: {
    title: "PMC services in Vadodara | VadodaraExperts",
    description: "Professional pmc services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/pmc-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pmc-services-vadodara" />;
}
