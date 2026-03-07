import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "PAN card services in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional pan card services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/pan-card-services-vadodara" },
  openGraph: {
    title: "PAN card services in Vadodara | VadodaraExperts",
    description: "Professional pan card services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/pan-card-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pan-card-services-vadodara" />;
}
