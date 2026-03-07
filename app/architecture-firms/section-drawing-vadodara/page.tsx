import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Section drawing in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional section drawing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/section-drawing-vadodara" },
  openGraph: {
    title: "Section drawing in Vadodara | VadodaraExperts",
    description: "Professional section drawing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/section-drawing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="section-drawing-vadodara" />;
}
