import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Structural health monitoring in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional structural health monitoring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/structural-health-monitoring-vadodara" },
  openGraph: {
    title: "Structural health monitoring in Vadodara | VadodaraExperts",
    description: "Professional structural health monitoring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/structural-health-monitoring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structural-health-monitoring-vadodara" />;
}
