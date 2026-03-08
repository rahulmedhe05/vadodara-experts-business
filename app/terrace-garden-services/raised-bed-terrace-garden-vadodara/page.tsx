import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("terrace-garden-services")!;

export const metadata: Metadata = {
  title: "Raised bed terrace garden in Vadodara | Terrace Garden Services | VadodaraExperts",
  description: "Professional raised bed terrace garden services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/terrace-garden-services/raised-bed-terrace-garden-vadodara" },
  openGraph: {
    title: "Raised bed terrace garden in Vadodara | VadodaraExperts",
    description: "Professional raised bed terrace garden services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/terrace-garden-services/raised-bed-terrace-garden-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="raised-bed-terrace-garden-vadodara" />;
}
