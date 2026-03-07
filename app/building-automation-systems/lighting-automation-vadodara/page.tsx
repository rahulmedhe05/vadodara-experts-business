import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "lighting automation in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional lighting automation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/lighting-automation-vadodara" },
  openGraph: {
    title: "lighting automation in Vadodara | VadodaraExperts",
    description: "Professional lighting automation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/lighting-automation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lighting-automation-vadodara" />;
}
