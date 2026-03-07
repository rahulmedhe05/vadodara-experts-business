import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Usha geyser service in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional usha geyser service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/usha-geyser-service-vadodara" },
  openGraph: {
    title: "Usha geyser service in Vadodara | VadodaraExperts",
    description: "Professional usha geyser service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/usha-geyser-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="usha-geyser-service-vadodara" />;
}
