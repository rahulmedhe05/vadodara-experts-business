import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "diamond grinding floor in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional diamond grinding floor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/diamond-grinding-floor-vadodara" },
  openGraph: {
    title: "diamond grinding floor in Vadodara | VadodaraExperts",
    description: "Professional diamond grinding floor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/diamond-grinding-floor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="diamond-grinding-floor-vadodara" />;
}
