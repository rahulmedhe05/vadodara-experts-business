import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "NRI PAN card service in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional nri pan card service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/nri-pan-card-service-vadodara" },
  openGraph: {
    title: "NRI PAN card service in Vadodara | VadodaraExperts",
    description: "Professional nri pan card service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/nri-pan-card-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nri-pan-card-service-vadodara" />;
}
