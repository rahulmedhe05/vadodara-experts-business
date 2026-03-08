import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Photography studio rental in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional photography studio rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/photography-studio-rental-vadodara" },
  openGraph: {
    title: "Photography studio rental in Vadodara | VadodaraExperts",
    description: "Professional photography studio rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/photography-studio-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="photography-studio-rental-vadodara" />;
}
