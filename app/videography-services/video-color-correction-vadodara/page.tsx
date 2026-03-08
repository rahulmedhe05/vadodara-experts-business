import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Video color correction in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional video color correction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/video-color-correction-vadodara" },
  openGraph: {
    title: "Video color correction in Vadodara | VadodaraExperts",
    description: "Professional video color correction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/video-color-correction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="video-color-correction-vadodara" />;
}
