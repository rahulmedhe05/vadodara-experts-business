import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Racold geyser service in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional racold geyser service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/racold-geyser-service-vadodara" },
  openGraph: {
    title: "Racold geyser service in Vadodara | VadodaraExperts",
    description: "Professional racold geyser service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/racold-geyser-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="racold-geyser-service-vadodara" />;
}
