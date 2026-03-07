import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "sliding gate industrial in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional sliding gate industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/sliding-gate-industrial-vadodara" },
  openGraph: {
    title: "sliding gate industrial in Vadodara | VadodaraExperts",
    description: "Professional sliding gate industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/sliding-gate-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sliding-gate-industrial-vadodara" />;
}
