import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "site inspection in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional site inspection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/site-inspection-vadodara" },
  openGraph: {
    title: "site inspection in Vadodara | VadodaraExperts",
    description: "Professional site inspection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/site-inspection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="site-inspection-vadodara" />;
}
