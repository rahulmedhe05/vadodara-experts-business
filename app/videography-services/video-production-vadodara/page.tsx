import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Video production in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional video production services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/video-production-vadodara" },
  openGraph: {
    title: "Video production in Vadodara | VadodaraExperts",
    description: "Professional video production services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/video-production-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="video-production-vadodara" />;
}
