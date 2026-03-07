import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Building bye laws in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional building bye laws services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/building-bye-laws-vadodara" },
  openGraph: {
    title: "Building bye laws in Vadodara | VadodaraExperts",
    description: "Professional building bye laws services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/building-bye-laws-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-bye-laws-vadodara" />;
}
