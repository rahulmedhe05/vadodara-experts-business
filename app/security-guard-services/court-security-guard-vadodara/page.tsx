import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Court security guard in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional court security guard services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/court-security-guard-vadodara" },
  openGraph: {
    title: "Court security guard in Vadodara | VadodaraExperts",
    description: "Professional court security guard services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/court-security-guard-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="court-security-guard-vadodara" />;
}
