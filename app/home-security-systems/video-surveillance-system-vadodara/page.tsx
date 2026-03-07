import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Video surveillance system in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional video surveillance system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/video-surveillance-system-vadodara" },
  openGraph: {
    title: "Video surveillance system in Vadodara | VadodaraExperts",
    description: "Professional video surveillance system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/video-surveillance-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="video-surveillance-system-vadodara" />;
}
