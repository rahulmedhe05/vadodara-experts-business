import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "cost estimation in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional cost estimation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/cost-estimation-vadodara" },
  openGraph: {
    title: "cost estimation in Vadodara | VadodaraExperts",
    description: "Professional cost estimation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/cost-estimation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cost-estimation-vadodara" />;
}
