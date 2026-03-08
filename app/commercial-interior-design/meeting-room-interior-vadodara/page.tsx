import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-interior-design")!;

export const metadata: Metadata = {
  title: "meeting room interior in Vadodara | Commercial Interior Design | VadodaraExperts",
  description: "Professional meeting room interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-interior-design/meeting-room-interior-vadodara" },
  openGraph: {
    title: "meeting room interior in Vadodara | VadodaraExperts",
    description: "Professional meeting room interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-interior-design/meeting-room-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="meeting-room-interior-vadodara" />;
}
