import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "certified soil testing in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional certified soil testing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/certified-soil-testing-vadodara" },
  openGraph: {
    title: "certified soil testing in Vadodara | VadodaraExperts",
    description: "Professional certified soil testing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/certified-soil-testing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="certified-soil-testing-vadodara" />;
}
