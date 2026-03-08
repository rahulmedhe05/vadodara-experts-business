import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Weekend home design in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional weekend home design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/weekend-home-design-vadodara" },
  openGraph: {
    title: "Weekend home design in Vadodara | VadodaraExperts",
    description: "Professional weekend home design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/weekend-home-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="weekend-home-design-vadodara" />;
}
