import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Structural drawing in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional structural drawing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/structural-drawing-vadodara" },
  openGraph: {
    title: "Structural drawing in Vadodara | VadodaraExperts",
    description: "Professional structural drawing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/structural-drawing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structural-drawing-vadodara" />;
}
