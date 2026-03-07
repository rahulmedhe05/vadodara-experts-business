import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "RERA approved project in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional rera approved project services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/rera-approved-project-vadodara" },
  openGraph: {
    title: "RERA approved project in Vadodara | VadodaraExperts",
    description: "Professional rera approved project services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/rera-approved-project-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rera-approved-project-vadodara" />;
}
