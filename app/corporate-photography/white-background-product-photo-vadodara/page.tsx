import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "White background product photo in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional white background product photo services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/white-background-product-photo-vadodara" },
  openGraph: {
    title: "White background product photo in Vadodara | VadodaraExperts",
    description: "Professional white background product photo services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/white-background-product-photo-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="white-background-product-photo-vadodara" />;
}
