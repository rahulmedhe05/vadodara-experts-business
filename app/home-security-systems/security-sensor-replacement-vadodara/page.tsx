import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Security sensor replacement in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional security sensor replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/security-sensor-replacement-vadodara" },
  openGraph: {
    title: "Security sensor replacement in Vadodara | VadodaraExperts",
    description: "Professional security sensor replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/security-sensor-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="security-sensor-replacement-vadodara" />;
}
