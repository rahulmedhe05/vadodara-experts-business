import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Construction site drone video in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional construction site drone video services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/construction-site-drone-video-vadodara" },
  openGraph: {
    title: "Construction site drone video in Vadodara | VadodaraExperts",
    description: "Professional construction site drone video services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/construction-site-drone-video-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-site-drone-video-vadodara" />;
}
