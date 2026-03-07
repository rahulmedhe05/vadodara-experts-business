import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Wireless intercom system in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional wireless intercom system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/wireless-intercom-system-vadodara" },
  openGraph: {
    title: "Wireless intercom system in Vadodara | VadodaraExperts",
    description: "Professional wireless intercom system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/wireless-intercom-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wireless-intercom-system-vadodara" />;
}
