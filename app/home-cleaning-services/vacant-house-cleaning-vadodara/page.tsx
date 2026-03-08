import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "Vacant house cleaning in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional vacant house cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/vacant-house-cleaning-vadodara" },
  openGraph: {
    title: "Vacant house cleaning in Vadodara | VadodaraExperts",
    description: "Professional vacant house cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/vacant-house-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vacant-house-cleaning-vadodara" />;
}
