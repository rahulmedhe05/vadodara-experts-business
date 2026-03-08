import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("terrace-garden-services")!;

export const metadata: Metadata = {
  title: "Terrace garden shed in Vadodara | Terrace Garden Services | VadodaraExperts",
  description: "Professional terrace garden shed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/terrace-garden-services/terrace-garden-shed-vadodara" },
  openGraph: {
    title: "Terrace garden shed in Vadodara | VadodaraExperts",
    description: "Professional terrace garden shed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/terrace-garden-services/terrace-garden-shed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="terrace-garden-shed-vadodara" />;
}
