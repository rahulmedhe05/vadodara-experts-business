import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pre-wedding-photography")!;

export const metadata: Metadata = {
  title: "Drone pre wedding video in Vadodara | Pre-Wedding Photography | VadodaraExperts",
  description: "Professional drone pre wedding video services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pre-wedding-photography/drone-pre-wedding-video-vadodara" },
  openGraph: {
    title: "Drone pre wedding video in Vadodara | VadodaraExperts",
    description: "Professional drone pre wedding video services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pre-wedding-photography/drone-pre-wedding-video-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="drone-pre-wedding-video-vadodara" />;
}
