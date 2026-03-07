import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "third party inspection in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional third party inspection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/third-party-inspection-vadodara" },
  openGraph: {
    title: "third party inspection in Vadodara | VadodaraExperts",
    description: "Professional third party inspection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/third-party-inspection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="third-party-inspection-vadodara" />;
}
