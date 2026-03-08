import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "PIR sensor installation in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional pir sensor installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/pir-sensor-installation-vadodara" },
  openGraph: {
    title: "PIR sensor installation in Vadodara | VadodaraExperts",
    description: "Professional pir sensor installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/pir-sensor-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pir-sensor-installation-vadodara" />;
}
