import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "Kitchen trolley cleaning in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional kitchen trolley cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/kitchen-trolley-cleaning-vadodara" },
  openGraph: {
    title: "Kitchen trolley cleaning in Vadodara | VadodaraExperts",
    description: "Professional kitchen trolley cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/kitchen-trolley-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-trolley-cleaning-vadodara" />;
}
