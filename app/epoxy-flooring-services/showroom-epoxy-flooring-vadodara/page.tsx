import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "showroom epoxy flooring in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional showroom epoxy flooring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/showroom-epoxy-flooring-vadodara" },
  openGraph: {
    title: "showroom epoxy flooring in Vadodara | VadodaraExperts",
    description: "Professional showroom epoxy flooring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/showroom-epoxy-flooring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="showroom-epoxy-flooring-vadodara" />;
}
