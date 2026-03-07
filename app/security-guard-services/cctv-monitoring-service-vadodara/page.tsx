import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "CCTV monitoring service in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional cctv monitoring service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/cctv-monitoring-service-vadodara" },
  openGraph: {
    title: "CCTV monitoring service in Vadodara | VadodaraExperts",
    description: "Professional cctv monitoring service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/cctv-monitoring-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cctv-monitoring-service-vadodara" />;
}
