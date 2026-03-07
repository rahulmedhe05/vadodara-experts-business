import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "abrasion resistant epoxy in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional abrasion resistant epoxy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/abrasion-resistant-epoxy-vadodara" },
  openGraph: {
    title: "abrasion resistant epoxy in Vadodara | VadodaraExperts",
    description: "Professional abrasion resistant epoxy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/abrasion-resistant-epoxy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="abrasion-resistant-epoxy-vadodara" />;
}
