import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "liquid hardener in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional liquid hardener services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/liquid-hardener-vadodara" },
  openGraph: {
    title: "liquid hardener in Vadodara | VadodaraExperts",
    description: "Professional liquid hardener services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/liquid-hardener-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="liquid-hardener-vadodara" />;
}
