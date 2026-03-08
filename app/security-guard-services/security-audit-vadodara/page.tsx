import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Security audit in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional security audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/security-audit-vadodara" },
  openGraph: {
    title: "Security audit in Vadodara | VadodaraExperts",
    description: "Professional security audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/security-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="security-audit-vadodara" />;
}
