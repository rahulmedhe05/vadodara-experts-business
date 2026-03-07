import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "TV commercial production in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional tv commercial production services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/tv-commercial-production-vadodara" },
  openGraph: {
    title: "TV commercial production in Vadodara | VadodaraExperts",
    description: "Professional tv commercial production services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/tv-commercial-production-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tv-commercial-production-vadodara" />;
}
