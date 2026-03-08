import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Hybrid event streaming in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional hybrid event streaming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/hybrid-event-streaming-vadodara" },
  openGraph: {
    title: "Hybrid event streaming in Vadodara | VadodaraExperts",
    description: "Professional hybrid event streaming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/hybrid-event-streaming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hybrid-event-streaming-vadodara" />;
}
