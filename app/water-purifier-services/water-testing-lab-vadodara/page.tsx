import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Water testing lab in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional water testing lab services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/water-testing-lab-vadodara" },
  openGraph: {
    title: "Water testing lab in Vadodara | VadodaraExperts",
    description: "Professional water testing lab services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/water-testing-lab-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-testing-lab-vadodara" />;
}
