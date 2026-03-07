import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Building structural audit in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional building structural audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/building-structural-audit-vadodara" },
  openGraph: {
    title: "Building structural audit in Vadodara | VadodaraExperts",
    description: "Professional building structural audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/building-structural-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-structural-audit-vadodara" />;
}
