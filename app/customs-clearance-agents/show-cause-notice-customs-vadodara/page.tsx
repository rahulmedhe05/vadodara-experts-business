import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Show cause notice customs in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional show cause notice customs services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/show-cause-notice-customs-vadodara" },
  openGraph: {
    title: "Show cause notice customs in Vadodara | VadodaraExperts",
    description: "Professional show cause notice customs services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/show-cause-notice-customs-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="show-cause-notice-customs-vadodara" />;
}
