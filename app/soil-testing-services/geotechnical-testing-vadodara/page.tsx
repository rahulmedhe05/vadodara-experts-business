import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "geotechnical testing in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional geotechnical testing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/geotechnical-testing-vadodara" },
  openGraph: {
    title: "geotechnical testing in Vadodara | VadodaraExperts",
    description: "Professional geotechnical testing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/geotechnical-testing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="geotechnical-testing-vadodara" />;
}
