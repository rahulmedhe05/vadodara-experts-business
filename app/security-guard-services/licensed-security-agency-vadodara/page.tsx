import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Licensed security agency in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional licensed security agency services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/licensed-security-agency-vadodara" },
  openGraph: {
    title: "Licensed security agency in Vadodara | VadodaraExperts",
    description: "Professional licensed security agency services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/licensed-security-agency-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="licensed-security-agency-vadodara" />;
}
