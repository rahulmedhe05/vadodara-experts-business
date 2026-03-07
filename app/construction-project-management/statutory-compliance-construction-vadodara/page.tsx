import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "statutory compliance construction in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional statutory compliance construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/statutory-compliance-construction-vadodara" },
  openGraph: {
    title: "statutory compliance construction in Vadodara | VadodaraExperts",
    description: "Professional statutory compliance construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/statutory-compliance-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="statutory-compliance-construction-vadodara" />;
}
