import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Whole house water filter in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional whole house water filter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/whole-house-water-filter-vadodara" },
  openGraph: {
    title: "Whole house water filter in Vadodara | VadodaraExperts",
    description: "Professional whole house water filter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/whole-house-water-filter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="whole-house-water-filter-vadodara" />;
}
