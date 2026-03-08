import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Resort landscaping in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional resort landscaping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/resort-landscaping-vadodara" },
  openGraph: {
    title: "Resort landscaping in Vadodara | VadodaraExperts",
    description: "Professional resort landscaping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/resort-landscaping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="resort-landscaping-vadodara" />;
}
