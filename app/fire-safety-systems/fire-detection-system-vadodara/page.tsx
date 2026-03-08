import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "fire detection system in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional fire detection system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/fire-detection-system-vadodara" },
  openGraph: {
    title: "fire detection system in Vadodara | VadodaraExperts",
    description: "Professional fire detection system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/fire-detection-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-detection-system-vadodara" />;
}
