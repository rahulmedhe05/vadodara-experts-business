import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "epoxy flooring repair in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional epoxy flooring repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/epoxy-flooring-repair-vadodara" },
  openGraph: {
    title: "epoxy flooring repair in Vadodara | VadodaraExperts",
    description: "Professional epoxy flooring repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/epoxy-flooring-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="epoxy-flooring-repair-vadodara" />;
}
