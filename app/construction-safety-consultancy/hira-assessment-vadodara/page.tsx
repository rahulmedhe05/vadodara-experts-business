import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "HIRA assessment in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional hira assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/hira-assessment-vadodara" },
  openGraph: {
    title: "HIRA assessment in Vadodara | VadodaraExperts",
    description: "Professional hira assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/hira-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hira-assessment-vadodara" />;
}
