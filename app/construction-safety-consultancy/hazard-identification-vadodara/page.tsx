import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "hazard identification in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional hazard identification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/hazard-identification-vadodara" },
  openGraph: {
    title: "hazard identification in Vadodara | VadodaraExperts",
    description: "Professional hazard identification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/hazard-identification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hazard-identification-vadodara" />;
}
