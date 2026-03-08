import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Second hand refrigerator in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional second hand refrigerator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/second-hand-refrigerator-vadodara" },
  openGraph: {
    title: "Second hand refrigerator in Vadodara | VadodaraExperts",
    description: "Professional second hand refrigerator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/second-hand-refrigerator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="second-hand-refrigerator-vadodara" />;
}
