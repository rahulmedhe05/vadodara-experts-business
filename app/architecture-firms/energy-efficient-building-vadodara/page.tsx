import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Energy efficient building in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional energy efficient building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/energy-efficient-building-vadodara" },
  openGraph: {
    title: "Energy efficient building in Vadodara | VadodaraExperts",
    description: "Professional energy efficient building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/energy-efficient-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="energy-efficient-building-vadodara" />;
}
