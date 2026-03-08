import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Cultural event videography in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional cultural event videography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/cultural-event-videography-vadodara" },
  openGraph: {
    title: "Cultural event videography in Vadodara | VadodaraExperts",
    description: "Professional cultural event videography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/cultural-event-videography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cultural-event-videography-vadodara" />;
}
