import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "heat detection system in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional heat detection system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/heat-detection-system-vadodara" },
  openGraph: {
    title: "heat detection system in Vadodara | VadodaraExperts",
    description: "Professional heat detection system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/heat-detection-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heat-detection-system-vadodara" />;
}
