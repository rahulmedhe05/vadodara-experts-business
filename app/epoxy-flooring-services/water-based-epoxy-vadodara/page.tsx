import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "water based epoxy in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional water based epoxy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/water-based-epoxy-vadodara" },
  openGraph: {
    title: "water based epoxy in Vadodara | VadodaraExperts",
    description: "Professional water based epoxy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/water-based-epoxy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-based-epoxy-vadodara" />;
}
