import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Old refrigerator disposal in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional old refrigerator disposal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/old-refrigerator-disposal-vadodara" },
  openGraph: {
    title: "Old refrigerator disposal in Vadodara | VadodaraExperts",
    description: "Professional old refrigerator disposal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/old-refrigerator-disposal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="old-refrigerator-disposal-vadodara" />;
}
