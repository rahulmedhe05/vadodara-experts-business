import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "direct shear test in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional direct shear test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/direct-shear-test-vadodara" },
  openGraph: {
    title: "direct shear test in Vadodara | VadodaraExperts",
    description: "Professional direct shear test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/direct-shear-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="direct-shear-test-vadodara" />;
}
