import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "fire hose reel in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional fire hose reel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/fire-hose-reel-vadodara" },
  openGraph: {
    title: "fire hose reel in Vadodara | VadodaraExperts",
    description: "Professional fire hose reel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/fire-hose-reel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-hose-reel-vadodara" />;
}
