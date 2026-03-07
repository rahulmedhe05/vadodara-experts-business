import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "health and safety plan in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional health and safety plan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/health-and-safety-plan-vadodara" },
  openGraph: {
    title: "health and safety plan in Vadodara | VadodaraExperts",
    description: "Professional health and safety plan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/health-and-safety-plan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="health-and-safety-plan-vadodara" />;
}
