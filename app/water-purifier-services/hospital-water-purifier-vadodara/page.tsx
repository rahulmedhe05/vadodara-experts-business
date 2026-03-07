import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Hospital water purifier in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional hospital water purifier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/hospital-water-purifier-vadodara" },
  openGraph: {
    title: "Hospital water purifier in Vadodara | VadodaraExperts",
    description: "Professional hospital water purifier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/hospital-water-purifier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hospital-water-purifier-vadodara" />;
}
