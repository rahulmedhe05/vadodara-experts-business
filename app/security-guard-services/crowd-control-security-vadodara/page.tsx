import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Crowd control security in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional crowd control security services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/crowd-control-security-vadodara" },
  openGraph: {
    title: "Crowd control security in Vadodara | VadodaraExperts",
    description: "Professional crowd control security services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/crowd-control-security-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="crowd-control-security-vadodara" />;
}
