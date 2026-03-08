import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Window sensor installation in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional window sensor installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/window-sensor-installation-vadodara" },
  openGraph: {
    title: "Window sensor installation in Vadodara | VadodaraExperts",
    description: "Professional window sensor installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/window-sensor-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="window-sensor-installation-vadodara" />;
}
