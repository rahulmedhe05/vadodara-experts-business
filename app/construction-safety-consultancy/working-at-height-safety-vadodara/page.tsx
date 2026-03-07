import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "working at height safety in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional working at height safety services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/working-at-height-safety-vadodara" },
  openGraph: {
    title: "working at height safety in Vadodara | VadodaraExperts",
    description: "Professional working at height safety services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/working-at-height-safety-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="working-at-height-safety-vadodara" />;
}
