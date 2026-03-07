import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Bodyguard services in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional bodyguard services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/bodyguard-services-vadodara" },
  openGraph: {
    title: "Bodyguard services in Vadodara | VadodaraExperts",
    description: "Professional bodyguard services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/bodyguard-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bodyguard-services-vadodara" />;
}
