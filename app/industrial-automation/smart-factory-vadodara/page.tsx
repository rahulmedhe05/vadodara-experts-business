import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "smart factory in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional smart factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/smart-factory-vadodara" },
  openGraph: {
    title: "smart factory in Vadodara | VadodaraExperts",
    description: "Professional smart factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/smart-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-factory-vadodara" />;
}
