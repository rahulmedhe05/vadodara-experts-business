import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Security guard deployment in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional security guard deployment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/security-guard-deployment-vadodara" },
  openGraph: {
    title: "Security guard deployment in Vadodara | VadodaraExperts",
    description: "Professional security guard deployment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/security-guard-deployment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="security-guard-deployment-vadodara" />;
}
