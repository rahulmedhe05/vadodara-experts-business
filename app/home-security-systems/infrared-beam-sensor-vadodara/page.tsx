import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Infrared beam sensor in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional infrared beam sensor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/infrared-beam-sensor-vadodara" },
  openGraph: {
    title: "Infrared beam sensor in Vadodara | VadodaraExperts",
    description: "Professional infrared beam sensor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/infrared-beam-sensor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="infrared-beam-sensor-vadodara" />;
}
