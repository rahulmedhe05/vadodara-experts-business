import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "quality audit construction in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional quality audit construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/quality-audit-construction-vadodara" },
  openGraph: {
    title: "quality audit construction in Vadodara | VadodaraExperts",
    description: "Professional quality audit construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/quality-audit-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="quality-audit-construction-vadodara" />;
}
