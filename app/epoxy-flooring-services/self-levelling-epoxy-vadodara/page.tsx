import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "self levelling epoxy in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional self levelling epoxy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/self-levelling-epoxy-vadodara" },
  openGraph: {
    title: "self levelling epoxy in Vadodara | VadodaraExperts",
    description: "Professional self levelling epoxy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/self-levelling-epoxy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="self-levelling-epoxy-vadodara" />;
}
