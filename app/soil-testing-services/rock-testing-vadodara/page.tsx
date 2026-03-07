import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "rock testing in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional rock testing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/rock-testing-vadodara" },
  openGraph: {
    title: "rock testing in Vadodara | VadodaraExperts",
    description: "Professional rock testing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/rock-testing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rock-testing-vadodara" />;
}
