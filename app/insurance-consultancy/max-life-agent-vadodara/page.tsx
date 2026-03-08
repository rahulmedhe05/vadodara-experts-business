import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Max Life agent in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional max life agent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/max-life-agent-vadodara" },
  openGraph: {
    title: "Max Life agent in Vadodara | VadodaraExperts",
    description: "Professional max life agent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/max-life-agent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="max-life-agent-vadodara" />;
}
