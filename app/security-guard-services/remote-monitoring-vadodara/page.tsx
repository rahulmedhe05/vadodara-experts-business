import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Remote monitoring in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional remote monitoring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/remote-monitoring-vadodara" },
  openGraph: {
    title: "Remote monitoring in Vadodara | VadodaraExperts",
    description: "Professional remote monitoring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/remote-monitoring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="remote-monitoring-vadodara" />;
}
