import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Clean room design in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional clean room design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/clean-room-design-vadodara" },
  openGraph: {
    title: "Clean room design in Vadodara | VadodaraExperts",
    description: "Professional clean room design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/clean-room-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="clean-room-design-vadodara" />;
}
