import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "IT park security in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional it park security services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/it-park-security-vadodara" },
  openGraph: {
    title: "IT park security in Vadodara | VadodaraExperts",
    description: "Professional it park security services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/it-park-security-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="it-park-security-vadodara" />;
}
