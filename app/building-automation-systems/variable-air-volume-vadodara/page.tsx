import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "variable air volume in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional variable air volume services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/variable-air-volume-vadodara" },
  openGraph: {
    title: "variable air volume in Vadodara | VadodaraExperts",
    description: "Professional variable air volume services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/variable-air-volume-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="variable-air-volume-vadodara" />;
}
