import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "title clearance certificate in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional title clearance certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/title-clearance-certificate-vadodara" },
  openGraph: {
    title: "title clearance certificate in Vadodara | VadodaraExperts",
    description: "Professional title clearance certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/title-clearance-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="title-clearance-certificate-vadodara" />;
}
