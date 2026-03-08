import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Security system AMC in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional security system amc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/security-system-amc-vadodara" },
  openGraph: {
    title: "Security system AMC in Vadodara | VadodaraExperts",
    description: "Professional security system amc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/security-system-amc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="security-system-amc-vadodara" />;
}
