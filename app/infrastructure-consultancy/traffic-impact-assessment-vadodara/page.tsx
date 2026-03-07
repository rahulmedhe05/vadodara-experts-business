import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "traffic impact assessment in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional traffic impact assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/traffic-impact-assessment-vadodara" },
  openGraph: {
    title: "traffic impact assessment in Vadodara | VadodaraExperts",
    description: "Professional traffic impact assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/traffic-impact-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="traffic-impact-assessment-vadodara" />;
}
