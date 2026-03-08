import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "School water purifier in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional school water purifier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/school-water-purifier-vadodara" },
  openGraph: {
    title: "School water purifier in Vadodara | VadodaraExperts",
    description: "Professional school water purifier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/school-water-purifier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="school-water-purifier-vadodara" />;
}
