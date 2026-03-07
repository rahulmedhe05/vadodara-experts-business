import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "12 hour duty security in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional 12 hour duty security services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/12-hour-duty-security-vadodara" },
  openGraph: {
    title: "12 hour duty security in Vadodara | VadodaraExperts",
    description: "Professional 12 hour duty security services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/12-hour-duty-security-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="12-hour-duty-security-vadodara" />;
}
