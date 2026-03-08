import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Floodlight camera installation in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional floodlight camera installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/floodlight-camera-installation-vadodara" },
  openGraph: {
    title: "Floodlight camera installation in Vadodara | VadodaraExperts",
    description: "Professional floodlight camera installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/floodlight-camera-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="floodlight-camera-installation-vadodara" />;
}
