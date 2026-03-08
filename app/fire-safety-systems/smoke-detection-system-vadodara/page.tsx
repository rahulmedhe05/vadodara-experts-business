import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "smoke detection system in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional smoke detection system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/smoke-detection-system-vadodara" },
  openGraph: {
    title: "smoke detection system in Vadodara | VadodaraExperts",
    description: "Professional smoke detection system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/smoke-detection-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smoke-detection-system-vadodara" />;
}
