import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Video production company in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional video production company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/video-production-company-vadodara" },
  openGraph: {
    title: "Video production company in Vadodara | VadodaraExperts",
    description: "Professional video production company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/video-production-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="video-production-company-vadodara" />;
}
