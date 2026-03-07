import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Gimbal wedding video in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional gimbal wedding video services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/gimbal-wedding-video-vadodara" },
  openGraph: {
    title: "Gimbal wedding video in Vadodara | VadodaraExperts",
    description: "Professional gimbal wedding video services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/gimbal-wedding-video-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gimbal-wedding-video-vadodara" />;
}
