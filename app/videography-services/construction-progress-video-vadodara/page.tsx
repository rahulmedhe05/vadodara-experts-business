import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Construction progress video in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional construction progress video services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/construction-progress-video-vadodara" },
  openGraph: {
    title: "Construction progress video in Vadodara | VadodaraExperts",
    description: "Professional construction progress video services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/construction-progress-video-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-progress-video-vadodara" />;
}
