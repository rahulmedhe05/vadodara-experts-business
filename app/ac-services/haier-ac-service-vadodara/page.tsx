import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ac-services")!;

export const metadata: Metadata = {
  title: "Haier AC service in Vadodara | AC Services | VadodaraExperts",
  description: "Professional haier ac service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ac-services/haier-ac-service-vadodara" },
  openGraph: {
    title: "Haier AC service in Vadodara | VadodaraExperts",
    description: "Professional haier ac service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ac-services/haier-ac-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="haier-ac-service-vadodara" />;
}
