import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Media room automation in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional media room automation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/media-room-automation-vadodara" },
  openGraph: {
    title: "Media room automation in Vadodara | VadodaraExperts",
    description: "Professional media room automation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/media-room-automation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="media-room-automation-vadodara" />;
}
