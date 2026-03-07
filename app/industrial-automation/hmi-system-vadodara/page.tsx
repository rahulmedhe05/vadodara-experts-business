import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "HMI system in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional hmi system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/hmi-system-vadodara" },
  openGraph: {
    title: "HMI system in Vadodara | VadodaraExperts",
    description: "Professional hmi system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/hmi-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hmi-system-vadodara" />;
}
