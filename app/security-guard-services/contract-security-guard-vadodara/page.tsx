import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Contract security guard in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional contract security guard services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/contract-security-guard-vadodara" },
  openGraph: {
    title: "Contract security guard in Vadodara | VadodaraExperts",
    description: "Professional contract security guard services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/contract-security-guard-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="contract-security-guard-vadodara" />;
}
