import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Logistics park design in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional logistics park design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/logistics-park-design-vadodara" },
  openGraph: {
    title: "Logistics park design in Vadodara | VadodaraExperts",
    description: "Professional logistics park design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/logistics-park-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="logistics-park-design-vadodara" />;
}
