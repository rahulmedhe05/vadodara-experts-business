import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Conference room ceiling in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional conference room ceiling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/conference-room-ceiling-vadodara" },
  openGraph: {
    title: "Conference room ceiling in Vadodara | VadodaraExperts",
    description: "Professional conference room ceiling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/conference-room-ceiling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="conference-room-ceiling-vadodara" />;
}
