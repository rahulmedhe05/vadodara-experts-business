import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Multi camera live stream in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional multi camera live stream services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/multi-camera-live-stream-vadodara" },
  openGraph: {
    title: "Multi camera live stream in Vadodara | VadodaraExperts",
    description: "Professional multi camera live stream services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/multi-camera-live-stream-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multi-camera-live-stream-vadodara" />;
}
