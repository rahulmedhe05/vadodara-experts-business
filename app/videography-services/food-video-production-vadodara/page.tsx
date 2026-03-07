import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Food video production in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional food video production services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/food-video-production-vadodara" },
  openGraph: {
    title: "Food video production in Vadodara | VadodaraExperts",
    description: "Professional food video production services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/food-video-production-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="food-video-production-vadodara" />;
}
