import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("terrace-garden-services")!;

export const metadata: Metadata = {
  title: "Terrace wall washer light in Vadodara | Terrace Garden Services | VadodaraExperts",
  description: "Professional terrace wall washer light services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/terrace-garden-services/terrace-wall-washer-light-vadodara" },
  openGraph: {
    title: "Terrace wall washer light in Vadodara | VadodaraExperts",
    description: "Professional terrace wall washer light services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/terrace-garden-services/terrace-wall-washer-light-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="terrace-wall-washer-light-vadodara" />;
}
