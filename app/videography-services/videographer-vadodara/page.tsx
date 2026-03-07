import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Videographer in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional videographer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/videographer-vadodara" },
  openGraph: {
    title: "Videographer in Vadodara | VadodaraExperts",
    description: "Professional videographer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/videographer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="videographer-vadodara" />;
}
