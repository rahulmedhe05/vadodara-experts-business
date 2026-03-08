import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "specific gravity of soil in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional specific gravity of soil services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/specific-gravity-of-soil-vadodara" },
  openGraph: {
    title: "specific gravity of soil in Vadodara | VadodaraExperts",
    description: "Professional specific gravity of soil services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/specific-gravity-of-soil-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="specific-gravity-of-soil-vadodara" />;
}
