import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Smoke detector installation in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional smoke detector installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/smoke-detector-installation-vadodara" },
  openGraph: {
    title: "Smoke detector installation in Vadodara | VadodaraExperts",
    description: "Professional smoke detector installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/smoke-detector-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smoke-detector-installation-vadodara" />;
}
