import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Corporate photo services in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional corporate photo services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/corporate-photo-services-vadodara" },
  openGraph: {
    title: "Corporate photo services in Vadodara | VadodaraExperts",
    description: "Professional corporate photo services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/corporate-photo-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corporate-photo-services-vadodara" />;
}
