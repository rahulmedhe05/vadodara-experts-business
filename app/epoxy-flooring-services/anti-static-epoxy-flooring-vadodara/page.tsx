import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "anti-static epoxy flooring in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional anti-static epoxy flooring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/anti-static-epoxy-flooring-vadodara" },
  openGraph: {
    title: "anti-static epoxy flooring in Vadodara | VadodaraExperts",
    description: "Professional anti-static epoxy flooring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/anti-static-epoxy-flooring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-static-epoxy-flooring-vadodara" />;
}
