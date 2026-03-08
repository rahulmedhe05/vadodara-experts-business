import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Whirlpool chimney service in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional whirlpool chimney service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/whirlpool-chimney-service-vadodara" },
  openGraph: {
    title: "Whirlpool chimney service in Vadodara | VadodaraExperts",
    description: "Professional whirlpool chimney service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/whirlpool-chimney-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="whirlpool-chimney-service-vadodara" />;
}
