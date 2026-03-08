import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Security officer in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional security officer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/security-officer-vadodara" },
  openGraph: {
    title: "Security officer in Vadodara | VadodaraExperts",
    description: "Professional security officer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/security-officer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="security-officer-vadodara" />;
}
