import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Battery operated security camera in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional battery operated security camera services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/battery-operated-security-camera-vadodara" },
  openGraph: {
    title: "Battery operated security camera in Vadodara | VadodaraExperts",
    description: "Professional battery operated security camera services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/battery-operated-security-camera-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="battery-operated-security-camera-vadodara" />;
}
