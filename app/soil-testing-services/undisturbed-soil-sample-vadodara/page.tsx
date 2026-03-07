import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "undisturbed soil sample in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional undisturbed soil sample services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/undisturbed-soil-sample-vadodara" },
  openGraph: {
    title: "undisturbed soil sample in Vadodara | VadodaraExperts",
    description: "Professional undisturbed soil sample services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/undisturbed-soil-sample-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="undisturbed-soil-sample-vadodara" />;
}
