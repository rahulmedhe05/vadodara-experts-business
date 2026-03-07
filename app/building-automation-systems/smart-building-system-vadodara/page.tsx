import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "smart building system in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional smart building system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/smart-building-system-vadodara" },
  openGraph: {
    title: "smart building system in Vadodara | VadodaraExperts",
    description: "Professional smart building system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/smart-building-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-building-system-vadodara" />;
}
