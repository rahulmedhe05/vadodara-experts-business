import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "vinyl ester flooring in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional vinyl ester flooring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/vinyl-ester-flooring-vadodara" },
  openGraph: {
    title: "vinyl ester flooring in Vadodara | VadodaraExperts",
    description: "Professional vinyl ester flooring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/vinyl-ester-flooring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vinyl-ester-flooring-vadodara" />;
}
