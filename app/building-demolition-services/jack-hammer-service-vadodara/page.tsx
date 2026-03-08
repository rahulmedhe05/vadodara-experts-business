import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "jack hammer service in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional jack hammer service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/jack-hammer-service-vadodara" },
  openGraph: {
    title: "jack hammer service in Vadodara | VadodaraExperts",
    description: "Professional jack hammer service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/jack-hammer-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="jack-hammer-service-vadodara" />;
}
