import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpet-cleaning-services")!;

export const metadata: Metadata = {
  title: "Carpet cleaning per sqft price in Vadodara | Carpet Cleaning Services | VadodaraExperts",
  description: "Professional carpet cleaning per sqft price services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpet-cleaning-services/carpet-cleaning-per-sqft-price-vadodara" },
  openGraph: {
    title: "Carpet cleaning per sqft price in Vadodara | VadodaraExperts",
    description: "Professional carpet cleaning per sqft price services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpet-cleaning-services/carpet-cleaning-per-sqft-price-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="carpet-cleaning-per-sqft-price-vadodara" />;
}
