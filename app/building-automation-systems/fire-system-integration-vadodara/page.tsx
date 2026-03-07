import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "fire system integration in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional fire system integration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/fire-system-integration-vadodara" },
  openGraph: {
    title: "fire system integration in Vadodara | VadodaraExperts",
    description: "Professional fire system integration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/fire-system-integration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-system-integration-vadodara" />;
}
