import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Recruitment video in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional recruitment video services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/recruitment-video-vadodara" },
  openGraph: {
    title: "Recruitment video in Vadodara | VadodaraExperts",
    description: "Professional recruitment video services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/recruitment-video-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="recruitment-video-vadodara" />;
}
