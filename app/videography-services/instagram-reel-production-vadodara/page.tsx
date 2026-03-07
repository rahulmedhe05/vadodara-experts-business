import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Instagram Reel production in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional instagram reel production services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/instagram-reel-production-vadodara" },
  openGraph: {
    title: "Instagram Reel production in Vadodara | VadodaraExperts",
    description: "Professional instagram reel production services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/instagram-reel-production-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="instagram-reel-production-vadodara" />;
}
