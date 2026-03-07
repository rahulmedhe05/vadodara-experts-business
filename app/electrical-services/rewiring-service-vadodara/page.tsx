import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Rewiring service in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional rewiring service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/rewiring-service-vadodara" },
  openGraph: {
    title: "Rewiring service in Vadodara | VadodaraExperts",
    description: "Professional rewiring service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/rewiring-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rewiring-service-vadodara" />;
}
