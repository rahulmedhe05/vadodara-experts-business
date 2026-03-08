import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Parking attendant in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional parking attendant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/parking-attendant-vadodara" },
  openGraph: {
    title: "Parking attendant in Vadodara | VadodaraExperts",
    description: "Professional parking attendant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/parking-attendant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-attendant-vadodara" />;
}
