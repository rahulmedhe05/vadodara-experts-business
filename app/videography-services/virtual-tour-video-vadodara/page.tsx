import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Virtual tour video in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional virtual tour video services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/virtual-tour-video-vadodara" },
  openGraph: {
    title: "Virtual tour video in Vadodara | VadodaraExperts",
    description: "Professional virtual tour video services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/virtual-tour-video-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="virtual-tour-video-vadodara" />;
}
