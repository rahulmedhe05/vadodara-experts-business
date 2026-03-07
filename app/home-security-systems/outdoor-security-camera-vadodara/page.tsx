import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Outdoor security camera in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional outdoor security camera services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/outdoor-security-camera-vadodara" },
  openGraph: {
    title: "Outdoor security camera in Vadodara | VadodaraExperts",
    description: "Professional outdoor security camera services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/outdoor-security-camera-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="outdoor-security-camera-vadodara" />;
}
