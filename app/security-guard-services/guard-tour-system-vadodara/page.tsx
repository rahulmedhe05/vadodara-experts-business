import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Guard tour system in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional guard tour system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/guard-tour-system-vadodara" },
  openGraph: {
    title: "Guard tour system in Vadodara | VadodaraExperts",
    description: "Professional guard tour system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/guard-tour-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="guard-tour-system-vadodara" />;
}
