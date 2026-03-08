import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Mixed use building design in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional mixed use building design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/mixed-use-building-design-vadodara" },
  openGraph: {
    title: "Mixed use building design in Vadodara | VadodaraExperts",
    description: "Professional mixed use building design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/mixed-use-building-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mixed-use-building-design-vadodara" />;
}
