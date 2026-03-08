import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "epoxy mortar flooring in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional epoxy mortar flooring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/epoxy-mortar-flooring-vadodara" },
  openGraph: {
    title: "epoxy mortar flooring in Vadodara | VadodaraExperts",
    description: "Professional epoxy mortar flooring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/epoxy-mortar-flooring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="epoxy-mortar-flooring-vadodara" />;
}
