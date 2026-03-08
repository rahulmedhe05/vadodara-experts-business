import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "GPS tracking guard in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional gps tracking guard services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/gps-tracking-guard-vadodara" },
  openGraph: {
    title: "GPS tracking guard in Vadodara | VadodaraExperts",
    description: "Professional gps tracking guard services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/gps-tracking-guard-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gps-tracking-guard-vadodara" />;
}
