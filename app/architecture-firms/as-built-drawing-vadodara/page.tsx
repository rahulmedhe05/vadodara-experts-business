import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "As built drawing in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional as built drawing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/as-built-drawing-vadodara" },
  openGraph: {
    title: "As built drawing in Vadodara | VadodaraExperts",
    description: "Professional as built drawing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/as-built-drawing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="as-built-drawing-vadodara" />;
}
