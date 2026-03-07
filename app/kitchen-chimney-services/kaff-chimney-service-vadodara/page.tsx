import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Kaff chimney service in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional kaff chimney service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/kaff-chimney-service-vadodara" },
  openGraph: {
    title: "Kaff chimney service in Vadodara | VadodaraExperts",
    description: "Professional kaff chimney service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/kaff-chimney-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kaff-chimney-service-vadodara" />;
}
