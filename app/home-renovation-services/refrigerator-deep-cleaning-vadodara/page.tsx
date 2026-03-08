import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Refrigerator deep cleaning in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional refrigerator deep cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/refrigerator-deep-cleaning-vadodara" },
  openGraph: {
    title: "Refrigerator deep cleaning in Vadodara | VadodaraExperts",
    description: "Professional refrigerator deep cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/refrigerator-deep-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="refrigerator-deep-cleaning-vadodara" />;
}
