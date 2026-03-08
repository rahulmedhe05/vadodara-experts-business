import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Venus geyser service in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional venus geyser service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/venus-geyser-service-vadodara" },
  openGraph: {
    title: "Venus geyser service in Vadodara | VadodaraExperts",
    description: "Professional venus geyser service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/venus-geyser-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="venus-geyser-service-vadodara" />;
}
