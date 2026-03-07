import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Temporary security guard in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional temporary security guard services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/temporary-security-guard-vadodara" },
  openGraph: {
    title: "Temporary security guard in Vadodara | VadodaraExperts",
    description: "Professional temporary security guard services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/temporary-security-guard-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="temporary-security-guard-vadodara" />;
}
