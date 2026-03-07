import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Aerial video in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional aerial video services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/aerial-video-vadodara" },
  openGraph: {
    title: "Aerial video in Vadodara | VadodaraExperts",
    description: "Professional aerial video services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/aerial-video-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aerial-video-vadodara" />;
}
