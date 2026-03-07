import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Gate intercom system in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional gate intercom system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/gate-intercom-system-vadodara" },
  openGraph: {
    title: "Gate intercom system in Vadodara | VadodaraExperts",
    description: "Professional gate intercom system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/gate-intercom-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gate-intercom-system-vadodara" />;
}
