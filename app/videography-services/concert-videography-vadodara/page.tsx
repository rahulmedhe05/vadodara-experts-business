import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Concert videography in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional concert videography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/concert-videography-vadodara" },
  openGraph: {
    title: "Concert videography in Vadodara | VadodaraExperts",
    description: "Professional concert videography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/concert-videography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="concert-videography-vadodara" />;
}
