import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Sports event security in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional sports event security services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/sports-event-security-vadodara" },
  openGraph: {
    title: "Sports event security in Vadodara | VadodaraExperts",
    description: "Professional sports event security services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/sports-event-security-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sports-event-security-vadodara" />;
}
