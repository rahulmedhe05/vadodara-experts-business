import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Virtual reality architecture in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional virtual reality architecture services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/virtual-reality-architecture-vadodara" },
  openGraph: {
    title: "Virtual reality architecture in Vadodara | VadodaraExperts",
    description: "Professional virtual reality architecture services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/virtual-reality-architecture-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="virtual-reality-architecture-vadodara" />;
}
