import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Corporate photography company in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional corporate photography company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/corporate-photography-company-vadodara" },
  openGraph: {
    title: "Corporate photography company in Vadodara | VadodaraExperts",
    description: "Professional corporate photography company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/corporate-photography-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corporate-photography-company-vadodara" />;
}
