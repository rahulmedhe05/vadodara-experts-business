import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Security system upgrade in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional security system upgrade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/security-system-upgrade-vadodara" },
  openGraph: {
    title: "Security system upgrade in Vadodara | VadodaraExperts",
    description: "Professional security system upgrade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/security-system-upgrade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="security-system-upgrade-vadodara" />;
}
