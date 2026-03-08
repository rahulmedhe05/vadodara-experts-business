import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Security AMC in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional security amc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/security-amc-vadodara" },
  openGraph: {
    title: "Security AMC in Vadodara | VadodaraExperts",
    description: "Professional security amc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/security-amc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="security-amc-vadodara" />;
}
