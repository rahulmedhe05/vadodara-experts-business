import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "Cleaning services AMC in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional cleaning services amc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/cleaning-services-amc-vadodara" },
  openGraph: {
    title: "Cleaning services AMC in Vadodara | VadodaraExperts",
    description: "Professional cleaning services amc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/cleaning-services-amc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cleaning-services-amc-vadodara" />;
}
