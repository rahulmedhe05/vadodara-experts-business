import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Unboxing video in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional unboxing video services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/unboxing-video-vadodara" },
  openGraph: {
    title: "Unboxing video in Vadodara | VadodaraExperts",
    description: "Professional unboxing video services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/unboxing-video-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="unboxing-video-vadodara" />;
}
