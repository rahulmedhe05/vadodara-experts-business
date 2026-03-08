import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "epoxy floor coating in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional epoxy floor coating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/epoxy-floor-coating-vadodara" },
  openGraph: {
    title: "epoxy floor coating in Vadodara | VadodaraExperts",
    description: "Professional epoxy floor coating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/epoxy-floor-coating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="epoxy-floor-coating-vadodara" />;
}
