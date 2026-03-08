import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "infrastructure cost estimation in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional infrastructure cost estimation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/infrastructure-cost-estimation-vadodara" },
  openGraph: {
    title: "infrastructure cost estimation in Vadodara | VadodaraExperts",
    description: "Professional infrastructure cost estimation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/infrastructure-cost-estimation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="infrastructure-cost-estimation-vadodara" />;
}
