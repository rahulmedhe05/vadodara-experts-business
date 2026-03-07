import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Star Health agent in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional star health agent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/star-health-agent-vadodara" },
  openGraph: {
    title: "Star Health agent in Vadodara | VadodaraExperts",
    description: "Professional star health agent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/star-health-agent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="star-health-agent-vadodara" />;
}
