import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "best construction safety consultant in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional best construction safety consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/best-construction-safety-consultant-vadodara" },
  openGraph: {
    title: "best construction safety consultant in Vadodara | VadodaraExperts",
    description: "Professional best construction safety consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/best-construction-safety-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-construction-safety-consultant-vadodara" />;
}
