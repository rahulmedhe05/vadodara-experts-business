import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "safe bearing capacity in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional safe bearing capacity services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/safe-bearing-capacity-vadodara" },
  openGraph: {
    title: "safe bearing capacity in Vadodara | VadodaraExperts",
    description: "Professional safe bearing capacity services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/safe-bearing-capacity-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="safe-bearing-capacity-vadodara" />;
}
