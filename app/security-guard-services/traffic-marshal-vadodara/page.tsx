import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Traffic marshal in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional traffic marshal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/traffic-marshal-vadodara" },
  openGraph: {
    title: "Traffic marshal in Vadodara | VadodaraExperts",
    description: "Professional traffic marshal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/traffic-marshal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="traffic-marshal-vadodara" />;
}
