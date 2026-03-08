import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Cold storage design in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional cold storage design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/cold-storage-design-vadodara" },
  openGraph: {
    title: "Cold storage design in Vadodara | VadodaraExperts",
    description: "Professional cold storage design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/cold-storage-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cold-storage-design-vadodara" />;
}
