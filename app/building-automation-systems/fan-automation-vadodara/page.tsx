import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "fan automation in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional fan automation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/fan-automation-vadodara" },
  openGraph: {
    title: "fan automation in Vadodara | VadodaraExperts",
    description: "Professional fan automation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/fan-automation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fan-automation-vadodara" />;
}
