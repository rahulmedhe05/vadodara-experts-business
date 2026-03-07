import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Connection detail in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional connection detail services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/connection-detail-vadodara" },
  openGraph: {
    title: "Connection detail in Vadodara | VadodaraExperts",
    description: "Professional connection detail services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/connection-detail-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="connection-detail-vadodara" />;
}
