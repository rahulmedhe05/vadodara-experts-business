import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Alarm response service in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional alarm response service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/alarm-response-service-vadodara" },
  openGraph: {
    title: "Alarm response service in Vadodara | VadodaraExperts",
    description: "Professional alarm response service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/alarm-response-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="alarm-response-service-vadodara" />;
}
